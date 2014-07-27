function inventoryReady() {
    return {
        ready: function() {
            return InventoryManager && InventoryManager.currentInventoryHandle(Meteor.userId()).ready();
        }
    };
};
function currentBuildOrderReady() {
    return {
        ready: function() {
            return InventoryManager && InventoryManager.currentBuildOrderHandle(Meteor.userId()).ready();
        }
    };
};


Router.map(function() {
    this.route('player_home', {
        path : '/player',
        layoutTemplate: 'player_mainLayout',
        navigationAlias: 'player',
        displayName: 'Home'
    });
    this.route('player_settings', {
        path : '/player/settings',
        layoutTemplate: 'player_mainLayout',
        navigationAlias: 'player',
        displayName: 'Settings'
    });
    this.route('player_buildableList', {
        path : '/player/inventory',
        layoutTemplate: 'player_mainLayout',
        onWait: [
            inventoryReady,
        ],
        navigationAlias: 'player',
        displayName: 'Inventory'
    });
    this.route('player_planByBuildings', {
        path: '/player/executePlan',
        layoutTemplate: 'player_mainLayout',
        navigationAlias: 'player',
        displayName: 'Build Plan'
    });
});
