Meteor.startup(function(){
    _.extend(BuildPlanManagerType.prototype, {
        updatePlayerBuildPlan: function(buildPlanId, changedPlayerBuildPlan) {
            var userId = Meteor.userId();
            BuildPlan.prototype.upsertFromUntrusted(changedPlayerBuildPlan, buildPlanId);
        },
        createBuildPlan: function(buildPlanInfo) {
            var thatManager = this.thatManager;
            debugger;
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
            }
            return buildPlan;
        },
        addToBuildInventory: function(buildPlanId, buildDemands) {
            check(buildPlanId, String);
            var currentPlayer = PlayerManager.findOneCurrentPlayer();
            var buildPlan = BuildPlan.databaseTable.findOneById(buildPlanId);
            if ( buildPlan ) {
                buildPlan.buildDemands = buildPlan.buildDemands || {};
                _.each(buildDemands, function(quantity, buildable){
                    debugger;
                    if ( buildPlan.buildDemands[buildable] == null) {
                        buildPlan.buildDemands[buildable] = Number(quantity);
                    } else {
                        buildPlan.buildDemands[buildable]+= Number(quantity);
                    }
                    if ( buildPlan.buildDemands[buildable] < 1 || _.isNaN(buildPlan.buildDemands[buildable] ) ) {
                        delete buildPlan.buildDemands[buildable];
                    }
                });
                buildPlan._save();
            }
        }
    });
});