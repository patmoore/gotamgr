Meteor.startup(function(){
    _.extend(PlayerManagerType.prototype, {
        ctor: function() {
            var thatManager = this;
            /**
             * TODO: use the new manager code.
             * The current logged in user's information
             */
            thatManager.startup({
                execute: function() {
                    // set this up *after* all the managers are initialized.
                    Accounts.onCreateUser(
                        function (options, user) {
                            var userId = user._id;
                            var player = new Player({userId:userId});
                            player._save();
                            InventoryManager.createPlayerInventory(player);
                            return user;
                        });
                }
            });
        },
        updatePlayerProfile: function(updatedPlayerProfile) {
            var thatManager = this.thatManager;
            var userId = thatManager.userId;
            var player = thatManager.findOneCurrentPlayer();
            Player.prototype.upsertFromUntrusted.call(player, updatedPlayerProfile);
            return player;
        }
    });
});