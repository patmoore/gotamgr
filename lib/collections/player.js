Player = DbObjectType.createSubClass('player', [
    {'userId' : { reference: true}},
    'characterFirstName',
    'characterLastName',
    'firstName',
    'lastName',
    // active inventory plan.
    'currentInventoryId',

    'allianceId',
    // HACK: we don't want to have the invite code here.
    // but sort of a security code to make sure that player is still invited.
    'allianceInviteCode',
    // buildPlan Ids
    'buildPlanIds',
    //
    'buildings',
], 'player');