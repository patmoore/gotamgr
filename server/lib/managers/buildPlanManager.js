Meteor.startup(function(){
    _.extend(PlayerManagerType.prototype, {
        updatePlayerBuildPlan: function(changedPlayBuildPlan) {
            var userId = Meteor.userId();
            var buildPlan = BuildPlan.databaseTable.findByUserId(userId);

        }
    });
});