Template.player_buildableList.helpers({
    buildables : function () {
        var playerInventory = InventoryManager.playerInventoryHandle().findOne();
        var buildables;
        var showFilter = $('.showFilter').val();
        switch(showFilter) {
        case 'need':
        case 'all':
        default:
            buildables = Buildables;
        }
        var results = Object.keys(buildables);
        results.sort();
//        results.sort(function(leftBuildableKey, rightBuildableKey) {
//            var leftBuildableBuildingName =
//            if ( Buildables[leftBuildableKey].buildings[0].name === Buildables[rightBuildableKey].buildings[0].name ) {
//
//            }
//        });
        return results;
    },
    terminalBuildables : function () {
        return Object.keys(Buildables).sort();
    },
    buildPlan: function() {

    },
    inventoryItemValue: function() {
        var playerInventory = InventoryManager.playerInventoryHandle().findOne();
        if (playerInventory != null) {
            return playerInventory.current[this];
        } else {
            return 0;
        }
    },
    buildings: function(buildableKey) {
        var buildingNames = [];
        if ( typeof(Buildables[buildableKey].buildings) !== "undefined" ) {
            Buildables[buildableKey].buildings.forEach(function(building) {
                buildingNames.push(building.name);
            });
        }
        return buildingNames.sort().join(',');
    },
});

Template.player_buildableList.events({
//    'blur input.inventoryHave' : function() {
//        var value = +event.srcElement.value;
//        var inventoryKey = $(event.srcElement).data('inventory-key');
//        InventoryManager.changePlayerInventory(inventoryKey, value);
//    },
    // needed for mobile devices.
    'click #saveInventory': function() {
        var inputData = getChangedInputFieldData();
        if ( !_.isEmpty(inputData)) {
            InventoryManager.updatePlayerInventory(inputData);
        }
    },
    'click #clearInventory': function() {
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

