
Template.player_planByBuildings.helpers({
    buildings: function() {
        return Buildings.symbols();
    },
    buildOrder: function() {
        var buildOrder = BuildPlanManager.currentBuildOrderHandle();
        return buildOrder;
    }
});