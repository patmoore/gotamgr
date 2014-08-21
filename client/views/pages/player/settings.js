Template.player_settings.events({
    'click button.saveChanges' : function(event, template) {
        var changes = getChangedInputFieldData(template);
        PlayerManager.updatePlayerProfile(changes, function(error, result){
            clearChangedInputFieldData(template, error, result);
        });
    }
});

Template.player_settings.helpers({
    waitOn: function() {
        var currentPlayerHandle = PlayerManager.currentPlayerHandle();
        var selectedAllianceHandle = null;
        if ( currentPlayerHandle.ready()) {
            var currentPlayer = currentPlayerHandle.findOne();
            selectedAllianceHandle = AllianceManager.selectedAllianceHandle(currentPlayer.allianceId);
        }
        return [ currentPlayerHandle, selectedAllianceHandle ];
    },
    selectedPlayer: function() {
        var handle = PlayerManager.currentPlayerHandle();
        if ( handle.ready() ) {
            var player = PlayerManager.findOneCurrentPlayer();
            // TODO: use setInputFieldData - doesn't work because elements don't exist.
//            setInputFieldData(null, player);
            return player;
        } else {
            return null;
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