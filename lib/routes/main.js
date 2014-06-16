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
    this.route('playerHome', {
        path : '/player',
        layoutTemplate: 'mainLayout',
    });
    this.route('alliances', {
        path : '/alliances',
        layoutTemplate: 'mainLayout',
        onWait: [
            inventoryReady,
        ]
    });
    this.route('buildableList', {
        path : '/',
        layoutTemplate: 'mainLayout',
        onWait: [
            inventoryReady,
        ]
    });
    this.route('planByBuildings', {
        path: '/executePlan',
        layoutTemplate: 'mainLayout',
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
