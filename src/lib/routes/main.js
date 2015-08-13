Router.configure({
    layoutTemplate: 'mainLayout',
});

Router.map(function() {
    this.route('home', {
        path : '/',
        layoutTemplate: 'mainLayout',
        onBeforeAction: function(pause) {
            if (Meteor.userId) {
                var currentPlayerHandle = PlayerManager.currentPlayerHandle();
                if (currentPlayerHandle.ready()) {
                    var player = currentPlayerHandle.findOne();
                    if (player && player.id) {
                        Router.go('player_home', {
                            playerId: player.id,
                            allianceId: player.allianceId
                        });
                    }
                    this.next();
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
        },
        navigationAlias: 'none'
    });
});
if ( Meteor.isClient) {
    initializeData = function (params) {
        return params ? _.extend({}, params) : {};
    };
    initializeDataWithPlayer = function (params) {
        var currentPlayerHandle = PlayerManager.currentPlayerHandle();
        var currentPlayerAllianceHandle = AllianceManager.currentPlayerAllianceHandle();
        var currentPlayerDisruptorBeanUserHandle = DisruptorBeamManager.currentPlayerDisruptorBeanUserHandle();
        var initialData = _.extend({
            player: one(currentPlayerHandle),
            playerId: {
                handle: currentPlayerHandle,
                method: function() {
                    if ( this.ready()) {
                        var player = this.findOne();
                        return player.id;
                    }
                }
            },
            currentPlayer: one(currentPlayerHandle),
            currentPlayerId: {
                handle: currentPlayerHandle,
                method: function() {
                    if ( this.ready()) {
                        var player = this.findOne();
                        return _.deep(player, 'id');
                    }
                }
            },
            alliance: one(currentPlayerAllianceHandle),
            allianceId: {
                handle: currentPlayerHandle,
                method: function() {
                    if ( this.ready()) {
                        var player = this.findOne();
                        return _.deep(player, 'allianceId');
                    }
                }
            },
            allianceOfficer: {
                handle: currentPlayerHandle,
                method: function() {
                    if (this.ready()) {
                        var player = this.findOne();
                        return _.deep(player, 'allianceOfficer');
                    }
                }
            },
            allianceLeader: {
                handle: currentPlayerHandle,
                method: function() {
                    if (this.ready()) {
                        var player = this.findOne();
                        return _.deep(player, 'allianceLeader');
                    }
                }
            },
            currentPlayerDisruptorBeanUser: one(currentPlayerDisruptorBeanUserHandle)
        }, initializeData(params));
        return initialData;
    };
}
//// 5. login filter
if ( Meteor.isClient) {
    Router.onBeforeAction(function () {
        if (!Meteor.loggingIn() && !Meteor.user()) {
            this.render('home');
        } else {
            this.next();
        }
    }, {except: 'home'});
}
//// 6. admin filter
//Router.onBeforeAction(function() {
//    if (! Metoer.user() || ! Metoer.user().admin)
//        this.render('accessDenied');
//}, {only: 'adminPage'});
// If we don't set this, iron-router will assume that route named accounts_enrollAccount has a
// template named AccountsEnrollAccount.
if ( Router.setTemplateNameConverter) {
    Router.setTemplateNameConverter(function (str) { return str; });
}
// TODO: put in a pull request to iron-router
// this works but can we use a global hook that for a given route does a universal lookup.
if ( Meteor.isClient) {
    // TODO: This does not work because no routes are defined at this moment
    // need to see if we can hook the route creation.
    Template.prototype._initializeRoutes();
}

