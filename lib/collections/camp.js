/**
 * define each alliance's van.
 * @type {*}
 */
Camp = DbObjectType.createSubClass('camp',
    [
        {
            allianceId: {reference: true},
        },
        'campLocation',
        'campType',
        'currentLevel',
        'markedCompletedAt',
        // HH:MM - manual set
        'upgradeTime',
        'nextLevelTime',
        // array of 20
        'buildableNeeds'
    ],
    'camp');


CampRegion = new Enums.Enum({
    IronIslands: {
        displayName: 'Iron Islands'
    },
    North: {
        displayName: 'The North'
    },
    Westerlands: {
        displayName: 'Westerlands'
    },
    Crownlands: {
        displayName: 'Crownlands'
    },
    Reach: {
        displayName: 'The Reach'
    },
    Stormlands: {
        displayName: 'Stormlands'
    },
    Riverlands: {
        displayName: 'Riverlands'
    },
    Dorne: {
        displayName: 'Dorne'
    },
});

CampLocation = new Enums.Enum({
    IronmansBay: {
        displayName: "Ironman's Bay",
        region: CampRegion.IronIslands
    },
    GreatWyk: {
        displayName: 'Great Wyk',
        region: CampRegion.IronIslands
    },
    Harlaw: {
        displayName: 'Harlaw',
        region: CampRegion.IronIslands
    },

    // The North
    TheNeck: {
        displayName: 'The Neck',
        region: CampRegion.North
    },
    TorrhensSquare: {
        displayName: "Torrhen's Square",
        region: CampRegion.North
    },
    WhiteKnife: {
        displayName: "White Knife",
        region: CampRegion.North
    },

    // Westerlands
    GoldenTooth: {
        displayName: 'Golden Tooth',
        region: CampRegion.Westerlands
    },
    RiverRoad: {
        displayName: "River Road",
        region: CampRegion.Westerlands
    },
    GoldRoad: {
        displayName: "Gold Road",
        region: CampRegion.Westerlands
    },

    // Stormlands
    Marches: {
        displayName: 'Marches',
        region: CampRegion.Stormlands
    },
    Summerhall: {
        displayName: "Summerhall",
        region: CampRegion.Stormlands
    },
    CapeWrath: {
        displayName: "Cape Wrath",
        region: CampRegion.Stormlands
    },

    // Crownlands
    Kingswood: {
        displayName: 'Kingswood',
        region: CampRegion.Crownlands
    },
    CrackclawPoint: {
        displayName: "Crackclaw Point",
        region: CampRegion.Crownlands
    },
    BlackwaterBay: {
        displayName: "BlackwaterBay",
        region: CampRegion.Crownlands
    },

    // Riverlands
    RedFork: {
        displayName: 'Red Fork',
        region: CampRegion.Riverlands
    },
    BlueFork: {
        displayName: "Blue Fork",
        region: CampRegion.Riverlands
    },
    GreenFork: {
        displayName: "Green Fork",
        region: CampRegion.Riverlands
    },

    // TheReach
    Oldtown: {
        displayName: 'Oldtown',
        region: CampRegion.Reach
    },
    TheMander: {
        displayName: "The Mander",
        region: CampRegion.Reach
    },
    OceanRoad: {
        displayName: "Ocean Road",
        region: CampRegion.Reach
    },

    // Dorne
    DeepSands: {
        displayName: 'Deep Sands',
        region: CampRegion.Dorne
    },
    GreenBlood: {
        displayName: "Green Blood",
        region: CampRegion.Dorne
    },
    RedMountains: {
        displayName: "Red Mountains",
        region: CampRegion.Dorne
    },
});
