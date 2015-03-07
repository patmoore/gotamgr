Meteor.startup(function(){
    _.extend(DisruptorBeamManagerType.prototype, {
        ctor: function() {
            var thatManager = this.thatManager;
            // once every 6 hours.
            //Meteor.setTimeout(thatManager.checkForOffers.bind(thatManager),
            //    6*60*60*1000
            //)

        },
        checkForOffers: function (player) {
            var thatManager = this.thatManager;

            for (var specialOfferNumber = thatManager.startingSpecialOfferNumber; specialOfferNumber < thatManager.startingSpecialOfferNumber + 40; specialOfferNumber++) {
                var data = HTTP.get('http://gota.disruptorbeam.com/play/special_offer/' + specialOfferNumber);
                that.offers[specialOfferNumber] = thatManager.checkForOfferCode(data);
            }
        },
        updatePlayerData: {
            method: function(playerData) {
                playerData = JSON.parse(Assets.getText('disruptorBeam/2245605.json'));
                var thatManager = this.thatManager;
                var player = PlayerManager.currentPlayerCursor(this.userId).fetch()[0];
                var disruptorBeamUserId = playerData.user.id;
                if ( player.disruptorBeamUserId && player.disruptorBeamUserId != disruptorBeamUserId) {
                    thatManager.error("Problem - player.id=", player.id, "has player.disruptorBeamUserId=", player.disruptorBeamUserId, "but updatePlayerData was passed disruptorBeamUserId=", disruptorBeamUserId, "data" );
                    throw new Meteor.Error("Passed wrong data.");
                } else if ( player.disruptorBeamUserId == null ) {
                    // check to make sure this dbuserid is not assigned to someone else.
                }
                var disruptorBeamUser = DisruptorBeamUser.findOneById(disruptorBeamUserId);
                if ( disruptorBeamUser != null) {
                    // TODO deep merge because maybe incremental update.
                } else {
                    disruptorBeamUser = new DisruptorBeamUser({
                        userId: this.userId,
                        playerId: player.id,
                        playerData: playerData
                    });
                }
                disruptorBeamUser._save();

            }
        }
    });
});
