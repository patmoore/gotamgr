BuildPlanManager = null;

var terminals = {
    seconds :true,
    silver: true,
    gold: true,
};
_.each(Buildings.village_center.builds, function(component_quantity_fn, component) {
    terminals[component] = true;
});

_.each(Buildings.shop.builds, function(component_quantity_fn, component) {
    terminals[component] = true;
});
BuildPlanManagerType = ManagerType.createSubClass('buildPlanManager',
    [
        'createBuildPlan',
        'addToBuildInventory',
        'deletePlayerBuildPlan'
    ],
    {
        currentBuildOrderCursor: function() {
            var thatManager = this.thatManager;
            var userId = thatManager.userId;
            return BuildPlan.databaseTable.findByUserId(userId);
        },
        currentPlayerBuildPlansCursor : function() {
            var thatManager = this.thatManager;
            var currentPlayer = PlayerManager.findOneCurrentPlayer(this.userId);
            if ( currentPlayer ) {
                var buildPlans = BuildPlan.databaseTable.findByPlayerId(currentPlayer.id);
                return buildPlans;
            } else {
                return null;
            }
        }
    },
    BuildPlan,
    {
        terminals: {
            value: terminals
        }
    },
    {
        /**
         * Converts
         * @param buildRequest { storable1: quantity, ... storableN: quantity }
         */
        createBuildOrders: function(buildRequest, parentBuildOrder, buildPlan, options) {
            var thatManager = this;
            var buildOrders;
            if ( !buildRequest ) {
                debugger;
            } else if ( parentBuildOrder ) {
                buildOrders = parentBuildOrder.componentBuildOrders = parentBuildOrder.componentBuildOrders || [];
            } else {
                buildOrders = [];
            }
            // only try to build things that have buildings that will build the item. (for example, we don't want to try building 'seconds' )
            _.each(buildRequest, function(quantity, storableKey, buildRequest){
                if ( quantity < 1 || storableKey === 'seconds') {
                    // screen out items in the buildRequest that have zero quantity.
                    return;
                }
                var storable = Storables[storableKey];
                var adventurable = Adventurable[storableKey];
                // need to look for each building: we assume that each item can be built by only 1 building.
                var buildings_that_can = storable && storable.buildings?storable.buildings:[];
                var number_of_buildings;
                if ( typeof(buildings_that_can) === "undefined") {
                    number_of_buildings = 0;
                } else {
                    number_of_buildings = buildings_that_can.length;
                }
                if (number_of_buildings == 0) {
                    // no buildings builds the component (terminal component)
//                    thatManager.addTo(inventory_needs, storable, quantity);
//                    terminals[storable] = true;
                    var buildOrder = new BuildOrder({
                        storable: storable,
                        adventurable: adventurable,
                        dependentBuildOrder: parentBuildOrder,
                        buildTime: 0,
                        quantity: quantity
                    });
                    buildOrders.push(buildOrder);
                } else {
                    // assumes that the item is only built by 1 building.
                    var building = buildings_that_can[0];
                    // TODO: a loop to find best choice?
                    var howToBuild = building.builds[storableKey];
                    var buildTime = howToBuild && typeof howToBuild.seconds === 'function'? howToBuild['seconds'](): 0;
                    if ( storable.resource ) {
                        var buildOrder = new BuildOrder({
                            storable:storable,
                            adventurable: adventurable,
                            dependentBuildOrder: parentBuildOrder,
                            buildTime: buildTime * quantity,
                            building: building,
                            quantity: quantity
                        });
                    } else {
                        for (var subComponentCount = 0; subComponentCount < quantity; subComponentCount++) {
                            var buildOrder = new BuildOrder({
                                storable: storable,
                                adventurable: adventurable,
                                dependentBuildOrder: parentBuildOrder,
                                buildTime: buildTime,
                                building: building,
                                quantity: 1
                            });

                            buildOrders.push(buildOrder);
                            _.each(howToBuild, function (component_quantity_fn, component) {
                                var component_quantity = component_quantity_fn();
                                var subBuildRequest = {};
                                subBuildRequest[component] = component_quantity;
                                thatManager.createBuildOrders(subBuildRequest, buildOrder, buildPlan, options);
                            });
                        }
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
            _.each(buildOrder, function(quantity, storable, buildRequest){
                if ( quantity < 1 ) {
                    // handle 0 quantities
                    return;
                }
                if ( typeof(inventory[storable]) ==="undefined") {
                    build_delta[storable] = quantity;
                } else {
                    build_delta[storable] = quantity - inventory[storable];
                }
                if (build_delta[storable] > 0 ) {
                    haveEveryThing = false;
                }
            });

            // only try to build things that have buildings that will build the item. (for example, we don't want to try building 'seconds' )
            _.each(buildOrder, function(quantity, storable, buildRequest){
                if ( quantity < 1 ) {
                    // screen out items in the buildRequest that have zero quantity.
                    return;
                }
                // need to look for each building: we assume that each item can be built by only 1 building.
                var buildings_that_can = typeof(Storables[storable]) ==="undefined"?[] : Storables[storable].buildings;
                var number_of_buildings;
                if ( typeof(buildings_that_can) === "undefined") {
                    number_of_buildings = 0;
                } else {
                    number_of_buildings = buildings_that_can.length;
                }
                switch(number_of_buildings){
                case 0:
                    // no buildings builds the component (terminal component)
                    that.addTo(inventory_needs, storable, quantity);
                    terminals[storable] = true;
                    break;
                case 2:
                case 1:
                    // assumes that the item is only built by 1 building.
                    _.each(buildings_that_can, function(building, building_name) {
                        _.each(building.builds[storable], function(component_quantity_fn, component) {
                            var component_quantity = component_quantity_fn();
                            that.addTo(inventory_needs, component, quantity * component_quantity);
                        });
                    });
                    break;
                }
            });

            // find if all items in build request can be satisfied with inventory
            haveEverything = _.reduce(inventory_needs, function(memo, quantity, storable) {
                // determine for each item if there is less than need.
                // reduce to true or false.
                if ( memo === true && terminals[storable] !== true) {
                    memo = inventory_needs[storable] <= inventory[storable];
                }
                return memo;
            }, true);

            // all the storables used.
            var inventory_used = {};
            if (haveEverything === false) {
                // we can't satisfy the buildRequest because additional components to 1+ of the build components need to be built first.
                // if any canNOT be satisfied then collect all the needed components
                // this is because a component may be consumed by a component eariler in the build cycle.
                var subcomponents_used = this.needCalculate(inventory_needs, inventory, depth-1);
                _.each(subcomponents_used, function(quantity, storable) {
                    that.addTo(inventory_used, storable, quantity);
                });
            } else {
                inventory_used = this.cloneIt(inventory_needs);
            }

            // now consume the inventory_needs
            // sort by build time/cost : favor building long items last to allow better chance to adjust
            // TODO only remove the inventory item when the inventory item is actually used.
            _.each(inventory_needs, function(quantity, storable, inventory_needs) {
                that.addTo(inventory, storable, -inventory_needs[storable]);
                that.addTo(inventory_used, storable, inventory_needs[storable]);
            });
            _.each(buildOrder, function(quantity, storable, buildRequest) {
                that.addTo(inventory, storable, quantity);
            });
            return inventory_used;
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
            // look through each element of the build request and and create a buildOrder for it and the component storables it depends on
            _.each(buildPlan, function(quantity, storable, buildPlan) {
                if ( storable === "seconds" || storable === "silver") {
                    return;
                }
                var building = Storables[storable].buildings[0];

                for(var count =0; count < quantity; count++) {
                    // now create the BuildOrders for the components of storable
                    var dependentBuildPlan = building.builds[storable];
                    var buildOrder = new BuildOrder({storable: storable, dependentBuildOrder: dependentBuildOrder, buildTime:dependentBuildPlan.seconds});
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
            var cloned = JSON.parse(
                JSON.stringify(object));
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
});
