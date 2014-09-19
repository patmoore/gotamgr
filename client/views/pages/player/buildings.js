Template.player_buildings.helpers({
    initializeData: function() {
        var playerHandle = PlayerManager.currentPlayerHandle();
        var playerInventoryHandle = InventoryManager.playerInventoryHandle();
        return {
            player: playerHandle,
            playerInventory: one(playerInventory)
        };
    },
    allStorables : function () {
        var playerInventory = this.playerInventory;

        return Object.keys(Storables).sort();
    },
    terminalStorables : function () {
        return Object.keys(Storables).sort();
    },
    buildPlan: function() {

    }
});

Template.player_buildings.events({
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

