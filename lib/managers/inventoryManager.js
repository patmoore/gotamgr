InventoryManager = null;
InventoryManagerType = ManagerType.create({
    callPrefix: 'inventoryManager',
    meteorCallDefinitions: [
        {
            changePlayerInventory: {
                permissionCheck: 'public'
            },
            // used when reincarnating
            clearPlayerInventory: {
                permissionCheck: 'public'
            },
            updatePlayerInventory: {
                permissionCheck: 'public'
            }
        }
    ],
    meteorTopicDefinitions: {
        playerInventoryCursor: function () {
            var userId = this.userId;
            var cursor = Inventory.databaseTable.findByUserId(userId);
            return cursor;
        }
    },
    primaryDbObjectType: Inventory
});


Meteor.startup(function() {
    Object.freeze(InventoryManagerType.prototype);
    InventoryManager = new InventoryManagerType();
});
