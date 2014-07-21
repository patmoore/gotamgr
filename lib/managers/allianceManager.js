AllianceManager = null;

/**
 *
 * Manage the build plan requests for the alliance.
 */
AllianceManagerType = ManagerType.createSubClass('allianceManager',
    [

    ],
    {
//        currentPlayerAllianceCursor: function() {
//            var thatManager = this;
//            var player = PlayerManager.currentPlayer();
//            if ( player != null ) {
//                var allianceCursor = Alliance.databaseTable.findPlayersAllianceCursor(player.id);
//                return allianceCursor;
//            } else {
//                return null;
//            }
//        },
        alliancesCursor: function() {
            return Alliance.databaseTable.find();
        },
        alliancePlayersCursor: function(allianceId) {
            var cursor = Player.databaseTable.findByAllianceId(allianceId);
            return cursor;
        },
        selectedAllianceCursor: function(allianceId) {
            var cursor = Alliance.databaseTable.findById(allianceId);
            return cursor;
        },
        alliancePlayersInventoryCursor: function(allianceId) {
            var thatManager = this.thatManager;
            var players = thatManager.findFetchAlliancePlayers(allianceId);
            var playerIds = _.map(players, function(player) {
                return player.id;
            });
            return Inventory.databaseTable.findByPlayerId(playerIds);
        }
    },
    Alliance
);

Meteor.startup(function() {
    Object.freeze(AllianceManagerType.prototype);
    AllianceManager = new AllianceManagerType();
});