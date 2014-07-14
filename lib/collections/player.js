Player = DbObjectType.createSubClass('player', [
    {'userId' : { reference: true}},
    'firstName',
    'lastName',
    'characterFirstName',
    'characterLastName',
    // active inventory plan.
    'currentInventoryId',
    'allianceId',
    // buildPlan Ids
    'buildPlanIds',
    'buildings',
], 'player');