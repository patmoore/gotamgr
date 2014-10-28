
Meteor.startup(function(){
    'use strict';
    var allianceOfficerPermissionCheck = function(callInfo) {
        var player = PlayerManager.findOneCurrentPlayer();
        if (player != null && player.allianceOfficer) {
            var allianceId = player.allianceId;
            callInfo.args.push(allianceId);
            return true;
        } else {
            return false;
        }
    };
    _.extend(CampManagerType.prototype, {
        buildCamp: {
            method: function (campData, allianceId) {
                debugger;
                var campLocation = campData.campLocation;

                var camp = Camp.prototype.upsertFromUntrusted(
                    {
                        clientObj:campData,
                        lookup: {
                            allianceId: allianceId,
                            campLocation: campLocation.dbCode
                        },
                        forcedValues: {
                            allianceId: allianceId
                        }
                    }
                );
                return camp;
            },
            permissionCheck: allianceOfficerPermissionCheck
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
                for(var i = 0; i < campInformation.storableNeeds.length; i++) {
                    if ( campInformation.storableNeeds[i] == null) {
                        campInformation.storableNeeds[i] = camp.storableNeeds[i];
                    }
                }
                camp.upsertFromUntrusted({clientObj:campInformation});
                return camp;
            },
            permissionCheck: allianceOfficerPermissionCheck
        },
        deleteCamp: {
            method: function(campId, allianceId) {
                debugger;
                check(campId, String);
                var thatManager = this.thatManager;
                Camp.databaseTable.remove({_id:campId, allianceId: allianceId});
            },
            permissionCheck: allianceOfficerPermissionCheck
        },
    });
});
