
Template.player_planByBuildings.helpers({
    waitOn: function() {
        var buildOrder = BuildPlanManager.currentBuildOrdersHandle();
        return [buildOrder];
    },
    buildings: function() {
        return Buildings.symbols();
    },
    buildOrder: function() {
        var buildOrder = BuildPlanManager.currentBuildOrderHandle();
        return buildOrder;
    }
});