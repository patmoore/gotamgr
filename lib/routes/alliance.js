Router.map(function() {
    this.route('alliance_players', {
        path : '/alliance/:allianceId/players',
        layoutTemplate: 'mainLayout',
        onWait: [
        ],
        navigationAlias: 'alliance'
    });
    this.route('alliance_inventory', {
        path : '/alliance/:allianceId/inventory',
        layoutTemplate: 'mainLayout',
        onWait: [
        ],
        navigationAlias: 'alliance'
    });
});
