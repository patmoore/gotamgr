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
        }
    }
);

Meteor.startup(function() {
    Object.freeze(PlayerManagerType.prototype);
    PlayerManager = new PlayerManagerType();
});