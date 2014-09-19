Template.inventoryItem.helpers({
    show : function() {
        var show = Session.get("show");
        switch(show) {
        case "need":
            return (typeof(inventory_used[this]) !== "undefined" && inventory_used[this] > 0)
                || (typeof(want[this]) !== "undefined" && want[this] > 0);
        default :
            return true;
        }
    },
    remove_ : function(options) {
        return options.replace('_', ' ', 'g');
    },
    buildings: function(options) {
        var buildingNames = [];
        if ( typeof(Storables[options].buildings) !== "undefined" ) {
            Storables[options].buildings.forEach(function(building) {
                buildingNames.push(building.displayName);
            });
        }
        return buildingNames.sort().join(',');
    },
    storableNeededForCamp: function(storable) {
        var storablesByCamp = StorablesByCamp[storable];
        debugger;
        return storablesByCamp;
    }
});
Template.inventoryItem.events({
    'blur input.inventoryHave' : function() {
        var value = +event.srcElement.value;
        var inventoryKey = $(event.srcElement).data('inventory-key');
        InventoryManager.changePlayerInventory(inventoryKey, value);
    },
    'blur input.want' :function() {
        var value = +event.srcElement.value;
        PlayerManager.updatePlayerBuildPlan(this, value);
    },
});