Player = DbObjectType.create({
    typeName: 'player',
    properties: [
        {'userId': {reference: true}},
        'characterFirstName',
        'characterLastName',
        'firstName',
        'lastName',
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
        'abilities'
    ],
    databaseTableName: 'player',
    extensions: {
        /**
         * calculate discounts.
         * @param ownable
         * @param buildTime
         * @returns {*}
         */
        getActualBuildTime: function (storable, buildTime) {
            var that = this;
            var actualBuildTime = buildTime;
            var skillGeneral = storable.skillGeneral;
            var skillSpecialization = storable.skillSpecialization;
            var directDiscount = storable;
            _.each([directDiscount, skillSpecialization, skillGeneral], function (discount) {
                if (discount) {
                    var dbCode = discount.dbCode;
                    var discountPercentage = that.discounts.seconds[dbCode];
                    if (typeof discountPercentage === 'number') {
                        actualBuildTime *= discountPercentage;
                    }
                }
            })
            return actualBuildTime;
        }
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
        }
    }
});
