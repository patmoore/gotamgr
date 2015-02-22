Template.alliance_camp.helpers({
    initializeData: function(params) {
        var initialData = initializeDataWithPlayer(params);
        var allianceCampsHandle = CampManager.allianceCampsHandle(params.allianceId);
        var availableLocationsForAlliance;
        if ( allianceCampsHandle.ready() ) {
            availableLocationsForAlliance = CampManager.availableLocationsForAlliance(params.allianceId);
        }
        _.extend(initialData, {
            availableLocationsForAlliance : availableLocationsForAlliance,
            allianceCamps : allianceCampsHandle,
        });
        if ( params.campId ) {
            initialData.selectedCamp = Camp.databaseTable.findOneById(params.campId);
        }
        return initialData;
    },
    fullDetailCampData: function() {
        var templateData = getTemplateData();
        var result = _.extend({}, templateData, {camp: templateData.selectedCamp});
        return result;
    }
});

Template.alliance_camp.events({
   'click .buildCamp': function(event, template) {
       var jsonInput = getInputFieldData(template);
       CampManager.buildCamp(new Camp(jsonInput));
   }
});
