AllianceManager = null;

/**
 *
 * Manage the build plan requests for the alliance.
 */
AllianceManagerType = ManagerType.createSubClass('allianceManager',
    [
        'buildCamp'
    ],
    {
        currentPlayerAllianceCursor: function() {
            var thatManager = this;
            var player = PlayerManager.findOneCurrentPlayer(this.userId);
            debugger;
            if ( player != null ) {
                var allianceCursor = Alliance.databaseTable.findById(player.allianceId);
                return allianceCursor;
            } else {
                return null;
            }
        },
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
        alliancePlayersInventoryCursor: null,
    },
    Alliance
);

Meteor.startup(function() {
    Object.freeze(AllianceManagerType.prototype);
    AllianceManager = new AllianceManagerType();
});