BuildPlanManager = null;

BuildPlanManagerType = ManagerType.createSubClass('buildPlanManager',
    [
        
    ],
    {
        currentBuildOrderCursor: function() {
            var userId = Meteor.userId();
            return BuildPlan.databaseTable.findByUserId(userId);
        }
    },
    BuildPlan,
    null,
    {
        ctor: function() {
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
        },
        /**
         * Converts
         * @param buildRequest { buildable1: quantity, ... buildableN: quantity }
         */
        createBuildOrders: function(buildRequest, parentBuildOrder) {
            var thatManager = this;
            var buildOrders;
            if ( parentBuildOrder ) {
                buildOrders = parentBuildOrder.componentBuildOrders = parentBuildOrder.componentBuildOrders || [];
            } else {
                buildOrders = [];
            }
            // only try to build things that have buildings that will build the item. (for example, we don't want to try building 'seconds' )
            _.each(buildRequest, function(quantity, buildable, buildRequest){
                if ( quantity < 1 || buildable === 'seconds') {
                    // screen out items in the buildRequest that have zero quantity.
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
//                    thatManager.addTo(inventory_needs, buildable, quantity);
//                    terminals[buildable] = true;
                    var buildOrder = new BuildOrder({
                        buildable:buildable,
                        dependentBuildOrder: parentBuildOrder,
                        buildTime: 0
                    });
                    buildOrders.push(buildOrder);
                    break;
                case 2:
                case 1:
                    // assumes that the item is only built by 1 building.
                    var building = buildings_that_can[0];
                        var howToBuild = building.builds[buildable];
                        for(var subComponentCount = 0; subComponentCount < quantity; subComponentCount++) {
                            var buildOrder = new BuildOrder({
                                buildable:buildable,
                                dependentBuildOrder: parentBuildOrder,
                                buildTime: howToBuild['seconds'](),
                                building: building.key
                            });

                            buildOrders.push(buildOrder);
                            _.each(howToBuild, function(component_quantity_fn, component) {
                                var component_quantity = component_quantity_fn();
                                var subBuildRequest = {};
                                subBuildRequest[component] = component_quantity;
                                thatManager.createBuildOrders(subBuildRequest, buildOrder);
                            });
                        }
                }
            });
        },
        /**
         *
         * @param buildPlan object with key : quantity needed.
         */
        needCalculate: function(buildOrder, inventory, depth) {
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
            _.each(buildRequest, function(quantity, buildable, buildRequest){
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

            // only try to build things that have buildings that will build the item. (for example, we don't want to try building 'seconds' )
            _.each(buildRequest, function(quantity, buildable, buildRequest){
                if ( quantity < 1 ) {
                    // screen out items in the buildRequest that have zero quantity.
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
                // we can't satisfy the buildRequest because additional components to 1+ of the build components need to be built first.
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
            _.each(buildRequest, function(quantity, buildable, buildRequest) {
                that.addTo(inventory, buildable, quantity);
            });
            return inventory_used;
        },

        /**
         *  depth-first
         * @param buildingPlan
         * @param buildPlan
         * @param inventory
         */
        schedule : function(buildPlan, inventory) {
            if ( typeof(leadTime) ==="undefined") {
                leadTime = 0;
            }
            var buildingPlan = {};

            this._createBuildOrders(buildingPlan, buildPlan, null);
            // now that we have all the buildOrders, we will begin actually scheduling them by looking for the BuildOrders
            // that have the largest leadTime, first checking for the component item already being in inventory.
        },
        /**
         * Create all the BuildOrders IGNORING existing inventory.
         * @param buildingPlan
         * @param buildPlan
         * @param leadTime
         * @param dependent
         * @private
         */
        _createBuildOrders : function(buildingPlan, buildPlan, dependentBuildOrder) {
            // look through each element of the build request and and create a buildOrder for it and the component buildables it depends on
            _.each(buildPlan, function(quantity, buildable, buildPlan) {
                if ( buildable === "seconds" || buildable === "silver") {
                    return;
                }
                var building = Buildables[buildable].buildings[0];

                for(var count =0; count < quantity; count++) {
                    // now create the BuildOrders for the components of buildable
                    var dependentBuildPlan = building.builds[buildable];
                    var buildOrder = new BuildOrder({buildable: buildable, dependentBuildOrder: dependentBuildOrder, buildTime:dependentBuildPlan.seconds});
                    if ( typeof(buildingPlan[building]) === "undefined" ) {
                        buildingPlan[building] = [ buildOrder ];
                    } else {
                        buildingPlan[building].push(buildOrder);
                    }
                    this._createBuildOrders(buildingPlan, dependentBuildPlan, buildOrder);
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
    }
);

Meteor.startup(function() {
    Object.freeze(BuildPlanManagerType.prototype);
    BuildPlanManager = new BuildPlanManagerType();
    var buildOrder = new BuildOrder();
    debugger;
    BuildPlanManager.createBuildOrders({trader: 1}, buildOrder);
    debugger;
});