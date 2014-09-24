Template.player_settings.events({
    'click button.saveChanges' : function(event, template) {
        var changes = getChangedInputFieldData(template);
        PlayerManager.updatePlayerProfile(changes, function(error, result){
            clearChangedInputFieldData(template, error, result);
        });
    }
});

Template.player_settings.helpers({
    initializeData: function() {
        var currentPlayerHandle = PlayerManager.currentPlayerHandle();
        var initialData = {
            currentPlayer: one(currentPlayerHandle)
        };
        if ( currentPlayerHandle.ready()) {
            var currentPlayer = currentPlayerHandle.findOne();
            initialData.alliance = AllianceManager.selectedAllianceHandle(currentPlayer.allianceId);
        }
        return initialData;
    }
});