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
        // these are the {buildable_1:<quantity>, .. } demanded by the user
        'buildDemands',
//        // these are the build orders required to fulfill the demand.
//        'componentBuildOrders',
        // key is building.key, values are links to the buildOrders
        'buildingsBuildSchedule'
    ],
    'buildPlan'
);

_.extend(BuildPlan.prototype, {
    ctor: function() {
        this.buildingsBuildSchedule = [];
    },
    schedule: function() {
        var that = this;
//        _.each(this.buildOrders, function()
    }
});
