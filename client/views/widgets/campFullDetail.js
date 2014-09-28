Template.camp_fullDetail.helpers({
    upcomingStorableNeeds: function() {
        debugger;
        var skillGeneral = this.skillSpecialization.skillGeneral;
        var campStorable = CampStorable[skillGeneral];
        return campStorable.slice(this.currentLevel);
    }
});

Template.camp_fullDetail.events({
    'click .saveChanges': function(event, template) {
        var inputDataFields = getInputDataFields(template);
        CampManager.updateCampInformation(inputDataFields);
    }
})