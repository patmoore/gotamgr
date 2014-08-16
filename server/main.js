Accounts.config({
    sendVerificationEmail: true,
    // expire everyone every phase (or so)
    loginExpirationInDays: 30
});


Meteor.startup(function() {
    var honorable = Alliance.databaseTable.findOneByAllianceInviteCode('honorable');
    if ( honorable == null ) {
        honorable = new Alliance({displayName: 'The Honorable', allianceInviteCode: 'honorable'});
        honorable._save();
        camp = CampManager._buildCamp(honorable.id, {
            campLocation: CampLocation.IronmansBay,
            skillSpecialization: SkillSpecialization.Aid,
            currentLevel: 1
        });
        camp = CampManager._buildCamp(honorable.id, {
            campLocation: CampLocation.IronmansBay,
            skillSpecialization: SkillSpecialization.Aid,
            currentLevel: 1
        });
        camp = CampManager._buildCamp(honorable.id, {
            campLocation: CampLocation.GreatWyk,
            skillSpecialization: SkillSpecialization.Spy,
            currentLevel: 1
        });
        camp = CampManager._buildCamp(honorable.id, {
            campLocation: CampLocation.Harlaw,
            skillSpecialization: SkillSpecialization.Barter,
            currentLevel: 1
        });
    }
});