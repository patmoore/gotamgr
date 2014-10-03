var allianceCampsHandle;
var allianceCampsDeps = new Deps.Dependency;

Template.alliance_camp.helpers({
    initializeData: function(params) {
        var initialData = initializeDataWithPlayer(params);
        var allianceCampsHandle = CampManager.allianceCampsHandle(params.allianceId);
        var availableLocationsForAlliance;
        if ( allianceCampsHandle.ready() ) {
            availableLocationsForAlliance = CampManager.availableLocationsForAlliance(params.allianceId);
            debugger;
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
       AllianceManager.buildCamp(allianceId, jsonInput);
   }
});

Template.alliance_camp.rendered = function() {
    var template = this;
    this.autorun(function(){
        var params = getRouterParams();
        allianceCampsHandle = CampManager.allianceCampsHandle(params.allianceId);
        if ( allianceCampsHandle && allianceCampsHandle.ready()) {
            allianceCampsDeps.changed();
        }
    });
}