DisruptorBeamManager = null;

/**
 *
 * Manage the build plan requests for the alliance.
 */
DisruptorBeamManagerType = ManagerType.create({
    callPrefix: 'disruptorBeamManager',
    meteorCallDefinitions: [
        {
            checkForOffers: {
                permissionCheck: 'public'
            }
        }
    ],
    meteorTopicDefinitions: {
    },
    properties: {
        playerDataUrl: {
            'value': 'http://gota-www.disruptorbeam.com/play/player_data/'
        }
    }
});

Meteor.startup(function() {
    Object.freeze(DisruptorBeamManagerType.prototype);
    DisruptorBeamManager = new DisruptorBeamManagerType();
});