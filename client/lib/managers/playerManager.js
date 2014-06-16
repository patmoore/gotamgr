Meteor.startup(function() {
    _.extend(PlayerManagerType.prototype, {
        ctor: function () {
            var thatManager = this;
            Deps.autorun(function () {
                debugger;
                thatManager.currentPlayerHandle = thatManager.currentPlayer();
            });
        }
    });
});