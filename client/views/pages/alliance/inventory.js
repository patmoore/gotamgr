Template.alliance_inventory.helpers({
    initializeData: function(params) {
        var selectedAllianceHandle = AllianceManager.selectedAllianceHandle(allianceId);
        return {
            alliance: one(selectedAllianceHandle),
            alliancePlayers: AllianceManager.alliancePlayers(allianceId),
            alliancePlayersInventory: AllianceManager.alliancePlayersInventoryHandle(allianceId)
        };
    },
    total: function() {
        debugger;
        return 0;
    }
});