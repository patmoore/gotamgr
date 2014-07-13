/**
 * A player can have multiple plans.
 * TODO: alliance plans
 *
 * @type {*}
 */
BuildPlan = DbObjectType.createSubClass('buildPlan',
    [
        'userId',
        'playerId',
        // the plan name ( i.e. build plan for green forks)
        'displayName',
        'buildOrders',
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
