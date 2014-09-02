Player = DbObjectType.createSubClass('player', [
    {'userId' : { reference: true}},
    'characterFirstName',
    'characterLastName',
    'firstName',
    'lastName',
    // active inventory plan.
    'currentInventoryId',

    'allianceId',
    {
        allianceRole: {
            jsonHelper: 'AllianceRole'
        }
    },
    // HACK: we don't want to have the invite code here.
    // but sort of a security code to make sure that player is still invited.
    'allianceInviteCode',
    // buildPlan Ids
    'buildPlanIds',
    //
    'buildings',
], 'player',
    {
        allianceOfficer: {
            'get' : function() {
                return this.allianceRole && this.allianceRole.isOfficer()
            },
            'set': function() {
                this.allianceRole = AllianceRole.officer;
            }

        }
    },
    {
        allianceLeader: {
            'get' : function() {
                return this.allianceRole && this.allianceRole.isLeader()
            },
            'set': function() {
                this.allianceRole = AllianceRole.leader;
            }

        }
    }
);