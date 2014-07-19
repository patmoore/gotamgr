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
        }
    ],
    'alliance');

