
Template.player_planByBuildings.helpers({
    buildings: function() {
        return Buildings.symbols();
    },
    buildingName: function() {
        return this.displayName;
    },
    buildOrder: function() {
        var buildOrder = BuildPlanManager.currentBuildOrder();
        return buildOrder;
    }
});