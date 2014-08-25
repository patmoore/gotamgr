
Template.player_planByBuildings.helpers({
    waitOn: function() {
        var buildOrder = BuildPlanManager.currentPlayerBuildPlansHandle();
        return [buildOrder];
    },
    buildings: function() {
        return Buildings.symbols();
    },
    buildOrder: function() {
        var buildOrder = BuildPlanManager.currentPlayerBuildPlansHandle();
        return buildOrder.findFetch();
    },
    buildingNow: function() {
        return buildOrder
    }
});