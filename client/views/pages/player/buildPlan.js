Template.player_buildPlan.events({
    'click .createNewBuildPlan': function (event, template) {
        var buildPlanChanges = getInputFieldData(template);
        if (!_.isEmpty(buildPlanChanges.displayName)) {
            BuildPlanManager.createBuildPlan({displayName: buildPlanChanges.displayName}, clearChangedInputFieldData.bind(null, template));
        }
    },
    'click .addToBuildInventory': function (event, template) {
        var rawBuildPlanChanges = getInputFieldData(template);
        var storable = rawBuildPlanChanges.storable;
        var quantity = rawBuildPlanChanges.storable_quantity;
        var buildPlanChanges = {};
        if (_.isNumber(quantity)) {
            buildPlanChanges[storable] = quantity;
        }
        _.extend(buildPlanChanges, _.omit(rawBuildPlanChanges, 'displayName', 'storable', 'storable_quantity'));
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
    generateBuildOrders: function() {
        var buildPlan = this;
        // Now recalculate
        BuildPlanManager.createBuildPlansBuildOrders(buildPlan);
    },
    StorableInBuildings: function () {
        return StorableInBuildings;
    },
    componentBuildOrders: function () {
        var buildPlan = this;
        return buildPlan.componentBuildOrders;
    },
    StorableByDbCode: function(dbCode){
        return Storables.enumOf(dbCode);
    }
});
Template._buildOrder.helpers({
    buildOrderDisplayName: function () {
        var storable = Storables.enumOf(this.storable);
        if ( storable == null ) {
            debugger;
        } else {
            return storable.displayName;
        }
    },
});