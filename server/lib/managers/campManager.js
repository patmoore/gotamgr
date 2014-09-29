Meteor.startup(function(){
    _.extend(CampManagerType.prototype, {
        /* called only via Alliance Manager */
        _buildCamp: function(allianceId, campData) {
            var campLocation = campData.campLocation;
            var camp = Camp.prototype.upsertFromUntrusted(campData,
                {
                    allianceId:allianceId,
                    campLocation: campLocation.dbCode
                },
                {
                    forcedValues:{
                        allianceId:allianceId
                    }
                }
            );
            return camp;
        },
        updateCampInformationMethod: function(campInformation) {
            var thatManager = this.thatManager;
            var camp = thatManager._securityCheckOnCamp(this.userId, campInformation);
            var camp = Camp.databaseTable.findOneById(campInformation.id);
            camp.upsertFromUntrusted(campInformation);
            return camp;
        },
        deleteCampMethod: function(campInformation) {
            var thatManager = this.thatManager;
            var camp = thatManager._securityCheckOnCamp(this.userId, campInformation);
            Camp.databaseTable.remove({_id:camp.id});
        },
        _securityCheckOnCamp: function(userId, campInformation) {
            var player = PlayerManager.findOneCurrentPlayer(userId);
            var camp = Camp.databaseTable.findOneById(campInformation.id);
            if (camp.allianceId !== player.allianceId) {
                throw new Meteor.Error(403, "Player not in correct alliance for camp");
            } else if (!player.allianceOfficer) {
                throw new Meteor.Error(403, "Player not alliance officer");
            }
            return camp;
        }
    });
});
