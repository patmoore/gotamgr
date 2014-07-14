Template.player_buildableList.helpers({
    allBuildables : function () {
        var playerInventory = InventoryManager.playerInventory().oneResult();

        return Object.keys(Buildables).sort();
    },
    terminalBuildables : function () {
        return Object.keys(Buildables).sort();
    },
    buildPlan: function() {

    }
});

Template.player_buildableList.events({
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

