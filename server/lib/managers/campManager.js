Meteor.startup(function(){
    _.extend(CampManagerType.prototype, {
        buildCamp: function(campData) {
            var camp = Camp.prototype.upsertFromUntrusted(campData, {allianceId:allianceId});
            return camp;
        }
    });
});

Meteor.startup(function() {
    var honorable = Alliance.databaseTable.findOneByAllianceInviteCode('honorable');
    if ( honorable != null ) {
        camp = CampManager.buildCamp({
            allianceId:honorable.id,
            skillSpecialization: SkillSpecialization.Aid,
            currentLevel: 1
        });
    }
})