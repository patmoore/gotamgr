Template.camp_fullDetail.helpers({
    upcomingStorableNeeds: function() {
        var that = this;
        var campStorable = this.camp.storableNeeds;
        if ( campStorable ) {
            var result = campStorable.slice(this.camp.currentLevel+1);
            for(var i = 0; i < result.length; i++) {
                Object.defineProperties(result[i], {
                    level: {
                        enumerable: false,
                        value: that.camp.currentLevel + i+1,
                        writable: false
                    }
                });
            }
            debugger;
            return result;
        }
    },

    garrisonDisplay: function() {
        return this.camp.garrison? "Yes":"No";
    },
    storable : function() {
        return Storables.enumOf(this.key);
    },
    Storables : function() {

        return Storables.symbols();
    },
    SkillSpecialization: function() {
        return SkillSpecialization.symbols();
    },
    editMode: function() {
        var allianceOfficer = getTemplateData(allianceOfficer);
        if ( allianceOfficer) {
            var editMode = getRouteName().match(/edit/);
            return editMode != null;
        }
        // check for alliance officer and in edit mode.
        return false;
    }
});

Template.camp_fullDetail.events({
    'click .saveChanges': function(event, template) {
        var inputDataFields = getInputFieldData(template);
        if (inputDataFields.garrison == null) {
            inputDataFields.garrison = false;
        } else {
            inputDataFields.garrison = true;
        }
        var camp = new Camp(inputDataFields);
        var templateData = getTemplateData();
        debugger;
        CampManager.updateCampInformation(camp, templateData.campId, function(error, data){
            if ( !error) {
                Router.go('alliance_camp', {allianceId:templateData.allianceId, campId:templateData.id});
            }
        });
    },
    'click .deleteCamp': function(event, template) {
        var templateData = getTemplateData();
        var inputDataFields = getInputFieldData(template);
        var campId = inputDataFields.campId;
        CampManager.deleteCamp(campId, function(error, data){
            if ( !error) {
                Router.go('alliance_camp', {allianceId:templateData.allianceId});
            }
        });
    },
    'click .editCamp': function(event, template) {
        var templateData = getTemplateData();

        debugger;
        Router.go('alliance_camp_edit', {allianceId: templateData.allianceId, campId:templateData.campId});
    }
})