Router.map(function() {
    this.route('player_home', {
        path : '/player/:playerId',
        layoutTemplate: 'player_mainLayout',
        navigationAlias: 'player',
        navigationAliases: ['alliance', 'player'],
        displayName: 'Player Home'
    });
    this.route('player_building', {
        path : '/player/:playerId/building',
        layoutTemplate: 'player_mainLayout',
        navigationAlias: 'player',
        displayName: 'Building'
    });
    this.route('player_inventory', {
        path : '/player/:playerId/inventory',
        layoutTemplate: 'player_mainLayout',
        navigationAlias: 'player',
        displayName: 'Inventory'
    });
    this.route('player_planByBuildings', {
        path: '/player/:playerId/planByBuildings/:buildPlanId?',
        layoutTemplate: 'player_mainLayout',
        navigationAlias: 'player',
        displayName: 'Currently Building'
    });
    this.route('player_buildPlan', {
        path : '/player/:playerId/buildPlan/:buildPlanId?',
        layoutTemplate: 'player_mainLayout',
        navigationAlias: 'player',
        displayName: 'Build Plan Management'
    });
    this.route('player_settings', {
        path : '/player/:playerId/settings',
        layoutTemplate: 'player_mainLayout',
        navigationAlias: 'player',
        displayName: 'Settings'
    });
    this.route('player_gotadata', {
        path:'/player/:playerId/gotadata',
        where:'server',
        action: function() {
            PlayerManager.initialize();
        }
    });
});

