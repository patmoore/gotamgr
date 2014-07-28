Template.player_settings.events({
    'click button.saveChanges' : function() {
        var changes = getChangedInputData();
        PlayerManager.updatePlayerProfile(changes);
    }
});

Template.player_settings.helpers({
    selectedPlayer: function() {
        var handle = PlayerManager.currentPlayerHandle();
        if ( handle.ready() ) {
            var player = PlayerManager.findOneCurrentPlayer();
            // TODO: use setInputFieldData - doesn't work because elements don't exist.
//            setInputFieldData(null, player);
            return player;
        }
    },
    alliance: function() {
        var player = PlayerManager.findOneCurrentPlayer();
        if ( player ) {
            var handle = AllianceManager.selectedAllianceHandle(player.allianceId);
            if ( handle.ready()) {
                var alliance = Alliance.databaseTable.findOneById(player.allianceId);
                return alliance;
            }
        }
        return null;
    }
});