Template.player_buildPlan.events({
    'click .createNewBuildPlan': function(event, template) {
        var buildPlanChanges = getChangedInputFieldData(template);
        BuildPlanManager.createBuildPlan(buildPlanChanges, clearChangedInputFieldData.bind(null, template));
    },
    'click .addToBuildInventory': function(event, template) {
        var rawBuildPlanChanges = getInputFieldData(template);
        delete rawBuildPlanChanges.displayName;
        var buildPlanChanges = {};
        if ( _.isNumber(rawBuildPlanChanges.quantity) ) {
            buildPlanChanges[rawBuildPlanChanges.buildable] = rawBuildPlanChanges.quantity;
        }
        delete rawBuildPlanChanges.buildable;
        delete rawBuildPlanChanges.quantity;
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
        return _.filter(Buildables.symbols(), function(element) {
            return !_.isEmpty(element.buildings);
        });
    },
    buildOrderItem: function() {

    }
});