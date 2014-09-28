Meteor.startup(function(){
    _.extend(CampManagerType.prototype, {
        /* called only via Alliance Manager */
        _buildCamp: function(allianceId, campData) {
            var campLocation = campData.campLocation;
            var camp = Camp.prototype.upsertFromUntrusted(campData,
                {
                    allianceId:allianceId,
                    campLocation: campLocation
                },
                {
                    allianceId:allianceId
                }
            );
            return camp;
        },
        updateCampInformationMethod: function(campInformation) {
            var player = PlayerManager.findOneCurrentPlayer(this.userId);
            var camp = Camp.databaseTable.findOneById(campInformation.id);
            if ( camp.allianceId !== player.allianceId ) {
                throw new Meteor.Error(403, "Player not in correct alliance for camp");
            } else if ( ! player.allianceOfficer ) {
                throw new Meteor.Error(403, "Player not alliance officer");
            } else {
                camp.upsertFromUntrusted(campInformation);
                return camp;
            }
        }
    });
});
