PlayerManager = null;
/**
 * callPrefix, meteorCallDefinitions, meteorTopics, primaryDbObjectType, properties, extensions
 * @type {*|157}
 */
PlayerManagerType = ManagerType.create({
    callPrefix: 'player',
    meteorCallDefinitions: [
        {
            updatePlayerProfile: {
                permissionCheck: 'public'
            }
        }
    ],
    meteorTopicDefinitions: {
        currentPlayerCursor: function (userId) {
            var _userId = userId || this.userId;
            var cursor = Player.databaseTable.findByUserId(_userId);
            return cursor;
        }
    },
    primaryDbObjectType: Player,
    extensions: {
        currentPlayerId: function () {
            var currentPlayer = PlayerManager.findOneCurrentPlayer(this.userId);
            if (currentPlayer) {
                return currentPlayer.id;
            } else {
                return void(0);
            }
        }
    }
});

Meteor.startup(function() {
    Object.freeze(PlayerManagerType.prototype);
    PlayerManager = new PlayerManagerType();
});