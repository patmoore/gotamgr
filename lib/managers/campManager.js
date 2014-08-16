CampManager = null;

/**
 * ironmanbay + spy + level 14 great wyk + barter + level 15
 * harlaw + aid + 15
 *
 * Manage the build plan requests for the alliance.
 */
CampManagerType = ManagerType.createSubClass('campManager',
    [
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
        availableLocationsForAlliance: function(allianceId) {
            var camps = this.thatManager.findFetchAllianceCamps(allianceId);
            var availableLocations = CampLocation.symbols();
            _.each(camps, function(camp) {
                availableLocations = _.without(availableLocations, camp.campLocation);
            });
            return availableLocations;
        },
        calculateCampBuildables: function(allianceId) {
//            BuildablesByCamp[][]
        },

    }
);

Meteor.startup(function() {
    Object.freeze(CampManagerType.prototype);
    CampManager = new CampManagerType();
});