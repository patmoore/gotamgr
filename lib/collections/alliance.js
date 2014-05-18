/**
 * Alliance connects the players together
 * @type {*}
 */
Alliance = DbObjectType.createSubClass('alliance',
    [
        'displayName',
        'players'
    ], 'alliance');