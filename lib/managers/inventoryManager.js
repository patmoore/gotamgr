InventoryManagerType = ManagerType.createSubClass('inventoryManager',
    [
        'changePlayerInventory'
    ],
    {
        currentInventoryCursor: function() {
            var userId = this.userId;
            return Inventory.databaseTable.findByUserId(userId);
        }
    },
    Inventory
);