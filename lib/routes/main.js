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
currentBuildOrderCursor
function currentBuildOrderReady() {
    return {
        ready: function() {
            return InventoryManager && InventoryManager.currentBuildOrder(Meteor.userId());
        }
    };
};
Router.map(function() {
    this.route('buildableList', {
        path : '/',
        onWait: [
            inventoryReady,
        ]
    });
    this.route('planByBuildings', {
        path: '/executePlan'
    });
    // NOTE: must be very last route defined.
    this.route('error404', {
        path: '*',
        where: 'server',
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
