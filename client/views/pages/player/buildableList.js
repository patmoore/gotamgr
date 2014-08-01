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
        var results = buildables.symbols();
//        results.sort(function(left, right) {
//            if ( left.toString() < )
//        });
//        results.sort(function(leftBuildableKey, rightBuildableKey) {
//            var leftBuildableBuildingName =
//            if ( Buildables[leftBuildableKey].buildings[0].displayName === Buildables[rightBuildableKey].buildings[0].displayName ) {
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
    buildings: function(buildable) {
        var buildingNames = [];
        if ( buildable == null ) {
            debugger;
        }
        if ( typeof(buildable.buildings) !== "undefined" ) {
            buildable.buildings.forEach(function(building) {
                buildingNames.push(building.displayName);
            });
        }
        var buildingsString = buildingNames.sort().join(',');
        return buildingsString;
    },
    buildableNeededForCamp: function(buildableKey) {
        var alliance = AllianceManager.currentPlayerAllianceHandle().findOne();
        if ( alliance !== undefined ) {
            debugger;
            var buildablesByCamp = BuildablesByCamp[buildableKey];
            return buildablesByCamp != null;
        } else {
            return false;
        }
    }
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

