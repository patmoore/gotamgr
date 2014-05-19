Meteor.startup(function(){
    _.extend(PlayerManagerType.prototype, {
        updatePlayerBuildPlan: function() {
            var userId = Meteor.userId();
            var buildRequest = BuildRequest.databaseTable.findByUserId(userId);
        }
    });
});