/**
 * Alliance connects the players together
 * @type {*}
 */
Alliance = DbObjectType.create({
    typeName: 'alliance',
    properties: [
        'displayName',
        {
            // hack should be indexed.
            'allianceInviteCode': {reference: true},
            'allianceOfficerInviteCode': {reference: true}
        },
        '_$_campIds'
    ],
    databaseTableName: 'alliance'
});

/**
 * a player's role within
 * @type {exports.Enum}
 */
AllianceRole = new Enums.Enum({
    member: {
        dbCode: 'member',
        isMember: function () {
            return true;
        },
        isOfficer: function () {
            return false;
        },
        isLeader: function () {
            return false;
        }
    },
    officer: {
        dbCode: 'officer',
        isMember: function () {
            return true;
        },
        isOfficer: function () {
            return true;
        },
        isLeader: function () {
            return false;
        }

    },
    leader: {
        dbCode: 'leader',
        isMember: function () {
            return true;
        },
        isOfficer: function () {
            return true;
        },
        isLeader: function () {
            return true;
        }
    },
    // used to signal former/inactive players during updates.
    // currently not stored in database.
    departed: {
        dbCode: 'rm',
        isMember: function () {
            return false;
        },
        isOfficer: function () {
            return false;
        },
        isLeader: function () {
            return false;
        }
    }
});

