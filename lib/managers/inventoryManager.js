InventoryManager = null;
InventoryManagerType = ManagerType.createSubClass('inventoryManager',
    [
        {
            changePlayerInventory: {
                permittedRoles: 'public'
            },
            // used when reincarnating
            clearPlayerInventory: {
                permittedRoles: 'public'
            },
            updatePlayerInventory: {
                permittedRoles: 'public'
            },
        }
    ],
    {
        playerInventoryCursor: function() {
            var userId = this.userId;
            var cursor = Inventory.databaseTable.findByUserId(userId);
            return cursor;
        }
    },
    Inventory
);


Meteor.startup(function() {
    Object.freeze(InventoryManagerType.prototype);
    InventoryManager = new InventoryManagerType();
});
