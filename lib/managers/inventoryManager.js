InventoryManager = null;
InventoryManagerType = ManagerType.createSubClass('inventoryManager',
    [
        'changePlayerInventory',
        // used when reincarnating
        'clearPlayerInventory'
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
