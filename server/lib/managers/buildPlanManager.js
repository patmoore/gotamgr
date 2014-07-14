Meteor.startup(function(){
    _.extend(BuildPlanManagerType.prototype, {
        updatePlayerBuildPlan: function(changedPlayerBuildPlan) {
            var userId = Meteor.userId();
            var buildPlan = BuildPlan.databaseTable.findByUserId(userId);
            _.extend(buildPlan, changedPlayerBuildPlan);
            buildPlan._save();
        },
        createBuildPlan: function() {
            var userId = this.userId;
            var currentPlayer = PlayerManager.currentPlayer();
            var buildPlan = new BuildPlan({
                playerId:currentPlayer.id,
                userId: userId,
                buildOrders: {}
            });
        }
    });
});