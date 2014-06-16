Player = DbObjectType.createSubClass('player', [
    'userId',
    // active inventory plan.
    'currentInventoryId',
    'allianceId',
    'buildings',
    // buildPlan Ids
    'buildPlanIds'
], 'player');