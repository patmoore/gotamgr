Template.camp_fullDetail.helpers({
    upcomingStorableNeeds: function() {
        debugger;
        var skillGeneral = this.camp.skillSpecialization.skillGeneral;
        var campStorable = this.camp.storableNeeds;//CampStorable[skillGeneral.dbCode];
        return campStorable.slice(this.camp.currentLevel);
    },

    garrisonDisplay: function() {
        return this.camp.garrison? "Yes":"No";
    },
    storable : function() {
        return Storables[this.key];
    },
    Storables : function() {
        return Storables.symbols();
    },
    SkillSpecialization: function() {
        return SkillSpecialization.symbols();
    }
});

Template.camp_fullDetail.events({
    'click .saveChanges': function(event, template) {
        var inputDataFields = getInputFieldData(template);
        debugger;
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