Template.alliance_players.helpers({
    initializeData: function(params) {
        var allianceId = params.allianceId;

        var initialData = _.extend({
            players: AllianceManager.alliancePlayersHandle(allianceId)
        }, initializeDataWithPlayer(params));
        return initialData;
    },
    AllianceRole: function() {
        return AllianceRole.symbols();
    }
});

Template.alliance_players.events({
    'click .saveChanges': function(event, template) {
        var json = getInputFieldData(template);
        AllianceManager.updateAlliancePlayer(json);
    }
})
