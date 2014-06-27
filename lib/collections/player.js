Player = DbObjectType.createSubClass('player', [
    {'userId' : { reference: true}},
    // active inventory plan.
    'currentInventoryId',
    'allianceId',
    'buildings',
    // buildPlan Ids
    'buildPlanIds'
], 'player');