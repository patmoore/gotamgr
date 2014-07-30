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