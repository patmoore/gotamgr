
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
        updateCampInformation:{
            method: function(campInformation, lookup) {
                check(campInformation, Object);
                check(campInformation.id, String);
                debugger;
                var thatManager = this.thatManager;
                Camp.upsertFromUntrusted(campInformation, lookup);
                return camp;
            },
            permissionCheck: function(callInfo) {
                var userId = callInfo.userId;
                var player = PlayerManager.findOneCurrentPlayer(userId);
                callInfo.args.push({
                    _id: callInfo.args[0].id,
                    allianceId: player.allianceId
                });
                return true;
            }
        },
        deleteCamp: {
            method: function(campId, lookup) {
                check(campId, String);
                debugger;
                var thatManager = this.thatManager;
                Camp.databaseTable.remove(lookup);
            },
            permissionCheck: function(callInfo) {
                var userId = callInfo.userId;
                var player = PlayerManager.findOneCurrentPlayer(userId);
                callInfo.args.push({
                    _id: callInfo.args[0],
                    allianceId: player.allianceId
                });
                return true;
            }
        },
    });
});
