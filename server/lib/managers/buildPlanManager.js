Meteor.startup(function(){
    _.extend(BuildPlanManagerType.prototype, {
        updatePlayerBuildPlan: function(changedPlayerBuildPlan) {
            var userId = Meteor.userId();
            var buildPlan = BuildPlan.databaseTable.findByUserId(userId);
            _.extend(buildPlan, changedPlayerBuildPlan);
            buildPlan._save();
        },
        createBuildPlan: function() {
            debugger;
            var userId = this.userId;
            var currentPlayer = PlayerManager.findOneCurrentPlayer();
            var buildPlan = new BuildPlan({
                playerId:currentPlayer.id,
                userId: userId,
                buildOrders: {}
            });
            buildPlan._save();
            currentPlayer.buildPlanIds = (currentPlayer.buildPlanIds || []).push(buildPlan.id);
            currentPlayer._save();
            return buildPlan;
        }
    });
});