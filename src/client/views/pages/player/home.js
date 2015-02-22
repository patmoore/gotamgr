Template.player_home.helpers({
    initializeData : function(params) {
        return _.extend({
            currentPlayerBuildPlans : BuildPlanManager.currentPlayerBuildPlansHandle()
        }, initializeDataWithPlayer(params));
    }
});

Template.player_home.events({
    'click #getDbData': function(event) {
        DisruptorBeamManager.getPlayerData();
    }
})