/**
 * A player can have multiple plans.
 * TODO: alliance plans
 *
 * @type {*}
 */
BuildPlan = DbObjectType.createSubClass('buildPlan',
    [
        'userId',
        // the plan name ( i.e. build plan for green forks)
        'displayName',
        'buildOrders',
        // key is building.key, values are links to the buildOrders
        'buildingsBuildSchedule'
    ],
    'buildPlan'
);
