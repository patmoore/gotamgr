Meteor.startup(function(){
    _.extend(DisruptorBeamManagerType.prototype, {
        ctor: function() {
            var thatManager = this.thatManager;
            // once every 6 hours.
            Meteor.setTimeout(thatManager.checkForOffers.bind(thatManager),
                6*60*60*1000
            )

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
                var thatManager = this.thatManager;
                var disruptorBeamUserId = playerData.user.id;
                var disruptorBeamUser = DisruptorBeamUser.findOneById(disruptorBeamUserId);
                // TODO deep merge because maybe incremental update.
            }
        }
    });
});
