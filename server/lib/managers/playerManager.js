Meteor.startup(function(){
    'use strict';
    _.extend(PlayerManagerType.prototype, {
        ctor: function() {
            var thatManager = this.thatManager;
            /**
             * TODO: use the new manager code.
             * The current logged in user's information
             */
            thatManager.startup({
                execute: function() {
                    // set this up *after* all the managers are initialized.
                    Accounts.onCreateUser(
                        function (options, user) {
                            thatManager._createPlayer(user);
                            return user;
                        });
                }
            });
            debugger;
            thatManager.loadDisruptorBeamUser({id:'mmmm'});
        },
        updatePlayerProfile: function(updatedPlayerProfile) {
            var thatManager = this.thatManager;
            var userId = thatManager.userId;
            var player = thatManager.findOneCurrentPlayer();
            player.upsertFromUntrusted({clientObj:updatedPlayerProfile});
            if ( updatedPlayerProfile.allianceInviteCode != null) {
                AllianceManager._assignPlayerToAlliance(player);
            }
            return player;
        },
        _createPlayer: function(user) {
            var userId = user._id;
            var player = new Player({userId:userId});
            player._save();
            InventoryManager.createPlayerInventory(player);
        },
        loadDisruptorBeamUser: function(player) {
            var disruptorBeamUserId = 2245605;//player.disruptorBeamUserId;
            //HACK ( should be loaded from db )
            var json = Assets.getText('disruptorBeam/'+disruptorBeamUserId+'.json');
            var disruptorBeamUser = new DisruptorBeamUser({
                playerId:player.id,
                disruptorBeamData:EJSON.parse(json)
            });
            return disruptorBeamUser;
        }
    });
});