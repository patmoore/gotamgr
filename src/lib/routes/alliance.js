
Router.map(function() {
    this.route('alliance_home', {
        path : '/alliance/:allianceId',
        layoutTemplate: 'alliance_mainLayout',
        displayName: 'Alliance Home',
        navigationAlias: 'alliance',
        navigationAliases: ['alliance', 'player']
    });
    this.route('alliance_players', {
        path : '/alliance/:allianceId/players',
        layoutTemplate: 'alliance_mainLayout',
        displayName: 'Players',
        navigationAlias: 'alliance'
    });
    this.route('alliance_inventory', {
        path : '/alliance/:allianceId/inventory',
        layoutTemplate: 'alliance_mainLayout',
        displayName: 'Inventory',
        navigationAlias: 'alliance'
    });
    this.route('alliance_camp', {
        path : '/alliance/:allianceId/camp/:campId?',
        layoutTemplate: 'alliance_mainLayout',
        displayName: 'Camps',
        navigationAlias: 'alliance'
    });
    this.route('alliance_camp_edit', {
        path : '/alliance/:allianceId/camp/:campId/edit',
        template: 'alliance_camp',
        layoutTemplate: 'alliance_mainLayout',
        displayName: 'Camps',
    });
});
