var allianceCampsHandle;
var allianceCampsDeps = new Deps.Dependency;

Template.alliance_camp.helpers({
    initializeData: function(params) {
        var allianceCampsHandle = CampManager.allianceCampsHandle(params.allianceId);
        var availableLocationsForAlliance;
        if ( allianceCampsHandle.ready() ) {
            availableLocationsForAlliance = CampManager.availableLocationsForAlliance(params.allianceId);
        }
        return {
            availableLocationsForAlliance : availableLocationsForAlliance,
            allianceCamps : allianceCampsHandle,
            allianceId : params.allianceId
        };
    },
    allianceOfficer: function() {
        var player = PlayerManager.findOneCurrentPlayer();
        return player && player.allianceOfficer;
    },
    allianceLeader: function() {
        var player = PlayerManager.findOneCurrentPlayer();
        return player && player.allianceOfficer;
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
        debugger;
        var params = getRouterParams();
        allianceCampsHandle = CampManager.allianceCampsHandle(params.allianceId);
        if ( allianceCampsHandle && allianceCampsHandle.ready()) {
            allianceCampsDeps.changed();
        }
    });
}