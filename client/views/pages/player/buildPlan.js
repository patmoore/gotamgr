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
    },
    'click .deletePlayerBuildPlan': function(event, template) {
        var $element = $(event.currentTarget);
        var buildPlanId = $element.data('build-plan-id');
        BuildPlanManager.deletePlayerBuildPlan(buildPlanId);
    }
});

Template.player_buildPlan.helpers({
    initializeData: function(params) {
        var buildPlanId = params.buildPlanId;
        var data = {
            player: one(PlayerManager.currentPlayerHandle()),
            playerInventory: one(InventoryManager.playerInventoryHandle()),
            currentPlayerBuildPlans: BuildPlanManager.currentPlayerBuildPlansHandle()
        };

        if ( buildPlanId ) {
            data.selectedBuildPlan = BuildPlan.databaseTable.findOneById(buildPlanId);
        }
        return data;
    },
    buildables: function() {
        return _.filter(Buildables.symbols(), function(element) {
            return !_.isEmpty(element.buildings);
        });
    },
    buildOrderItem: function() {

    }
});