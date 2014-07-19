Player = DbObjectType.createSubClass('player', [
    {'userId' : { reference: true}},
    'characterFirstName',
    'characterLastName',
    'firstName',
    'lastName',
    // active inventory plan.
    'currentInventoryId',
    'allianceId',
    // buildPlan Ids
    'buildPlanIds',
    'buildings',
], 'player');