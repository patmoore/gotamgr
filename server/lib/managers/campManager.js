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
        }
    });
});
