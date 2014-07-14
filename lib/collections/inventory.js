/**
 * Actual inventory for a player.
 *
 * @type {*}
 */
Inventory = DbObjectType.createSubClass('inventory',
    [
        'userId',
        'playerId',
        // a general object key is buildable.
        'current',
        // current buildings
        // { <buildingKey> : {improvement: <number_of_times_improved> } }
        'currentBuildings'
    ],
    'inventory');