Router.configure({
    layoutTemplate: 'mainLayout',
});

function inventoryReady() {
    return {
        ready: function() {
            return InventoryManager && InventoryManager.currentInventory(Meteor.userId());
        }
    };
};
function currentBuildOrderReady() {
    return {
        ready: function() {
            return InventoryManager && InventoryManager.currentBuildOrder(Meteor.userId());
        }
    };
};
Router.map(function() {
    this.route('home', {
        path : '/',
        layoutTemplate: 'mainLayout',
    });
    this.route('player_home', {
        path : '/player',
        layoutTemplate: 'mainLayout',
        navigationAlias: 'player',
        displayName: 'Home'
    });
    this.route('player_buildableList', {
        path : '/player/inventory',
        layoutTemplate: 'mainLayout',
        onWait: [
            inventoryReady,
        ],
        navigationAlias: 'player',
        displayName: 'Inventory'
    });
    this.route('player_planByBuildings', {
        path: '/player/executePlan',
        layoutTemplate: 'mainLayout',
        navigationAlias: 'player',
        displayName: 'Build Plan'
    });
    this.route('alliances', {
        path : '/alliances',
        layoutTemplate: 'mainLayout',
        onWait: [
            inventoryReady,
        ],
        navigationAlias: 'alliance'
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
