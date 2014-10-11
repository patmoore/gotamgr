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
    allianceOfficer: function() {
        return this.player && this.player.allianceOfficer;
    },
    allianceLeader: function() {
        return this.player && this.player.allianceLeader;
    }
});

Template.alliance_camp.events({
   'click .buildCamp': function(event, template) {
       var jsonInput = getInputFieldData();
       var allianceId = getRouterParams().allianceId;
       AllianceManager.buildCamp(allianceId, jsonInput);
   }
});
