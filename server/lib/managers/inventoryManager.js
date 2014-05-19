Meteor.startup(function() {
    _.extend(InventoryManagerType.prototype, {
        changePlayerInventory: function(inventoryIndex, newAmount) {
            var userId = Meteor.userId();
            var inventory = Inventory.databaseTable.findByUserId(userId);
            inventory[inventoryIndex] = newAmount;
            inventory._save();
        }
    });
});