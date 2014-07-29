CampManager = null;

/**
 *
 * Manage the build plan requests for the alliance.
 */
CampManagerType = ManagerType.createSubClass('campManager',
    [
        'buildCamp'
    ],
    {
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
    Alliance,
    null,
    {
        calculateCampBuildables: function(allianceId) {
            BuildablesByCamp[][]
        },

    }
);

Meteor.startup(function() {
    Object.freeze(AllianceManagerType.prototype);
    AllianceManager = new AllianceManagerType();
});