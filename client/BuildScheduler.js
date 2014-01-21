/**
 * Created by patmoore on 12/9/13.
 */
BuildScheduler = function() {
    'use strict';
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
_.extend(BuildScheduler.prototype, {
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
        'use strict';
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
    schedule : function(buildingPlan, build_request, inventory, minEndTime, dependent) {
        if ( typeof(minEndTime) ==="undefined") {
            minEndTime = 0;
        }
        _.each(build_request, function(quantity, buildable, build_request) {
            var building = Buildables[buildable].buildings[0];
            for(var count =0; count < quantity; count++) {
                var buildOrder = new BuildOrder(minEndTime, building.builds[buildable].seconds, dependent);
                if ( typeof(buildingPlan[building]) === "undefined" ) {
                    buildingPlan[building] = [ buildOrder ];
                } else {
                    buildingPlan[building].push(buildOrder);
                }
                var dependencies =
                this.schedule(dependencies,  build_request, inventory, buildOrder);
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

/**
 *
 * minEndTime : time(seconds) from the scheduled end time (X) (which is unknown). So the last item to be built has minEndTime of 0 (i.e. X-0)
 * X is max(minEndTime) + duration of the item with the max(minEndTIme)
 * dependent : what is dependent on this BuildOrder being built
 * duration (seconds)
 * @constructor
 */
BuildOrder = function(minEndTime, duration, dependent) {
    this.minEndTime = minEndTime;
    this.duration = duration;
    this.dependent = dependent;
};

_.extend(BuildOrder.prototype, {
    dependentMinTime : function() {
        if ( typeof(this.dependent) === "undefined") {
            return this.minEndTime;
        } else {
            return this.minEndTime + this.dependent.chainMinTime();
        }
    },
    componentMinTime : function() {
        return this.chainMinTime() + this.duration;
    }
});

Meteor.startup(function() {
    var buildScheduler = new BuildScheduler();
    Deps.autorun(function(){
        var inventory = Session.get("inventory");
        var want = Session.get("want");
        var depth = Session.get("depth");
        var inventory_used = buildScheduler.needCalculate(want, inventory, depth);
        Session.set("inventory_used", inventory_used);
    });
});