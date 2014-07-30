Meteor.startup(function(){
    _.extend(CampManagerType.prototype, {
        buildCamp: function(allianceId) {
            var camp = Camp.prototype.upsertFromUntrusted(campData, {allianceId:allianceId});
            return camp;
        }
    });
});