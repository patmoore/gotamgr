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
            var thatManager = this;
            var player = PlayerManager.findOneCurrentPlayer();
            var inventory = Inventory.databaseTable.findOneByPlayerId(player.id);
            if ( inventory == null) {
                inventory = thatManager.createPlayerInventory(player);
            }
            inventory.current[inventoryIndex] = newAmount;
            inventory._save();
            return inventory;
        },
        updatePlayerInventory: function(changedInventory) {
            var thatManager = this;
            var player = PlayerManager.findOneCurrentPlayer();
            var inventory = Inventory.databaseTable.findOneByPlayerId(player.id);
            if ( inventory == null) {
                inventory = thatManager.createPlayerInventory(player);
            }
            inventory.upsertFromUntrusted({clientObj:{ current: changedInventory} });
            return inventory;
        },
        clearPlayerInventory: function() {
            var thatManager = this;
            var player = PlayerManager.findOneCurrentPlayer();
            Inventory.databaseTable.remove({playerId:player.id});
            var inventory = thatManager.createPlayerInventory(player);
            return inventory;
        }
    });
});