
Meteor.startup(function(){
    _.extend(CampManagerType.prototype, {
        buildCamp: {
            method: function (campData, allianceId) {
                var campLocation = campData.campLocation;

                var camp = Camp.prototype.upsertFromUntrusted(campData,
                    {
                        allianceId: allianceId,
                        campLocation: campLocation.dbCode
                    },
                    {
                        forcedValues: {
                            allianceId: allianceId
                        }
                    }
                );
                return camp;
            },
            permissionCheck: function(callInfo) {

                var player = PlayerManager.findOneCurrentPlayer();
                if (player != null) {
                    var allianceId = player.allianceId;
                    callInfo.args.push(allianceId);
                }
            }
        },
        updateCampInformation:{
            method: function(campInformation) {
                var thatManager = this.thatManager;
                var camp = Camp.databaseTable.findOne({_id:campInformation.id});
                debugger;

                // make a copy of the camp storable needs ( so that an alliance can adjust as needed the requirements )
                if( campInformation.skillSpecialization != camp.skillSpecialization) {
                    var skillGeneralDbCode = campInformation.skillSpecialization.skillGeneral.dbCode;
                    campInformation.storableNeeds = EJSON.parse(EJSON.stringify(CampStorable[skillGeneralDbCode]));
                }
                camp.upsertFromUntrusted({clientObj:campInformation});
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
