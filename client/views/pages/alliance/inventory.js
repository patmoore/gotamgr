Template.alliance_inventory.helpers({
    initializeData: function(params) {
        var initialData = initializeDataWithPlayer(params);
        var allianceId = params.allianceId;
        _.extend(initialData, {
            listAlliancePlayers: AllianceManager.alliancePlayersHandle(allianceId),
            alliancePlayersInventory: AllianceManager.alliancePlayersInventoryHandle(allianceId)
        });
        return initialData;
    },
    alliancePlayerDisplayName: function() {
        var alliancePlayer = Player.databaseTable.findOneById(this.playerId);
        return alliancePlayer.displayName;
    },
    totalNeeded: function() {
        // this is the storables
        return 4;
    },
    storables: function() {

        var inventory = alliancePlayersInventory[this.index];

    },

});