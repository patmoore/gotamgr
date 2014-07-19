Meteor.startup(function(){
    _.extend(AllianceManagerType.prototype, {
    });
});

Meteor.startup(function() {
    var honorable = Alliance.databaseTable.findOneByAllianceInviteCode('honorable');
    if ( honorable == null ) {
        honorable = new Alliance({displayName: 'The Honorable', allianceInviteCode: 'honorable'});
        honorable._save();
    }
})