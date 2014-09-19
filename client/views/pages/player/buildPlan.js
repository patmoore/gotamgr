Template.player_buildPlan.events({
    'click .createNewBuildPlan': function (event, template) {
        var buildPlanChanges = getInputFieldData(template);
        if (!_.isEmpty(buildPlanChanges.displayName)) {
            BuildPlanManager.createBuildPlan({displayName: buildPlanChanges.displayName}, clearChangedInputFieldData.bind(null, template));
        }
    },
    'click .addToBuildInventory': function (event, template) {
        var rawBuildPlanChanges = getInputFieldData(template);
        delete rawBuildPlanChanges.displayName;
        var buildPlanChanges = {};
        if (_.isNumber(rawBuildPlanChanges.quantity)) {
            buildPlanChanges[rawBuildPlanChanges.storable] = rawBuildPlanChanges.quantity;
        }
        delete rawBuildPlanChanges.storable;
        delete rawBuildPlanChanges.quantity;
        _.extend(buildPlanChanges, rawBuildPlanChanges);
        BuildPlanManager.addToBuildInventory(this.id, buildPlanChanges, clearChangedInputFieldData.bind(null, template));
    },
    'click .deletePlayerBuildPlan': function (event, template) {
        var $element = $(event.currentTarget);
        var buildPlanId = $element.data('build-plan-id');
        BuildPlanManager.deletePlayerBuildPlan(buildPlanId);
    }
});

Template.player_buildPlan.helpers({
    initializeData: function (params) {
        var buildPlanId = params.buildPlanId;
        var data = {
            currentPlayer: one(PlayerManager.currentPlayerHandle()),
            playerInventory: one(InventoryManager.playerInventoryHandle()),
            currentPlayerBuildPlans: BuildPlanManager.currentPlayerBuildPlansHandle()
        };

        if (buildPlanId) {
            data.selectedBuildPlan = BuildPlan.databaseTable.findOneById(buildPlanId);
        }
        return data;
    },
    storables: function () {
        return StorableInBuildings;
    },
    componentBuildOrders: function () {
        var buildPlan = this;
        // Now recalculate
        BuildPlanManager.createBuildOrders(buildPlan.buildDemands, buildPlan);
        return buildPlan.componentBuildOrders;
    }
});
Template._buildOrder.helpers({
    buildOrderDisplayName: function () {
        var storable = getInventoryEnum(this.storable);
        if ( storable == null ) {
            debugger;
        } else {
            return storable.displayName;
        }
    },
});