Template.alliance_inventory.helpers({
    selectedAlliance: function() {
        var allianceId = Router.current(true).params.allianceId;
        var handle = AllianceManager.selectedAllianceHandle(allianceId);
        return handle.findOne();
    },
    buildables : function() {
        var allianceId = Router.current(true).params.allianceId;
        var handle = AllianceManager.alliancePlayersInventoryHandle(allianceId);
        var results = handle.findFetch();
        debugger;
        return results;
    }
});