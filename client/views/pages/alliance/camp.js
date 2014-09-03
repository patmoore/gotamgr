var allianceCampsHandle;
var allianceCampsDeps = new Deps.Dependency;

Template.alliance_camp.helpers({
    waitOn:
    availableCampLocations: function() {
        allianceCampsDeps.depends();
        var params = getRouterParams();
        var availableLocationsForAlliance = CampManager.availableLocationsForAlliance(params.allianceId);
        debugger;
        return availableLocationsForAlliance;
    },
    allianceOfficer: function() {
        var player = PlayerManager.findOneCurrentPlayer();
        return player && player.allianceOfficer;
    },
    allianceLeader: function() {
        var player = PlayerManager.findOneCurrentPlayer();
        return player && player.allianceOfficer;
    },
    selectedCamp:
});

Template.alliance_camp.events({
   'click .buildCamp': function(event, template) {
       AllianceManager.buildCamp();
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