Meteor.startup(function(){
    _.extend(AllianceManagerType.prototype, {
        alliancePlayersInventoryCursor: function(allianceId) {
            var thatManager = this.thatManager;
            var players = thatManager.findFetchAlliancePlayers(allianceId);
            var playerIds = _.map(players, function(player) {
                return player.id;
            });
            return Inventory.databaseTable.findByPlayerId(playerIds);
        },
        _assignPlayerToAlliance: function(player) {
            var alliance = Alliance.databaseTable.findOneAllianceInviteCode(player.allianceInviteCode);
            if ( alliance ) {
                player.allianceId = alliance._id;
                player._save();
            }
        },
        updateAllianceSettings: function(changes) {
            // TODO: make sure that player is an officer.
            var thatManager = this.thatManager;
            var player = PlayerManager.findOneCurrentPlayer(this.userId);
            var alliance = Alliance.databaseTable.findOneAllianceInviteCode(player.allianceId);
            alliance.upsertFromUntrusted(changes);
        },

        buildCamp: function(campData) {
            var player = PlayerManager.findOneCurrentPlayer();
            var allianceId = player.allianceId;
            return CampManager.buildCamp(allianceId);
        },



    });
});

Meteor.startup(function() {
    var honorable = Alliance.databaseTable.findOneByAllianceInviteCode('honorable');
    if ( honorable == null ) {
        honorable = new Alliance({displayName: 'The Honorable', allianceInviteCode: 'honorable'});
        honorable._save();
    }
})