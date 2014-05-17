PlayerManager = null;
PlayerManagerType = function() {
    ManagerType.call( this, 'player',
        [ 'playerInventory' ],
        [ 'changePlayerInventory' ]
    );
}
_.extend(PlayerManagerType.prototype, {
    playerInventoryCursor: function() {
        return Inventory.find();
    }
});
ManagerType.createSubClass(PlayerManagerType);

Meteor.startup(function() {
    Object.freeze(PlayerManagerType.prototype);
    PlayerManager = new PlayerManagerType();
});