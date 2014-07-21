Template.alliance_settings.events({
    'click button.saveChanges' : function() {
        var changes = getChangedInputData();
        AllianceManager.updateAllianceSettings(changes);
    }
});