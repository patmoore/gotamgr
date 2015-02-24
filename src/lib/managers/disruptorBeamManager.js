DisruptorBeamManager = null;

/**
 *
 * Manage the build plan requests for the alliance.
 */
DisruptorBeamManagerType = ManagerType.create({
    callPrefix: 'disruptorBeamManager',
    meteorCallDefinitions: [
        {
            checkForOffers: {
                permissionCheck: 'public'
            },
            updatePlayerData: {
                permissionCheck: 'public'
            },
        }
    ],
    meteorTopicDefinitions: {

    },
    // doLog
    properties: {
        startingSpecialOfferNumber: {
            value: 43
        },
        offers: {
            value: {}
        },
        baseUrl: {
            'get': function() {
                return 'http://gota-www.disruptorbeam.com';
            }
        },
        playerDataUrl: {
            // /play/player_data?client_seqnum="+userContext.player_data_seqnum+"&character=true"
            'get': function() {
                return this.baseUrl+ '/play/player_data/';
            }
        },
        allianceTacticsUrl: {
            'get': function() {
                return this.baseUrl+ '/play/alliance_tactics';
            }
        },
        allianceMotd: {
            'get': function() {
                return this.baseUrl+ '/play/alliance_motd';
            }
        },
        allianceChallenges:  {
            'get': function() {
                return this.baseUrl+ '/play/alliance_challenges';
            }
        },
        // includes sworn swords
        shopUrl: {
            'get': function() {
                return this.baseUrl+'/play/shop/?view_direct=true';
            }
        },
        // unknown as it is empty.
        // /play/gold_purchase_offer_results/
        goldPurchaseOffersUrl : {
            'get': function() {
                return this.baseUrl + '/play/gold_purchase_offers/';
            }
        },
        // redeem code.
        redeemCodeUrl: {
            'get': function() {
                return this.baseUrl + '/play/redeem_code?code="'; // code
            }
        },
        friendsUrl: {
            'get': function() {
                return this.baseUrl + '/play/friends';
                // /play/fb_friends
                // /play/kong_friends
                // /play/zynga_friends
            }
        },
        // /play/character/+b
        // /play/view_buildings/"+b

        // active battles?
        encountersUrl: {
            'get': function() {
                return this.baseUrl + '/play/encounters';
                // /play/fb_friends
                // /play/kong_friends
                // /play/zynga_friends
            }
        },
    },
    extensions: {
        checkForOfferCode: function(responseData) {
            var bodyContent = responseData.content;
            if ( bodyContent.test(/Error 500/)) {
                return { error:'notOffer', body: bodyContent}
            } else if ( bodyContent.test(new RegExp('<h3>Offer Expired</h3>'))) {
                return { error:'expired', body: bodyContent };
            } else if ( match = bodyContent.match(/[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}/)) {
                return { offerCode: match[0],  body: bodyContent };
            } else {
                return { error: 'Unknown (report to me)', body: bodyContent };
            }
        }
    }
});

Meteor.startup(function() {
    Object.freeze(DisruptorBeamManagerType.prototype);
    DisruptorBeamManager = new DisruptorBeamManagerType();
});