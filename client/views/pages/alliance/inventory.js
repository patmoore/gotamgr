Template.alliance_inventory.helpers({
    initializeData: function(params) {
        debugger;
        var initialData = initializeDataWithPlayer(params);
        var allianceId = params.allianceId;
        _.extend(initialData, {
            listAlliancePlayers: AllianceManager.alliancePlayersHandle(allianceId),
            alliancePlayersInventory: AllianceManager.alliancePlayersInventoryHandle(allianceId)
        });
        return initialData;
    },
    totalNeeded: function() {
        // this is the storables
        return 4;
    },
    storables: function() {

    }
});