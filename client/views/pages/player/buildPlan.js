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
    initializeData: function(params) {
        debugger;
        var buildPlanId = params.buildPlanId;
        var data = {
            player: PlayerManager.currentPlayerHandle(),
            playerInventory: one(InventoryManager.playerInventoryHandle()),
            currentPlayerBuildPlans: BuildPlanManager.currentPlayerBuildPlansHandle()
        };

        if ( buildPlanId ) {
            data.selectedBuildPlan = BuildPlan.databaseTable.findOneById(buildPlanId);
        }
        debugger;
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