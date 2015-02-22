Meteor.startup(function(){
    _.extend(AllianceManagerType.prototype, {
        _assignPlayerToAlliance: function(player) {
            var alliance = Alliance.databaseTable.findOneByAllianceInviteCode(player.allianceInviteCode);
            var allianceRole;
            if ( !alliance ) {
                alliance = Alliance.databaseTable.findOneByAllianceOfficerInviteCode(player.allianceInviteCode);
                if (!alliance) {
                    throw new Meteor.Error(403, "No alliance with invite code:" + player.allianceInviteCode);
                }
                // special case: first officer is leader.
                var playerCount = Player.databaseTable.findByAllianceId(alliance.id).count();
                if ( playerCount == 0 ) {
                    player.allianceRole = AllianceRole.leader;
                } else {
                    player.allianceRole = AllianceRole.officer;
                }
            } else {
                player.allianceRole = AllianceRole.member;
            }
            player.allianceId = alliance._id;
            player._save();
        },
        leaveAlliance: {
            method: function(player) {
                if (player.allianceId) {
                    var alliance = Alliance.databaseTable.findOneById(player.allianceId);
                    // TODO : any clean up needed? - send message to leader?
                    // TODO: how to handle leader leaving? assign new leader
                    player.allianceId = null;
                    player.allianceRole = null;
                    player.allianceInviteCode = null;
                    player._save();
                }
            }
        },
        updateAllianceSettings: {
            method: function(changes) {
                // TODO: make sure that player is an officer.
                var thatManager = this.thatManager;
                var player = PlayerManager.findOneCurrentPlayer(this.userId);
                if (player.isOfficer()) {
                    var alliance = Alliance.databaseTable.findOneById(player.allianceId);
                    alliance.upsertFromUntrusted({clientObj:changes});
                }
            }
        },
        updateAlliancePlayer: {
            /**
             *
             * @param playerChanges { <playerId> : {allianceRole : } }
             */
            method: function(playerChanges) {

            },
            permissionCheck: function(callInfo){

            }
        },

        createAlliance: {
            method: function() {
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
        }
    });
});
