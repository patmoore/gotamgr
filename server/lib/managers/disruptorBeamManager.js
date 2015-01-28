Meteor.startup(function(){
    _.extend(DisruptorBeamManagerType.prototype, {
        startingSpecialOfferNumber: 43,
        checkForOffers: {
            method: function (player) {
                var thatManager = this.thatManager;
                for (var specialOfferNumber = startingSpecialOfferNumber; specialOfferNumber < 143; specialOfferNumber++) {
                    HTTP.get('http://gota.disruptorbeam.com/play/special_offer/' + specialOfferNumber);
                }
            }
        }
    });
});
