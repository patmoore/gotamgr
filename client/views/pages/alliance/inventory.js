Template.alliance_inventory.helpers({
    initializeData: function(params) {

    },
    selectedAlliance: function() {
        var allianceId = Router.current(true).params.allianceId;
        var handle = AllianceManager.selectedAllianceHandle(allianceId);
        if ( handle.ready()) {
            return handle.findOne();
        } else {
            return void(0);
        }
    },
    storables : function() {
        var allianceId = Router.current(true).params.allianceId;
        var handle = AllianceManager.alliancePlayersInventoryHandle(allianceId);
        if ( handle.ready() ) {
            var results = handle.findFetch();
            debugger;
            return results;
        } else {
            return void(0);
        }
    },
    total: function() {
        debugger;
        return 0;
    }
});