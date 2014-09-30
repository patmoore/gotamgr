Template.alliance_inventory.helpers({
    initializeData: function(params) {
        var initialData = initializeDataWithPlayer(params);
        var allianceId = params.allianceId;
        _.extend(initialData, {
            alliancePlayers: AllianceManager.alliancePlayers(allianceId),
            alliancePlayersInventory: AllianceManager.alliancePlayersInventoryHandle(allianceId)
        });
    },
    total: function() {
        debugger;
        return 0;
    }
});