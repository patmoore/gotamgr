Accounts.config({
    sendVerificationEmail: true,
    // expire everyone every phase (or so)
    loginExpirationInDays: 30
});


Meteor.startup(function() {
    var honorable = Alliance.databaseTable.findOneByAllianceInviteCode('honorable');
    if ( honorable == null ) {
        honorable = new Alliance({displayName: 'The Honorable',
            allianceInviteCode: 'honorable'
        });
    }
});