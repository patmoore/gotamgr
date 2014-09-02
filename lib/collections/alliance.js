/**
 * Alliance connects the players together
 * @type {*}
 */
Alliance = DbObjectType.createSubClass('alliance',
    [
        'displayName',
        {
            // hack should be indexed.
            'allianceInviteCode': {reference: true }
        },
        '_$_campIds'
    ],
    'alliance',
    {

    }
);

/**
 * a player's role within
 * @type {exports.Enum}
 */
AllianceRole = new Enums.Enum({
    member: {
        dbCode: 'member',
        isOfficer: function() {
            return false;
        },
        isLeader: function() {
            return false;
        }
    },
    officer: {
        dbCode: 'officer',
        isOfficer: function() {
            return true;
        },
        isLeader: function() {
            return false;
        }

    },
    leader: {
        dbCode: 'leader',
        isOfficer: function() {
            return true;
        },
        isLeader: function() {
            return true;
        }
    }
});

