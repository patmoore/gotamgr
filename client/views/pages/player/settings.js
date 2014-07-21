Template.player_settings.helpers({
    saveChanges: function() {
        var changes = getChangedInputData();
        PlayerManager.updatePlayerProfile(changes);
    }
});