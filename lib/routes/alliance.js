Router.map(function() {
    this.route('alliance_home', {
        path : '/alliance/:allianceId',
        layoutTemplate: 'alliance_mainLayout',
        onWait: [
        ],
        displayName: 'Home',
        navigationAlias: 'alliance'
    });
    this.route('alliance_players', {
        path : '/alliance/:allianceId/players',
        layoutTemplate: 'alliance_mainLayout',
        onWait: [
        ],
        displayName: 'Players',
        navigationAlias: 'alliance'
    });
    this.route('alliance_inventory', {
        path : '/alliance/:allianceId/inventory',
        layoutTemplate: 'alliance_mainLayout',
        onWait: [
        ],
        displayName: 'Inventory',
        navigationAlias: 'alliance'
    });
});
