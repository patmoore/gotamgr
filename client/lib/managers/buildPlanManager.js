Meteor.startup(function() {
    _.extend(BuildPlanManagerType.prototype, {
        ctor: function () {
            var thatManager = this;
            Deps.autorun(function () {
                thatManager.currentPlayerBuildPlansHandle = thatManager.currentPlayerBuildPlans();
            });
        }
    });
});