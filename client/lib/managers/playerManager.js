Meteor.startup(function() {
    _.extend(PlayerManagerType.prototype, {
        ctor: function () {
            var thatManager = this;
            thatManager.startup(function() {
                Deps.autorun(function () {
                    debugger;
                    thatManager._currentPlayerHandle = thatManager.currentPlayerHandle();
                });
            });
        }
    });
});