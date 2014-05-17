Player = DbObjectType.createSubClass('player', [
    'userId',
    // active inventory plan.
    'currentInventoryId',
    'allianceId',
    'buildPlan'
], 'player');