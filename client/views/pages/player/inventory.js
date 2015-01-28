//var playerInventoryHandle = null;
//var allianceHandle = null;
//var campsHandle = null;
//var playerInventoryHandleDep = new Deps.Dependency();
//var allianceHandleDep = new Deps.Dependency();
//var campsHandleDep = new Deps.Dependency();
//Template.player_inventory.rendered = function() {
//    this.autorun(function() {
//        playerInventoryHandle = InventoryManager.playerInventoryHandle();
//        if (playerInventoryHandle.ready()) {
//            playerInventoryHandleDep.changed();
//        }
//    });
//    this.autorun(function() {
//        allianceHandle = AllianceManager.currentPlayerAllianceHandle();
//        if (allianceHandle.ready()) {
//            allianceHandleDep.changed();
//        }
//    });
//    this.autorun(function() {
//        if ( allianceHandle && allianceHandle.ready() ) {
//            var alliance = allianceHandle.findOne();
//            if (alliance == null) {
//                // not part of an alliance (yet)
//                campsHandle = null;
//                campsHandleDep.changed();
//            } else {
//                campsHandle = CampManager.allianceCampsHandle(alliance.id);
//                if (campsHandle.ready()) {
//                    campsHandleDep.changed();
//                }
//            }
//        }
//    });
//}
Template.player_inventory.helpers({
    initializeData : function(params) {
        var initialData = _.extend({
            playerInventory : one(InventoryManager.playerInventoryHandle())
        }, initializeDataWithPlayer(params));

        if ( initialData.allianceId ) {
            var allianceCampsHandle = CampManager.allianceCampsHandle(params.allianceId);
            initialData.allianceCamps = many(allianceCampsHandle);
        }
        return initialData;
    },

    storables : function () {
        var storables = Storables;
        var results = storables.symbols();
        return results;
    },
    buildings: function() {
        var buildings = Buildings;
        var results = buildings.symbols();
        return results;
    },
    inventoryItemValue: function() {
        var playerInventory = getTemplateData('playerInventory');
        if (playerInventory != null) {
            return playerInventory.current[this];
        } else {
            return 0;
        }
    },
    buildingsFor: function(storable) {
        var buildingNames = [];
        if ( storable == null ) {
            debugger;
        }
        if ( typeof(storable.buildings) !== "undefined" ) {
            storable.buildings.forEach(function(building) {
                buildingNames.push(building.displayName);
            });
        }
        var buildingsString = buildingNames.sort().join(', ');
        return buildingsString;
    },
    adventuresFor: function(storable) {
        var adventureNames = [];
        if ( typeof(storable.adventure) !== "undefined" ) {
            storable.adventure.forEach(function(adventure) {
                adventureNames.push("V:"+adventure.volume+"L:"+adventure.level);
            });
        }
        return adventureNames.sort().join(', ');
    },
    storableNeededForCamp: function() {
        var storableKey = this;
        var storablesByCamp = StorablesByCamp[storableKey];
        var neededByCamp = {};
        var totalNeeded = 0;
        if ( storablesByCamp ) {
            //campsHandleDep.depend();
            var camps = getTemplateData('allianceCamps');
            _.each(camps, function (camp) {
                var skillGeneral = camp.skillSpecialization.skillGeneral;
                var storableForSkillGeneral = storablesByCamp[skillGeneral];
                if (storableForSkillGeneral && storableForSkillGeneral.length >= camp.currentLevel) {
                    var totalNeededForCamp = _.reduce(storableForSkillGeneral.slice(camp.currentLevel),
                        function (memo, num) {
                            return memo + num;
                        }, 0);
                    totalNeeded += totalNeededForCamp;
                    neededByCamp[camp.campLocation] = {
                        fromCurrentLevel: storableForSkillGeneral.slice(camp.currentLevel),
                        currentLevel: camp.currentLevel,
                        totalNeeded: totalNeededForCamp
                    };
                }
            });
        }
        if ( totalNeeded > 0 ) {
            return {totalNeeded: totalNeeded, neededByCamp: neededByCamp};
        } else {
            return void(0);
        }
    },
    CampLocationDisplayName: function(key) {
        if ( key != null ) {
            var campLocation = CampLocation.enumOf(key);
            return campLocation?campLocation.displayName : '';
        }
    }
});

Template.player_inventory.events({
    // needed for mobile devices.
    'click #saveInventory': function(event, template) {
        var inputData = getChangedInputFieldData(template);
        if ( !_.isEmpty(inputData)) {
            InventoryManager.updatePlayerInventory(inputData, clearChangedInputFieldData.bind(null, template));
        }
    },
    'click #clearInventory': function(event, template) {
        InventoryManager.clearPlayerInventory();
    },
    'change select.showFilter' : function (event, template) {
        Session.set("show", event.srcElement.value);
    },
    'change select.showOrder' : function(event, template) {
        Session.set("showOrder", event.srcElement.value);
    },
    'change input.depth' : function(event, template) {
        var depth = event.srcElement.value;
        Session.set("depth", depth);
    }
});

