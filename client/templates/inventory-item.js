Template.inventoryItem.remove_ = function(options) {
    return options.replace('_', ' ', 'g');
}

Template.inventoryItem.buildings = function(options) {
    var buildingNames = [];
    Buildables[options].forEach(function(building) {
        buildingNames.push(building.name);
    });
    return buildingNames.sort().join(',');
}

Template.inventoryItem.needs = function(options) {
    var inventory = Session.get("inventory");
}