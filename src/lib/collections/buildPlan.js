/**
 * A player can have multiple plans.
 * TODO: alliance plans
 *
 * @type {*}
 */
BuildPlan = DbObjectType.create({
    typeName: 'buildPlan',
    properties: [
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
        'buildingsBuildSchedule'
//        'totals'
    ],
    databaseTableName: 'buildPlan',
    extensions: {
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

            if (buildOrder.building) {
                this.buildingsBuildSchedule = this.buildingsBuildSchedule || {};
                this.buildingsBuildSchedule[buildOrder.building.dbCode] = this.buildingsBuildSchedule[buildOrder.building.dbCode] || [];
            }
            if (buildOrder.building) {
                // put the components at the beginning of each array so we can display the array
                // in the order needed.
                // TODO : sort by when needed so 2 different buildPlans can jointly plan.
                if (this.buildingsBuildSchedule[buildOrder.building] == null) {
                    this.buildingsBuildSchedule[buildOrder.building] = [buildOrder];
                } else {
                    this.buildingsBuildSchedule[buildOrder.building].unshift(buildOrder);
                }
            } else {
                // might be adventure ( or buy in shop )
            }
        },
        orderBuildOrders: function () {
            var buildPlan = this;
            _.each(buildPlan.buildingsBuildSchedule, function (buildingsBuildScheduleArray, building) {

            });
        }
    }
});
