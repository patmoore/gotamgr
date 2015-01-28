Template.player_home.helpers({
    initializeData : function(params) {
        return _.extend({
            currentPlayerBuildPlans : BuildPlanManager.currentPlayerBuildPlansHandle()
        }, initializeDataWithPlayer(params));
    }
});