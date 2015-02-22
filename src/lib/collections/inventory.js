/**
 * Actual inventory for a player.
 *
 * @type {*}
 */
Inventory = DbObjectType.create({
    typeName: 'inventory',
    properties: [
        'userId',
        'playerId',
        // a general object key is storable.
        'current',
        // current buildings
        // { <buildingKey> : {improvement: <number_of_times_improved> } }
        'currentBuildings'
    ],
    databaseTableName: 'inventory'
});