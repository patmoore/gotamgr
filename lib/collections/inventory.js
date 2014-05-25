Inventory = DbObjectType.createSubClass('inventory',
    [
        'userId',
        // a general object key is buildable.
        'current',
    ],
    'inventory');