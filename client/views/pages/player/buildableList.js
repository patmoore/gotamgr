Template.player_buildableList.helpers({
    allBuildables : function () {
        var playerInventory = InventoryManager.playerInventoryHandle().oneResult();
        return Object.keys(Buildables).sort();
    },
    terminalBuildables : function () {
        return Object.keys(Buildables).sort();
    },
    buildPlan: function() {

    },
    inventoryItemValue: function() {
        var playerInventory = InventoryManager.playerInventoryHandle().oneResult();
        if (playerInventory != null) {
            return playerInventory.current[this];
        } else {
            return 0;
        }
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

Template.player_buildableList.events({
    'blur input.inventoryHave' : function() {
        var value = +event.srcElement.value;
        var inventoryKey = $(event.srcElement).data('inventory-key');
        InventoryManager.changePlayerInventory(inventoryKey, value);
    },
    'click .clearInventory': function() {
        InventoryManager.clearPlayerInventory();
    },
    'change select.showFilter' : function () {
        Session.set("show", event.srcElement.value);
    },
    'change select.showOrder' : function() {
        Session.set("showOrder", event.srcElement.value);
    },
    'change input.depth' : function() {
        var depth = event.srcElement.value;
        Session.set("depth", depth);
    }
});

