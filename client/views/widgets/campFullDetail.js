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
        var inputDataFields = getInputFieldData(template);
        CampManager.updateCampInformation(inputDataFields);
    },
    'click .deleteCamp': function(event, template) {
        var params = getRouterParams();
        var inputDataFields = getInputFieldData(template);
        var campId = inputDataFields.campId;
        CampManager.deleteCamp(campId, function(error, data){
            if ( !error) {
                Router.go('alliance_camp', {allianceId:params.allianceId});
            }
        });
    }
})