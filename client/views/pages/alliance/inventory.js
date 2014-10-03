Template.alliance_inventory.helpers({
    initializeData: function(params) {
        var initialData = initializeDataWithPlayer(params);
        var allianceId = params.allianceId;
        _.extend(initialData, {
            listAlliancePlayers: AllianceManager.alliancePlayersHandle(allianceId),
            alliancePlayersInventory: AllianceManager.alliancePlayersInventoryHandle(allianceId)
        });
    },
    totalNeeded: function() {
        // this is the storables
        return 4;
    }
});