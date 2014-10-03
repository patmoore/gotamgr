var playerInventoryHandle = null;
var allianceHandle = null;
var campsHandle = null;
var playerInventoryHandleDep = new Deps.Dependency();
var allianceHandleDep = new Deps.Dependency();
var campsHandleDep = new Deps.Dependency();
Template.player_inventory.rendered = function() {
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
            var alliance = allianceHandle.findOne();
            if (alliance == null) {
                // not part of an alliance (yet)
                campsHandle = null;
                campsHandleDep.changed();
            } else {
                campsHandle = CampManager.allianceCampsHandle(alliance.id);
                if (campsHandle.ready()) {
                    campsHandleDep.changed();
                }
            }
        }
    });
}
Template.player_inventory.helpers({
    initializeData : function() {
        return {
            currentPlayer: one(PlayerManager.currentPlayerHandle()),
            currentPlayerInventory : InventoryManager.playerInventoryHandle()
        }
    },

    storables : function () {
        playerInventoryHandleDep.depend();
        if ( playerInventoryHandle == null ) {
            return [];
        }
        var playerInventory = playerInventoryHandle.findOne();
        var storables;
        var showFilter = $('.showFilter').val();
        switch(showFilter) {
        case 'need':
        case 'all':
        default:
            storables = Storables;
        }
        var results = storables.symbols();
//        results.sort(function(left, right) {
//            if ( left.toString() < )
//        });
//        results.sort(function(leftStorableKey, rightStorableKey) {
//            var leftStorableBuildingName =
//            if ( Storables[leftStorableKey].buildings[0].displayName === Storables[rightStorableKey].buildings[0].displayName ) {
//
//            }
//        });
        return results;
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
    buildings: function(storable) {
        var buildingNames = [];
        if ( storable == null ) {
            debugger;
        }
        if ( typeof(storable.buildings) !== "undefined" ) {
            storable.buildings.forEach(function(building) {
                buildingNames.push(building.displayName);
            });
        }
        var buildingsString = buildingNames.sort().join(',');
        return buildingsString;
    },
    adventures: function(storable) {
        var adventureNames = [];
        if ( typeof(storable.adventure) !== "undefined" ) {
            storable.adventure.forEach(function(adventure) {
                adventureNames.push("V:"+adventure.volume+"L:"+adventure.level);
            });
        }
        return adventureNames.sort().join(',');
    },
    storableNeededForCamp: function() {
        var storableKey = this;
        var storablesByCamp = StorablesByCamp[storableKey];
        var neededByCamp = {};
        var totalNeeded = 0;
        if ( storablesByCamp ) {
            campsHandleDep.depend();
            if (campsHandle && campsHandle.ready()) {
                var camps = campsHandle.findFetch();
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
        }
        if ( totalNeeded > 0 ) {
            return {totalNeeded: totalNeeded, neededByCamp: neededByCamp};
        } else {
            return void(0);
        }
    }
});

Template.player_inventory.events({
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

