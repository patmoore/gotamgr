Template.player_settings.events({
    'click button.saveChanges' : function() {
        var changes = getChangedInputData();
        PlayerManager.updatePlayerProfile(changes);
    }
});