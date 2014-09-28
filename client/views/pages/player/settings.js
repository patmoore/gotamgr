Template.player_settings.events({
    'click button.saveChanges' : function(event, template) {
        var changes = getInputFieldData(template);
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
            initialData.alliance = one(AllianceManager.selectedAllianceHandle(currentPlayer.allianceId));
        }
        return initialData;
    }
});