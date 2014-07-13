Template.player_home.helpers({
    currentPlayer: function() {
        var currentPlayerHandle = PlayerManager.currentPlayerHandle();
        return currentPlayerHandle.oneResult();
    },
    currentPlayerBuildPlans: function() {
        BuildPlanManager.currentPlayerBuildPlans();
    }
});