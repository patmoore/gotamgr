Template.player_buildPlan.events({
    'click .createNewBuildPlan': function(event, template) {
        BuildPlanManager.createBuildPlan(function(error,response) {
            debugger;
        });
    },
    'click .addToBuildInventory': function(event, template) {
        var buildPlanChanges = getChangedInputFieldData(template);
        BuildPlanManager.addToBuildInventory(buildPlanChanges);
    }
});

Template.player_buildPlan.helpers({
    waitOn: function() {
        var handlers = [];
        handlers.push(BuildPlanManager.currentPlayerBuildPlansHandle());
        return handlers;
    },
    selectedBuildOrder: function() {
        var buildPlanId = getRouterParams().buildPlanId;
        return BuildPlan.databaseTable.findOneById(buildPlanId);
    },
    buildPlans: function() {
        var currentPlayerBuildPlans = BuildPlanManager.currentPlayerBuildPlansHandle();
        return currentPlayerBuildPlans.findFetch();
    },
    buildables: function() {
        return Buildables.symbols();
    }
});