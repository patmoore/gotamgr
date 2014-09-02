Template.alliance_players.helpers({
    waitOn: function() {
        var handles = [];
        var allianceId = getRouterParams().allianceId;
        handles.push(AllianceManager.selectedAllianceHandle(allianceId));
        return handles;
    },
    data: function() {
        var allianceId = getRouterParams().allianceId;
        return {
            selectedAlliance: AllianceManager.findOneSelectedAlliance(allinaceId)
        };
    },
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
            return results;
        } else {
            return void(0);
        }
    },
    AllianceRole: function() {
        return AllianceRole;
    }
});