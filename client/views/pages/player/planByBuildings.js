
Template.player_planByBuildings.helpers({
    waitOn: function() {
        var buildPlansHandle = BuildPlanManager.currentPlayerBuildPlansHandle();
        return [buildPlansHandle];
    },
    data: function() {
        var buildPlans = BuildPlanManager.findFetchCurrentPlayerBuildPlans();
        return {
            buildPlans : buildPlans
        }
    },
    buildings: function() {
        return Buildings.symbols();
    },
    buildOrder: function() {
        if ( this.buildPlans && this.buildPlans[0]) {
            return this.buildPlans[0].buildOrders;
        } else {
            return null;
        }
    },
    buildingNow: function() {
    },
    buildablesByBuilding: function() {
        return _.map(this.builds, function(element, key) {
            return {key:key, displayName: Buildables[key].displayName};
        });
    }
});