Meteor.startup(function(){
    _.extend(BuildPlanManagerType.prototype, {
        updatePlayerBuildPlan: function(buildPlanId, changedPlayerBuildPlan) {
            var userId = Meteor.userId();
            BuildPlan.prototype.upsertFromUntrusted(changedPlayerBuildPlan, buildPlanId);
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
                currentPlayer._save();
            }
            return buildPlan;
        },
        addToBuildInventory: function(buildPlanId, buildDemands) {
            var currentPlayer = PlayerManager.findOneCurrentPlayer();
            var buildPlan = BuildPlan.databaseTable.findOneById(buildPlanId);
            if ( buildPlan ) {
                buildPlan.buildDemands = buildPlan.buildDemands || {};
                _.each(buildDemands, function(quantity, buildable){
                    if ( buildPlan.buildDemands == null) {
                        buildPlan.buildDemands.buildable = quantity;
                    } else {
                        buildPlan.buildDemands.buildable += quantity;
                    }
                });
                buildPlan._save();
            }
        }
    });
});