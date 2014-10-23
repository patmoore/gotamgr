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

/**
 * define each alliance's van.
 * @type {*}
 */
Camp = DbObjectType.createSubClass('camp',
    [
        'displayName',
        {
            allianceId: {reference: true},
            campLocation: {
                jsonHelper: CampLocation
            },
            skillSpecialization: {
                jsonHelper: 'SkillSpecialization'
            },
            currentLevel: {
                type: Number,
                min: 0,
                max: 20
            }
        },
        'markedCompletedAt',
        // HH:MM - manual set
        'upgradeTime',
        'nextLevelTime',
        // array of 21:
        'storableNeeds',
        // visible only to officers
        'officerOnlyNotes',
        // visible to all alliance members
        'allianceNotes',

        'priority',
        // Garrison flag is used to mark camps that are left open for farming purposes.
        {
            garrison : {
                type: Boolean
            }
        }
    ],
    'camp',
    null,
    {
        totalByStorable: {
            'get': function () {
                var totalled = {};
                for (var level = this.currentLevel; level < 21; level++) {
                    _.each(this.storableNeeds[level], function (quantity, storableDbCode) {
                        totalled[storableDbCode] = (totalled[storableDbCode] || 0) + quantity;
                    });
                }
                return totalled;
            }
        }
    }
);
