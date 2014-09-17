Meteor.startup(function(){
    _.extend(BuildPlanManagerType.prototype, {
        updatePlayerBuildPlan: function(buildPlanId, changedPlayerBuildPlan) {
            var userId = Meteor.userId();
            BuildPlan.prototype.upsertFromUntrusted(changedPlayerBuildPlan, buildPlanId);
        },
        deletePlayerBuildPlan: function(buildPlanId) {
            var userId = Meteor.userId();
            BuildPlan.databaseTable.remove({_id:buildPlanId});
        },
        createBuildPlan: function(buildPlanInfo) {
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
                buildPlan = buildPlan.upsertFromUntrusted(buildPlanInfo);
            } else {
                throw new Meteor(403, "Not signed in");
            }
            return buildPlan;
        },
        addToBuildInventory: function(buildPlanId, buildDemands) {
            var thatManager = this.thatManager;
            check(buildPlanId, String);
            var currentPlayer = PlayerManager.findOneCurrentPlayer();
            var buildPlan = BuildPlan.databaseTable.findOneById(buildPlanId);
            if ( buildPlan ) {
                buildPlan.buildDemands = buildPlan.buildDemands || {};
                _.each(buildDemands, function(quantity, buildable){
                    buildPlan.buildDemands[buildable] = Number(quantity);
                    if ( buildPlan.buildDemands[buildable] < 1 || _.isNaN(buildPlan.buildDemands[buildable] ) ) {
                        delete buildPlan.buildDemands[buildable];
                    }
                });

                buildPlan._save();
            }
        }
    });
});