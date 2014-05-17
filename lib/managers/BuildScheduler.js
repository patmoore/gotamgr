BuildScheduler = null;

BuildSchedulerType = function() {
    var that = this;
    this.terminals = {
        seconds :true,
        silver: true,
        gold: true,
    };
    _.each(Buildings.village_center.builds, function(component_quantity_fn, component) {
        that.terminals[component] = true;
    });

    _.each(Buildings.shop.builds, function(component_quantity_fn, component) {
        that.terminals[component] = true;
    });
};
ManagerType.createSubClass(BuildSchedulerType);

_.extend(BuildSchedulerType.prototype, {
    /**
     *
     * @param build_request object with key : quantity needed.
     */
    needCalculate: function(build_request, inventory, depth) {
        if ( typeof(depth) ==="undefined" ) {
            depth = 100;
        } else if ( depth <= 0 ) {
            return;
        }
        var that = this;
        // breath-first search collect the immediate quantity of all required components for the items
        var inventory_needs = {};

        var terminals = that.cloneIt(that.terminals);
        var haveEverything = true;
        // find the difference between needed and have so that items that are already in inventory reduce
        // demands appropriately.
        var build_delta = {};
        _.each(build_request, function(quantity, buildable, build_request){
            if ( quantity < 1 ) {
                // handle 0 quantities
                return;
            }
            if ( typeof(inventory[buildable]) ==="undefined") {
                build_delta[buildable] = quantity;
            } else {
                build_delta[buildable] = quantity - inventory[buildable];
            }
            if (build_delta[buildable] > 0 ) {
                haveEveryThing = false;
            }
        });
        _.each(build_request, function(quantity, buildable, build_request){
            if ( quantity < 1 ) {
                // handle 0 quantities
                return;
            }
            // need to look for each building: we assume that each item can be built by only 1 building.
            var buildings_that_can = typeof(Buildables[buildable]) ==="undefined"?[] : Buildables[buildable].buildings;
            var number_of_buildings;
            if ( typeof(buildings_that_can) === "undefined") {
                number_of_buildings = 0;
            } else {
                number_of_buildings = buildings_that_can.length;
            }
            switch(number_of_buildings){
            case 0:
                // no buildings builds the component (terminal component)
                that.addTo(inventory_needs, buildable, quantity);
                terminals[buildable] = true;
                break;
            case 2:
            case 1:
                // assumes that the item is only built by 1 building.
                _.each(buildings_that_can, function(building, building_name) {
                    _.each(building.builds[buildable], function(component_quantity_fn, component) {
                        var component_quantity = component_quantity_fn();
                        that.addTo(inventory_needs, component, quantity * component_quantity);
                    });
                });
                break;
            }
        });

        // find if all items in build request can be satisfied with inventory
        haveEverything = _.reduce(inventory_needs, function(memo, quantity, buildable) {
            // determine for each item if there is less than need.
            // reduce to true or false.
            if ( memo === true && terminals[buildable] !== true) {
                memo = inventory_needs[buildable] <= inventory[buildable];
            }
            return memo;
        }, true);

        // all the buildables used.
        var inventory_used = {};
        if (haveEverything === false) {
            // we can't satisfy the build_request because additional components to 1+ of the build components need to be built first.
            // if any canNOT be satisfied then collect all the needed components
            // this is because a component may be consumed by a component eariler in the build cycle.
            var subcomponents_used = this.needCalculate(inventory_needs, inventory, depth-1);
            _.each(subcomponents_used, function(quantity, buildable) {
                that.addTo(inventory_used, buildable, quantity);
            });
        } else {
            inventory_used = this.cloneIt(inventory_needs);
        }

        // now consume the inventory_needs
        // sort by build time/cost : favor building long items last to allow better chance to adjust
        // TODO only remove the inventory item when the inventory item is actually used.
        _.each(inventory_needs, function(quantity, buildable, inventory_needs) {
            that.addTo(inventory, buildable, -inventory_needs[buildable]);
            that.addTo(inventory_used, buildable, inventory_needs[buildable]);
        });
        _.each(build_request, function(quantity, buildable, build_request) {
            that.addTo(inventory, buildable, quantity);
        });
        return inventory_used;
    },

    /**
     *  depth-first
     * @param buildingPlan
     * @param build_request
     * @param inventory
     */
    schedule : function(build_request, inventory) {
        if ( typeof(leadTime) ==="undefined") {
            leadTime = 0;
        }
        var buildingPlan = {};

        this._createBuildOrders(buildingPlan, build_request, null);
        // now that we have all the buildOrders, we will begin actually scheduling them by looking for the BuildOrders
        // that have the largest leadTime, first checking for the component item already being in inventory.
    },
    /**
     * Create all the BuildOrders IGNORING existing inventory.
     * @param buildingPlan
     * @param build_request
     * @param leadTime
     * @param dependent
     * @private
     */
    _createBuildOrders : function(buildingPlan, build_request, dependentBuildOrder) {
        // look through each element of the build request and and create a buildOrder for it and the component buildables it depends on
        _.each(build_request, function(quantity, buildable, build_request) {
            if ( buildable === "seconds" || buildable === "silver") {
                return;
            }
            var building = Buildables[buildable].buildings[0];

            for(var count =0; count < quantity; count++) {
                // now create the BuildOrders for the components of buildable
                var dependentBuildRequest = building.builds[buildable];
                var buildOrder = new BuildOrder(dependentBuildOrder, dependentBuildRequest.seconds);
                if ( typeof(buildingPlan[building]) === "undefined" ) {
                    buildingPlan[building] = [ buildOrder ];
                } else {
                    buildingPlan[building].push(buildOrder);
                }
                this._createBuildOrders(buildingPlan, dependentBuildRequest, buildOrder);
            }
        });
    },

    cloneIt: function(object) {
        var cloned = JSON.parse(JSON.stringify(object));
        return cloned;
    },
    addTo: function(object, key, value) {
        if ( typeof(object[key]) === "undefined") {
            object[key] = value;
        } else {
            object[key] += value;
        }
    }
});

Meteor.startup(function() {
    Object.freeze(BuildSchedulerType.prototype);
    BuildScheduler = new BuildSchedulerType();
});