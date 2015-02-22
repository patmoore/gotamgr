Meteor.startup(function(){
    'use strict';
    _.extend(BuildPlanManagerType.prototype, {
        updatePlayerBuildPlanMethod: function(buildPlanId, changedPlayerBuildPlan) {
            var thatManager = this.thatManager;
            var userId = this.userId;
            BuildPlan.prototype.upsertFromUntrusted({
                clientObj: changedPlayerBuildPlan,
                lookup: buildPlanId
            });
        },
        deletePlayerBuildPlanMethod: function(buildPlanId) {
            var thatManager = this.thatManager;
            var userId = Meteor.userId();
            BuildPlan.databaseTable.remove({_id:buildPlanId});
        },
        createBuildPlanMethod: function(buildPlan) {
            var thatManager = this.thatManager;
            var userId = this.userId;
            var savedBuildPlan;
            if ( userId ) {
                var currentPlayer = PlayerManager.findOneCurrentPlayer();
                savedBuildPlan = buildPlan.upsertFromUntrusted({
                    forcedValues: {
                        playerId: currentPlayer.id,
                        userId: userId,
                    }
                });
            } else {
                throw new Meteor(403, "Not signed in");
            }
            return savedBuildPlan;
        },
        addToBuildInventory: function(buildPlanId, buildDemands) {
            var thatManager = this.thatManager;
            check(buildPlanId, String);
            var currentPlayer = PlayerManager.findOneCurrentPlayer();
            var buildPlan = BuildPlan.databaseTable.findOneById(buildPlanId);
            if ( buildPlan ) {
                buildPlan.buildDemands = buildPlan.buildDemands || {};
                _.each(buildDemands, function(quantity, storable){
                    buildPlan.buildDemands[storable] = Number(quantity);
                    if ( buildPlan.buildDemands[storable] < 1 || _.isNaN(buildPlan.buildDemands[storable] ) ) {
                        delete buildPlan.buildDemands[storable];
                    }
                });

                buildPlan._save();
            }
        }
    });
});