Player = DbObjectType.create({
    typeName: 'player',
    properties: [
        {'userId': {reference: true}},
        'characterFirstName',
        'characterLastName',
        'facebookName',
        'characterLevel',
        // active inventory plan.
        'currentInventoryId',

        'allianceId',
        {
            allianceRole: {
                jsonHelper: 'AllianceRole'
            }
        },
        // HACK: we don't want to have the invite code here.
        // but sort of a security code to make sure that player is still invited.
        'allianceInviteCode',
        // buildPlan Ids
        'buildPlanIds',
        'buildings',
        // key: { permanentCount: , currentCount: }
        'talentPoints',
        'abilities',
        'notes'
    ],
    databaseTableName: 'player',
    extensions: {
        /**
         * calculate discounts.
         * @param ownable
         * @param buildTime
         * @returns {*}
         */
        getBuildSilverDiscount: function (storable, buildTime) {
            return this.getBuildDiscount('silver', storable, buildTime);
        },
        getBuildTimeDiscount: function (storable, buildTime) {
            return this.getBuildDiscount('seconds', storable, buildTime);
        },
        getBuildDiscount: function (dbCodeToDiscount, storable, totalDiscountPercentage) {
            'use strict';
            var self = this;
            var totalDiscountPercentage = 0;
            var skillGeneral = storable.skillGeneral;
            var skillSpecialization = storable.skillSpecialization;
            var directDiscount = storable;
            _.each([directDiscount, skillSpecialization, skillGeneral], function (discount) {
                if (discount) {
                    var dbCode = discount.dbCode;
                    var discountPercentage = self.discounts[dbCodeToDiscount][dbCode];
                    if (typeof discountPercentage === 'number') {
                        totalDiscountPercentage += discountPercentage;
                    }
                }
            });
            // 70% is maximum discount.
            return totalDiscountPercentage > 70?70:totalDiscountPercentage;
        },
    },
    privateProperties: {
        allianceOfficer: {
            'get': function () {
                return this.allianceRole && this.allianceRole.isOfficer()
            },
            'set': function () {
                this.allianceRole = AllianceRole.officer;
            }

        },
        allianceLeader: {
            'get': function () {
                return this.allianceRole && this.allianceRole.isLeader()
            },
            'set': function () {
                this.allianceRole = AllianceRole.leader;
            }
        },
        displayName: {
            'get': function () {
                return this.characterFirstName + ' ' + this.characterLastName;
            }
        },
        commandPoints: {
            'get': function () {
                return 5 + (this.characterLevel > 0 ? this.characterLevel / 5 : 0) + this.extraCommandPoints;
            }
        },
        extraCommandPoints: {
            'get': function() {
                var extraCommandPoints = _.deep(this, 'abilities.extraCommandPoints');
                if ( extraCommandPoints >= 0 && extraCommandPoints < 10) {
                    return extraCommandPoints;
                } else {
                    return 0;
                }
            },
            'set': function(extraCommandPoints) {
                if ( extraCommandPoints >= 0 && extraCommandPoints < 10) {
                    _.deep(this, 'abilities.extraCommandPoints', extraCommandPoints);
                } else {
                    _.deep(this, 'abilities.extraCommandPoints', 0);
                }
            }
        }
    }
});
