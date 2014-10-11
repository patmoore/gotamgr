CampManager = null;

/**
 * ironmanbay + spy + level 14 great wyk + barter + level 15
 * harlaw + aid + 15
 *
 * Manage the build plan requests for the alliance.
 */
CampManagerType = ManagerType.createSubClass('campManager',
    [
        'updateCampInformation',
        'deleteCamp'
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
            var existingLocations = _.map(camps, function(camp) {
                return camp.campLocation;
            });
            var availableLocations = _.difference(CampLocation.symbols(), existingLocations);
            return availableLocations;
        },
        calculateCampStorables: function(allianceId) {
//            StorablesByCamp[][]
        },

    }
);

Meteor.startup(function() {
    Object.freeze(CampManagerType.prototype);
    CampManager = new CampManagerType();
});