Accounts.config({
    sendVerificationEmail: true,
    // expire everyone every phase (or so)
    loginExpirationInDays: 30
});


Meteor.startup(function() {
    debugger;
    var honorable = Alliance.databaseTable.findOneByAllianceInviteCode('honorable');
    if ( honorable == null ) {
        honorable = new Alliance();
    }
    honorable.upsertFromUntrusted({displayName: 'The Honorable',
        allianceInviteCode: 'honorable'
    });
});