var playerInventoryHandle = null;
var allianceHandle = null;
var campsHandle = null;
var playerInventoryHandleDep = new Deps.Dependency();
var allianceHandleDep = new Deps.Dependency();
var campsHandleDep = new Deps.Dependency();
Template.player_buildableList.rendered = function() {
    this.autorun(function() {
        playerInventoryHandle = InventoryManager.playerInventoryHandle();
        if (playerInventoryHandle.ready()) {
            playerInventoryHandleDep.changed();
        }
    });
    this.autorun(function() {
        allianceHandle = AllianceManager.currentPlayerAllianceHandle();
        if (allianceHandle.ready()) {
            allianceHandleDep.changed();
        }
    });
    this.autorun(function() {
        if ( allianceHandle && allianceHandle.ready() ) {
            campsHandle = CampManager.allianceCampsHandle(allianceHandle.findOne());
            if (campsHandle.ready()) {
                campsHandleDep.changed();
            }
        }
    });
}
Template.player_buildableList.helpers({
    buildables : function () {
        playerInventoryHandleDep.depend();
        if ( playerInventoryHandle == null ) {
            return [];
        }
        var playerInventory = playerInventoryHandle.findOne();
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
    buildPlan: function() {

    },
    inventoryItemValue: function() {
        playerInventoryHandleDep.depend();
        if ( playerInventoryHandle == null ) {
            return 0;
        }
        var playerInventory = playerInventoryHandle.findOne();
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
        campsHandleDep.depend();
        if ( campsHandle == null || !campsHandle.ready()) {
            return [];
        }
        var buildablesByCamp = BuildablesByCamp[buildableKey];
        var camps = campsHandle.findFetch();
        var needed;
        _.each(camps, function(camp) {
            var skillGeneral = camp.skillSpecialization.skillGeneral;
            var buildableForSkillGeneral = buildablesByCamp[skillGeneral];
            if ( buildableForSkillGeneral && buildableForSkillGeneral.length >= camp.currentLevel) {

                debugger;
            } else {
                debugger;
            }
        });
        return buildablesByCamp != null;
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

