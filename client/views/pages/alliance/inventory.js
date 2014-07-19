Template.alliance_players.helpers({
    selectedAlliance: function() {
        var allianceId = Router.current(true).params.allianceId;
        var handle = AllianceManager.selectedAllianceHandle(allianceId);
        return handle.findOne();
    },
    buildables : function() {
        var allianceId = Router.current(true).params.allianceId;
        var handle = AllianceManager.alliancePlayersHandle(allianceId);
        var results = handle.findFetch();
        return results;
    }
});