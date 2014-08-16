var allianceHandle = null;
function allianceHandleTrigger() {
    allianceHandle = AllianceManager.currentPlayerAllianceCursor();
    return { ready: function(){
        return allianceHandle && allianceHandle.ready()
    }};
}
Router.map(function() {
    this.route('alliance_home', {
        path : '/alliance/:allianceId',
        layoutTemplate: 'alliance_mainLayout',
        onWait: [
            allianceHandleTrigger
        ],
        displayName: 'Home',
        navigationAlias: 'alliance'
    });
    this.route('alliance_players', {
        path : '/alliance/:allianceId/players',
        layoutTemplate: 'alliance_mainLayout',
        onWait: [
            allianceHandleTrigger
        ],
        displayName: 'Players',
        navigationAlias: 'alliance'
    });
    this.route('alliance_inventory', {
        path : '/alliance/:allianceId/inventory',
        layoutTemplate: 'alliance_mainLayout',
        onWait: [
            allianceHandleTrigger
        ],
        displayName: 'Inventory',
        navigationAlias: 'alliance'
    });
    this.route('alliance_camps', {
        path : '/alliance/:allianceId/camps',
        layoutTemplate: 'alliance_mainLayout',
        onWait: [
            allianceHandleTrigger
        ],
        displayName: 'Camps',
        navigationAlias: 'alliance'
    });
});
