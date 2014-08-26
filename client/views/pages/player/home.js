Template.player_home.helpers({
    waitOn : function() {
        var handles = [];
        handles.push(PlayerManager.currentPlayerHandle());
        handles.push(BuildPlanManager.currentPlayerBuildPlansHandle());
        return handles;
    },
    currentPlayer: function() {
        var currentPlayerHandle = PlayerManager.currentPlayerHandle();
        return currentPlayerHandle.findOne();
    },
    currentPlayerBuildPlans: function() {
        var currentPlayerBuildPlans = BuildPlanManager.currentPlayerBuildPlansHandle();
        return currentPlayerBuildPlans.findFetch();
    }
});