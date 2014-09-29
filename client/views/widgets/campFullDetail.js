Template.camp_fullDetail.helpers({
    upcomingStorableNeeds: function() {
        var skillGeneral = this.skillSpecialization.skillGeneral;
        var campStorable = CampStorable[skillGeneral.dbCode];
        return campStorable.slice(this.currentLevel);
    },
    storable : function() {
        return Storables[this.key];
    }
});

Template.camp_fullDetail.events({
    'click .saveChanges': function(event, template) {
        var inputDataFields = getInputDataFields(template);
        CampManager.updateCampInformation(inputDataFields);
    }
})