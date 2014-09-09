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
    _.each(Router.routes, function (route) {
        var templateName = route.router.convertTemplateName(route.name);
        var template = Template[templateName];
        // not all routes have templates...
        if (template) {
            _.each(['waitOn', 'data', 'initializeData'], function (action) {
                // if a route does not have a function use the Template's function
                // maybe in future merge Router.xx() and Template.xx() so that the results are
                // combined?
                if (typeof route.options[action] === 'undefined') {
                    route.options[action] = template[action];
                }
            });
        }
    });
}

