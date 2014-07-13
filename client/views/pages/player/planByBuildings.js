
Template.player_planByBuildings.helpers({
    buildings: function() {
        return _.keys(Buildings).sort();
    },
    buildingName: function() {
        return Buildings[this].name;
    },
    buildOrder: function() {
        var buildOrder = BuildPlanManager.currentBuildOrder();
        return buildOrder;
    }
});