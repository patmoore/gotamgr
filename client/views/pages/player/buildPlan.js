Template.player_buildPlan.events({
    'click .createNewBuildPlan': function(event, template) {
        var buildPlanChanges = getChangedInputFieldData(template);
        BuildPlanManager.createBuildPlan(buildPlanChanges, clearChangedInputFieldData.bind(null, template));
    },
    'click .addToBuildInventory': function(event, template) {
        var rawBuildPlanChanges = getInputFieldData(template);
        delete rawBuildPlanChanges.displayName;
        var buildPlanChanges = {};
        debugger;
        buildPlanChanges[rawBuildPlanChanges.buildable] = rawBuildPlanChanges.quantity;
        delete rawBuildPlanChanges.buildable;
        delete rawBuildPlanChanges.quantity;
        debugger;
        _.extend(buildPlanChanges, rawBuildPlanChanges);
        BuildPlanManager.addToBuildInventory(this.id, buildPlanChanges, clearChangedInputFieldData.bind(null, template));
    }
});

Template.player_buildPlan.helpers({
    waitOn: function() {
        var handlers = [];
        handlers.push(BuildPlanManager.currentPlayerBuildPlansHandle());
        return handlers;
    },
    data: function() {
        return {
            currentPlayerBuildPlans: BuildPlanManager.findFetchCurrentPlayerBuildPlans()
        };
    },
    selectedBuildOrder: function() {
        var buildPlanId = getRouterParams().buildPlanId;
        return BuildPlan.databaseTable.findOneById(buildPlanId);
    },
    buildables: function() {
        return Buildables.symbols();
    },
    buildOrderItem: function() {

    }
});