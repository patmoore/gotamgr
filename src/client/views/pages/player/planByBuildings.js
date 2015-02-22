
Template.player_planByBuildings.helpers({
    initializeData: function() {
        var buildPlansHandle = BuildPlanManager.currentPlayerBuildPlansHandle();
        return {
            buildPlans: buildPlansHandle,
//            buildings: Buildings.symbols()
        };
    },
    buildings: function() {
        return Buildings.symbols();
    },
    buildPlan: function() {
        var buildPlanId = getRouterParams().buildPlanId;
        var buildPlan = _.where(this.buildPlans, {_id: buildPlanId});
        return buildPlan;
    },
    buildingNow: function() {
        var params = getRouterParams();
//         = this.buildPlans[params.buildPlanId];

    },
    storablesByBuilding: function() {
        var storables = [{ key:"", displayName:"Nothing" }].concat(_.map(this.builds, function(element, key) {
            return {key:key, displayName: Storables[key].displayName};
        }));
        return storables;
    }
});