Template.player_buildings.helpers({
    allBuildables : function () {
        var playerInventory = InventoryManager.playerInventory().findOne();

        return Object.keys(Buildables).sort();
    },
    terminalBuildables : function () {
        return Object.keys(Buildables).sort();
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

