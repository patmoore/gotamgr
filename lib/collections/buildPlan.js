/**
 * A player can have multiple plans.
 * TODO: alliance plans
 *
 * @type {*}
 */
BuildPlan = DbObjectType.createSubClass('buildPlan',
    [
        'userId',
        // specific to player
        'playerId',
        // OR across alliance
        'allianceId',

        // the plan name ( i.e. build plan for green forks)
        'displayName',
        // these are the {storable_1:<quantity>, .. } demanded by the user
        'buildDemands',
        // boolean
        'active',
        'buildPriority',
//        // these are the build orders required to fulfill the demand.
//        'componentBuildOrders',
        // key is building.key, values are links to the buildOrders
//        'buildingsBuildSchedule'
//        'totals'
    ],
    'buildPlan',
    {
        ctor: function () {
            this.buildingsBuildSchedule = [];
        },
        /**
         * add to the building plan
         * @param buildOrder
         */
        addComponentBuildOrder: function (buildOrder) {
            this.totalsByStorable = this.totalsByStorable || {};

            this.totalsByStorable[buildOrder.storable.dbCode] = this.totalsByStorable[buildOrder.storable.dbCode] || 0;
            this.totalsByStorable[buildOrder.storable.dbCode] += buildOrder.quantity;

            if ( buildOrder.building) {
                this.buildingsBuildSchedule = this.buildingsBuildSchedule || {};
                this.buildingsBuildSchedule[buildOrder.building.dbCode] = this.buildingsBuildSchedule[buildOrder.building.dbCode] || [];
            }
            // TODO : add to the building build order.
        }
    }
);
