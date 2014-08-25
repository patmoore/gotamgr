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
            var thatManager = this.thatManager;
            var userId = this.userId;
            var buildPlan;
            if ( userId ) {
                var currentPlayer = PlayerManager.findOneCurrentPlayer();
                buildPlan = new BuildPlan({
                    playerId: currentPlayer.id,
                    userId: userId,
                    buildOrders: {}
                });
                buildPlan._save();
                currentPlayer.buildPlanIds = (currentPlayer.buildPlanIds || []).push(buildPlan.id);
                currentPlayer._save();
            }
            return buildPlan;
        },
        addToBuildInventory: function(buildPlanId, buildPlanChanges) {

        }
    });
});