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
}
_.extend(BuildScheduler.prototype, {
    /**
     *
     * @param build_request object with key : quantity needed.
     */
    schedule: function(build_request, inventory) {
        'use strict';
        var that = this;
        // breath-first search collect the immediate quantity of all required components for the items
        var inventory_needs = {};

        var terminals = that.cloneIt(that.terminals);
        _.each(build_request, function(quantity, buildable, build_request){
            // need to look for each building: we assume that each item can be built by only 1 building.
            var buildings_that_can = Buildables[buildable];
            switch(buildings_that_can.length){
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
        var haveEverything = _.reduce(inventory_needs, function(memo, quantity, buildable) {
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
            var subcomponents_used = this.schedule(inventory_needs, inventory);
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
    buildIt: function(build_request, inventory) {
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
