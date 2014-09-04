var allianceCampsHandle;
var allianceCampsDeps = new Deps.Dependency;

Template.alliance_camp.helpers({
    setup: function() {
        var params = getRouterParams();
        var availableLocationsForAllianceHandle = CampManager.availableLocationsForAllianceHandle(params.allianceId);
        var allianceCampsHandle = CampManager.allianceCampsHandle(params.allianceId);
        if ( allianceCamp)
        return {
            availableLocationsForAlliance : availableLocationsForAllianceHandle,
            allianceCamps : allianceCampsHandle,
            allianceId : params.allianceId
        };
    },
    waitOn: function() {
        var setup = Template.alliance_camp.setup();
        var waitOnValues = _.where(setup); // object has a ready() function
    },
    data: function() {
        var setup = Template.alliance_camp.setup();
        var dataMap = {};
        _.each(setup, function(element, key){
            if ( setup[key]) {
                dataMap[key] = setup[key].findFetch();
            }
        });
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