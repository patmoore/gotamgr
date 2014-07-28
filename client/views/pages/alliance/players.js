Template.alliance_players.helpers({
    selectedAlliance: function() {
        var allianceId = Router.current(true).params.allianceId;
        var handle = AllianceManager.selectedAllianceHandle(allianceId);
        if ( handle.ready() ) {
            return handle.findOne();
        } else {
            return void(0);
        }
    },
    players : function() {
        var allianceId = Router.current(true).params.allianceId;
        var handle = AllianceManager.alliancePlayersHandle(allianceId);
        if ( handle.ready()) {
            var results = handle.findFetch();
            debugger;
            return results;
        } else {
            return void(0);
        }
    }
});