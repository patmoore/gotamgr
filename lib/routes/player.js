Router.map(function() {
    this.route('player_home', {
        path : '/player',
        layoutTemplate: 'player_mainLayout',
        navigationAlias: 'player',
        displayName: 'Home'
    });
    this.route('player_inventory', {
        path : '/player/inventory',
        layoutTemplate: 'player_mainLayout',
        navigationAlias: 'player',
        displayName: 'Inventory'
    });
    this.route('player_planByBuildings', {
        path: '/player/executePlan',
        layoutTemplate: 'player_mainLayout',
        navigationAlias: 'player',
        displayName: 'Build Plan'
    });
    this.route('player_buildPlan', {
        path : '/player/buildPlan/:buildPlanId?',
        layoutTemplate: 'player_mainLayout',
        navigationAlias: 'player',
        displayName: 'Build Plan Management'
    });
    this.route('player_settings', {
        path : '/player/settings',
        layoutTemplate: 'player_mainLayout',
        navigationAlias: 'player',
        displayName: 'Settings'
    });
});

