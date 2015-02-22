Template.alliance_inventory.helpers({
    initializeData: function(params) {
        var initialData = initializeDataWithPlayer(params);
        var allianceId = params.allianceId;
        _.extend(initialData, {
            listAlliancePlayers: many(AllianceManager.alliancePlayersHandle(allianceId)),
            alliancePlayersInventory: many(AllianceManager.alliancePlayersInventoryHandle(allianceId)),
            allianceCamps: many(CampManager.allianceCampsHandle(allianceId))
        });
        if ( initialData.allianceCamps.ready() ) {
            initialData.allianceNeeds = {};
            var allianceCamps = initialData.allianceCamps.findFetch();
            _.each(allianceCamps, function(allianceCamp) {
                _.each(allianceCamp.totalByStorable, function(quantity, storableDbCode) {
                    if (initialData.allianceNeeds[storableDbCode] == null) {
                        initialData.allianceNeeds[storableDbCode] = 0;
                    }
                    initialData.allianceNeeds[storableDbCode] += quantity;
                });
            });
        }
        if ( initialData.alliancePlayersInventory.handle.ready() ) {
            debugger;
            var alliancePlayersInventory = initialData.alliancePlayersInventory.handle.findFetch();
            initialData.currentPlayerInventory = _.findWhere(alliancePlayersInventory, {playerId:initialData.playerId});
        }
        return initialData;
    },
    notYou: function() {
        var playerId = getTemplateData('playerId');
        return this.playerId != playerId;
    },
    storableDisplayName: function() {
        return Storables.enumOf(this.key).displayName;
    },
    alliancePlayerDisplayName: function() {
        var alliancePlayer = Player.databaseTable.findOneById(this.playerId);
        return alliancePlayer.displayName;
    },
    playerInventory: function(key) {
        if( this.current[key] == null) {
            return 0;
        } else {
            return this.current[key];
        }
    },
/*
    currentPlayerInventory: function() {
        debugger;
        var alliancePlayersInventory = getTemplateData('alliancePlayersInventory');
        if ( alliancePlayersInventory ) {
            var alliancePlayerInventory = _.findWhere(alliancePlayersInventory, {playerId: this.id});
            if ( alliancePlayerInventory ) {
                return alliancePlayersInventory.current;
            }
        }
    },
*/

});
