Template.player_home.helpers({
    initializeData : function() {
        return {
            currentPlayer: one(PlayerManager.currentPlayerHandle()),
            currentPlayerBuildPlans : BuildPlanManager.currentPlayerBuildPlansHandle()
        }
    }
});