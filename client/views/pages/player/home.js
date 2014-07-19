Template.player_home.helpers({
    currentPlayer: function() {
        var currentPlayerHandle = PlayerManager.currentPlayerHandle();
        return currentPlayerHandle.findOne();
    },
    currentPlayerBuildPlans: function() {
        BuildPlanManager.currentPlayerBuildPlans();
    }
});