PlayerManager = null;
/**
 * callPrefix, meteorCallDefinitions, meteorTopics, primaryDbObjectType, properties, extensions
 * @type {*|157}
 */
PlayerManagerType = ManagerType.createSubClass(
    'player',
    [
        'updatePlayerBuildPlan'
    ],
    {
        playerInventoryCursor: function() {
            var userId = Meteor.userId();
            return Inventory.find({userId:userId});
        },
        currentPlayerCursor: function() {
            var userId = this.userId;
            var cursor = Player.databaseTable.findByUserId(userId);
            return cursor;
        },
    },
    Player
);

_.extend(PlayerManagerType.prototype, {
    currentPlayerId: function() {
        var currentPlayer = PlayerManager.currentPlayer();
        if ( currentPlayer ) {
            return currentPlayer.id;
        } else {
            return void(0);
        }
    }
});

Meteor.startup(function() {
    Object.freeze(PlayerManagerType.prototype);
    PlayerManager = new PlayerManagerType();
});