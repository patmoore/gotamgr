CampManager = null;

/**
 * ironmanbay + spy + level 14 great wyk + barter + level 15
 * harlaw + aid + 15
 *
 * Manage the build plan requests for the alliance.
 */
CampManagerType = ManagerType.createSubClass('campManager',
    [
        'buildCamp'
    ],
    {
        allianceCampsCursor: function(allianceId) {
            var camps = Camp.databaseTable.findByAllianceId(allianceId);
            return camps;
        }
    },
    Camp,
    null,
    {
        calculateCampBuildables: function(allianceId) {
//            BuildablesByCamp[][]
        },

    }
);

Meteor.startup(function() {
    Object.freeze(CampManagerType.prototype);
    CampManager = new CampManagerType();
});