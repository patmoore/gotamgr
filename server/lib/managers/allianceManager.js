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
            var alliance = Alliance.databaseTable.findOneByAllianceInviteCode(player.allianceInviteCode);
            if ( alliance ) {
                player.allianceId = alliance._id;
                player.allianceRole = AllianceRole.member;
                player._save();
            } else {
                alliance = Alliance.databaseTable.findOneByAllianceOfficerInviteCode(player.allianceInviteCode);
                // special case: first officer is leader.
                var playerCount = Player.databaseTable.findByAllianceId(alliance.id).count();
                if ( playerCount == 0 ) {
                    player.allianceRole = AllianceRole.leader;
                } else {
                    player.allianceRole = AllianceRole.officer;
                }
                player.allianceRole = AllianceRole.officer;
                player.allianceId = alliance._id;
                player._save();
            }
        },
        leaveAllianceMethod: function(player) {
            if ( player.allianceId ) {
                var alliance = Alliance.databaseTable.findOneById(player.allianceId);
                // TODO : any clean up needed? - send message to leader?
                // TODO: how to handle leader leaving? assign new leader
                player.allianceId = null;
                player.allianceRole = null;
                player.allianceInviteCode = null;
                player._save();
            }
        },
        updateAllianceSettings: function(changes) {
            // TODO: make sure that player is an officer.
            var thatManager = this.thatManager;
            var player = PlayerManager.findOneCurrentPlayer(this.userId);
            if ( player.isOfficer()  ) {
                var alliance = Alliance.databaseTable.findOneById(player.allianceId);
                alliance.upsertFromUntrusted(changes);
            }
        },

        buildCamp: function(campData) {
            var player = PlayerManager.findOneCurrentPlayer();
            if ( player != null ) {
                var allianceId = player.allianceId;
                var camp = CampManager._buildCamp(allianceId, campData);
                return camp;
            } else {
                throw new Meteor.Error('No signed on player');
            }
        },
        createAllianceMethod: function() {
            var thatManager = this.thatManager;
            var player = PlayerManager.findOneCurrentPlayer(this.userId);
            thatManager.leaveAllianceMethod(player);
            // TODO: change alliance.
            var alliance = new Alliance({allianceOfficerInviteCode: player.id});
            alliance._save();
            player.allianceId = alliance.id;
            player.allianceInviteCode = alliance.allianceOfficerInviteCode;
            player.allianceRole = AllianceRole.leader;
            player._save();
        }
    });
});
