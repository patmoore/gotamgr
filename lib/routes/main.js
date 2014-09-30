Router.configure({
    layoutTemplate: 'mainLayout',
});

Router.map(function() {
    this.route('home', {
        path : '/',
        layoutTemplate: 'mainLayout',
        onBeforeAction: function() {
            if (Meteor.userId) {
                var playerId = PlayerManager.currentPlayerId();
                if (playerId) {
                    Router.go('player_home', {
                        playerId: playerId
                    });
                }
            }
        }
    });
    // NOTE: must be very last route defined.
    this.route('error404', {
        path: '*',
        where: 'server',
        layoutTemplate: 'mainLayout',
        action: function () {
            this.response.writeHead(404, {'Content-Type': 'application/json'});
            this.response.write(JSON.stringify({
                error: 404,
                message: 'not found'
            }));
            this.response.end();
        }

    });
});

initializeData = function(params) {
    return params ? _.extend({}, params) :{};
}
initializeDataWithPlayer = function(params) {
    var currentPlayerHandle = PlayerManager.currentPlayerHandle();
    var initialData = _.extend({
        player: one(currentPlayerHandle)
    }, initializeData(params));
    if ( currentPlayerHandle.ready()) {
        var currentPlayer = currentPlayerHandle.findOne();
        initialData.allianceId = currentPlayer.allianceId;
    }
    var currentPlayerAllianceHandle = AllianceManager.currentPlayerAllianceHandle();
    initialData.alliance = one(currentPlayerAllianceHandle);
    return initialData;
};

//// 5. login filter
if ( Meteor.isClient) {
    Router.onBeforeAction(function () {
        if (!Meteor.loggingIn() && !Meteor.user()) {
            this.render('home');
        }
    }, {except: 'home'});
}
//// 6. admin filter
//Router.before(function() {
//    if (! Metoer.user() || ! Metoer.user().admin)
//        this.render('accessDenied');
//}, {only: 'adminPage'});


// TODO: put in a pull request to iron-router
// this works but can we use a global hook that for a given route does a universal lookup.
if ( Meteor.isClient) {
    // TODO: This does not work because no routes are defined at this moment
    // need to see if we can hook the route creation.
    Template.prototype._initializeRoutes();
}

