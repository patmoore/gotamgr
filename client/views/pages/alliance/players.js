Template.alliance_players.helpers({
    initializeData: function(params) {
        var allianceId = params.allianceId;

        return {
            allianceId : allianceId,
            selectedAlliance: one(AllianceManager.selectedAllianceHandle(allianceId)),
            players: AllianceManager.alliancePlayersHandle(allianceId)
        }
    },
    AllianceRole: function() {
        return AllianceRole.symbols();
    }
});

Template.alliance_players.events({
    'click .saveChanges': function(event, template) {
        var json = getInputFieldData(template);

    }
})
