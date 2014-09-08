
Template.player_planByBuildings.helpers({
    initializeData: function() {
        var buildPlansHandle = BuildPlanManager.currentPlayerBuildPlansHandle();
        return {
            buildPlans: buildPlansHandle,
        };
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

        var buildables = [{ key:"", displayName:"Nothing" }].concat(_.map(this.builds, function(element, key) {
            return {key:key, displayName: Buildables[key].displayName};
        }));
        return buildables;
    }
});