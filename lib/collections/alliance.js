/**
 * Alliance connects the players together
 * @type {*}
 */
Alliance = DbObjectType.createSubClass('alliance',
    [
        'displayName',
        'playerIds',
        /**
         * key (userId) : [ plans ]
         */
        'playerBuildPlans'
    ],
    'alliance');

_.extend(Alliance.databaseTable, {
    findPlayersAllianceCursor: function(playerId) {
        return Alliance.databaseTable.find({playerIds: { $in: [ playerId ]}});
    }
});