/**
 * define each alliance's van.
 * @type {*}
 */
Camp = DbObjectType.createSubClass('camp',
    [
        {
            allianceId: {reference: true},
            campLocation: {
                toJSONValue: function() {
                    return CampLocation.toJSONValue.apply(this, arguments);
                },
                fromJSONValue: function() {
                    return CampLocation.fromJSONValue.apply(this, arguments);
                }
            },
            skillSpecialization: {
                toJSONValue: function() {
                    return SkillSpecialization.toJSONValue.apply(this, arguments);
                },
                fromJSONValue: function() {
                    return SkillSpecialization.fromJSONValue.apply(this, arguments);
                }
            }
        },
        'currentLevel',
        'markedCompletedAt',
        // HH:MM - manual set
        'upgradeTime',
        'nextLevelTime',
        // array of 20
        'buildableNeeds'
    ],
    'camp',
    null,
    {
        fromJSONValue: function (rawJSON) {
            debugger;
            DbObjectType.prototype.fromJSONValue.call(this, rawJSON);
            this.campRegion = CampRegion.enumOf(rawJSON.campRegion);
            this.skillSpecialization = SkillSpecialization.enumOf(rawJSON.skillSpecialization);
            return this;
        },
        toJSONValue: function () {
            debugger;
            var result = DbObjectType.prototype.toJSONValue.call(this);
            result.campRegion = this.campRegion.dbCode;
            result.skillSpecialization = this.skillSpecialization.dbCode;
            return result;
        }
    }
);
CampRegion = new Enums.Enum({
    IronIslands: {
        dbCode: 'ii',
        displayName: 'Iron Islands'
    },
    North: {
        dbCode: 'north',
        displayName: 'The North'
    },
    Westerlands: {
        dbCode: 'west',
        displayName: 'Westerlands'
    },
    Crownlands: {
        dbCode: 'crown',
        displayName: 'Crownlands'
    },
    Reach: {
        dbCode: 'reach',
        displayName: 'The Reach'
    },
    Stormlands: {
        dbCode: 'storm',
        displayName: 'Stormlands'
    },
    Riverlands: {
        dbCode: 'river',
        displayName: 'Riverlands'
    },
    Dorne: {
        dbCode: 'dorne',
        displayName: 'Dorne'
    },
});

CampLocation = new Enums.Enum({
    IronmansBay: {
        dbCode: 'ibay',
        displayName: "Ironman's Bay",
        campRegion: CampRegion.IronIslands
    },
    GreatWyk: {
        dbCode: 'wyk',
        displayName: 'Great Wyk',
        campRegion: CampRegion.IronIslands
    },
    Harlaw: {
        dbCode: 'harlaw',
        displayName: 'Harlaw',
        campRegion: CampRegion.IronIslands
    },

    // The North
    TheNeck: {
        dbCode: 'neck',
        displayName: 'The Neck',
        campRegion: CampRegion.North
    },
    TorrhensSquare: {
        dbCode: 'sq',
        displayName: "Torrhen's Square",
        campRegion: CampRegion.North
    },
    WhiteKnife: {
        dbCode: 'knife',
        displayName: "White Knife",
        campRegion: CampRegion.North
    },

    // Westerlands
    GoldenTooth: {
        dbCode:'tooth',
        displayName: 'Golden Tooth',
        campRegion: CampRegion.Westerlands
    },
    RiverRoad: {
        dbCode:'riverr',
        displayName: "River Road",
        campRegion: CampRegion.Westerlands
    },
    GoldRoad: {
        dbCode: 'goldr',
        displayName: "Gold Road",
        campRegion: CampRegion.Westerlands
    },

    // Stormlands
    Marches: {
        dbCode: 'march',
        displayName: 'Marches',
        campRegion: CampRegion.Stormlands
    },
    Summerhall: {
        dbCode: 'summer',
        displayName: "Summerhall",
        campRegion: CampRegion.Stormlands
    },
    CapeWrath: {
        dbCode: 'wrath',
        displayName: "Cape Wrath",
        campRegion: CampRegion.Stormlands
    },

    // Crownlands
    Kingswood: {
        dbCode: 'kings',
        displayName: 'Kingswood',
        campRegion: CampRegion.Crownlands
    },
    CrackclawPoint: {
        dbCode: 'point',
        displayName: "Crackclaw Point",
        campRegion: CampRegion.Crownlands
    },
    BlackwaterBay: {
        dbCode: 'bbay',
        displayName: "BlackwaterBay",
        campRegion: CampRegion.Crownlands
    },

    // Riverlands
    RedFork: {
        dbCode: 'redf',
        displayName: 'Red Fork',
        campRegion: CampRegion.Riverlands
    },
    BlueFork: {
        dbCode: 'bluef',
        displayName: "Blue Fork",
        campRegion: CampRegion.Riverlands
    },
    GreenFork: {
        dbCode: 'greenf',
        displayName: "Green Fork",
        campRegion: CampRegion.Riverlands
    },

    // TheReach
    Oldtown: {
        dbCode: 'old',
        displayName: 'Oldtown',
        campRegion: CampRegion.Reach
    },
    TheMander: {
        dbCode: 'mander',
        displayName: "The Mander",
        campRegion: CampRegion.Reach
    },
    OceanRoad: {
        dbCode: 'oceanr',
        displayName: "Ocean Road",
        campRegion: CampRegion.Reach
    },

    // Dorne
    DeepSands: {
        dbCode: 'deep',
        displayName: 'Deep Sands',
        campRegion: CampRegion.Dorne
    },
    GreenBlood: {
        dbCode: 'greenb',
        displayName: "Green Blood",
        campRegion: CampRegion.Dorne
    },
    RedMountains: {
        dbCode: 'redmtn',
        displayName: "Red Mountains",
        campRegion: CampRegion.Dorne
    },
});
