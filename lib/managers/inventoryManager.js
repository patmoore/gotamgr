InventoryManagerType = ManagerType.createSubClass('inventoryManager',
    [
        'changePlayerInventory'
    ],
    {
        currentInventory: function() {
            var userId = Meteor.userId();
            return Inventory.databaseTable.findByUserId(userId);
        }
    },
    Inventory
);