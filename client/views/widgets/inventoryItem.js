Template.inventoryItem.helpers({
    show : function() {
        var show = Session.get("show");
        switch(show) {
        case "need":
            var inventory_used = Session.get("inventory_used");
            var want = Session.get("want");
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
        if ( typeof(Buildables[options].buildings) !== "undefined" ) {
            Buildables[options].buildings.forEach(function(building) {
                buildingNames.push(building.name);
            });
        }
        return buildingNames.sort().join(',');
    },
});
Template.inventoryItem.events({
    'change input.inventoryHave' : function() {
        var value = +event.srcElement.value;
        InventoryManager.changePlayerInventory(this, value);
    },
    'change input.want' :function() {
        var value = +event.srcElement.value;
        PlayerManager.updatePlayerBuildPlan(this, value);
    },
});