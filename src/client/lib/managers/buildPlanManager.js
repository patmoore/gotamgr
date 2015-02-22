Meteor.startup(function() {
    var currentPlayerBuildPlansDeps = new Deps.Dependency();
    _.extend(BuildPlanManagerType.prototype, {
        ctor: function () {
            var thatManager = this;
            thatManager.startup(function () {
                Deps.autorun(function () {
                    currentPlayerBuildPlansDeps.changed();
                    thatManager._currentPlayerBuildPlansHandle = thatManager.currentPlayerBuildPlansHandle();
                });
            });
        },

    });
});