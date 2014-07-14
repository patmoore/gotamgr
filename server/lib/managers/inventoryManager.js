Meteor.startup(function() {
    _.extend(InventoryManagerType.prototype, {
        createPlayerInventory: function(player) {
            var inventory = new Inventory({
                userId:player.userId,
                playerId:player.id,
                current:{},
                currentBuildings:{}
            });
            inventory._save();
            return inventory;
        },
        changePlayerInventory: function(inventoryIndex, newAmount) {
            var player = PlayerManager.currentPlayer();
            var inventory = Inventory.databaseTable.findByPlayerId(player.id);
            if ( inventory == null) {
                inventory = thatManager.createPlayerInventory(player);
            }
            inventory.current[inventoryIndex] = newAmount;
            inventory._save();
            return inventory;
        },
        clearPlayerInventory: function() {
            var thatManager = this;
            var player = PlayerManager.currentPlayer();
            Inventory.databaseTable.remove({playerId:player.id});
            var inventory = thatManager.createPlayerInventory(player);
            return inventory;
        }
    });
});