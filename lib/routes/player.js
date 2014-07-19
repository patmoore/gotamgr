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
});
