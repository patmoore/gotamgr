/**
 * define each alliance's van.
 * @type {*}
 */
Camp = DbObjectType.createSubClass('camp',
    [
        {
            allianceId: {reference: true},
        },
        'campRegion',
        'skillSpecialization',
        'currentLevel',
        'markedCompletedAt',
        // HH:MM - manual set
        'upgradeTime',
        'nextLevelTime',
        // array of 20
        'buildableNeeds'
    ],
    'camp');
Camp.prototype.fromJSONValue = function(rawJSON) {
    DbObjectType.prototype.fromJSONValue.call(this, rawJSON);
    this.campRegion = CampRegion.enumOf(rawJSON.campRegion);
    this.skillSpecialization = SkillSpecialization.enumOf(rawJSON.skillSpecialization);
    return this;
}
Camp.prototype.toJSONValue = function() {
    var result = DbObjectType.prototype.toJSONValue.call(this);
    result.campRegion = this.campRegion.dbCode;
    result.skillSpecialization = this.skillSpecialization.dbCode;
    return result;
}

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
        region: CampRegion.IronIslands
    },
    GreatWyk: {
        dbCode: 'wyk',
        displayName: 'Great Wyk',
        region: CampRegion.IronIslands
    },
    Harlaw: {
        dbCode: 'harlaw',
        displayName: 'Harlaw',
        region: CampRegion.IronIslands
    },

    // The North
    TheNeck: {
        dbCode: 'neck',
        displayName: 'The Neck',
        region: CampRegion.North
    },
    TorrhensSquare: {
        dbCode: 'sq',
        displayName: "Torrhen's Square",
        region: CampRegion.North
    },
    WhiteKnife: {
        dbCode: 'knife',
        displayName: "White Knife",
        region: CampRegion.North
    },

    // Westerlands
    GoldenTooth: {
        dbCode:'tooth',
        displayName: 'Golden Tooth',
        region: CampRegion.Westerlands
    },
    RiverRoad: {
        dbCode:'riverr',
        displayName: "River Road",
        region: CampRegion.Westerlands
    },
    GoldRoad: {
        dbCode: 'goldr',
        displayName: "Gold Road",
        region: CampRegion.Westerlands
    },

    // Stormlands
    Marches: {
        dbCode: 'march',
        displayName: 'Marches',
        region: CampRegion.Stormlands
    },
    Summerhall: {
        dbCode: 'summer',
        displayName: "Summerhall",
        region: CampRegion.Stormlands
    },
    CapeWrath: {
        dbCode: 'wrath',
        displayName: "Cape Wrath",
        region: CampRegion.Stormlands
    },

    // Crownlands
    Kingswood: {
        dbCode: 'kings',
        displayName: 'Kingswood',
        region: CampRegion.Crownlands
    },
    CrackclawPoint: {
        dbCode: 'point',
        displayName: "Crackclaw Point",
        region: CampRegion.Crownlands
    },
    BlackwaterBay: {
        dbCode: 'bbay',
        displayName: "BlackwaterBay",
        region: CampRegion.Crownlands
    },

    // Riverlands
    RedFork: {
        dbCode: 'redf',
        displayName: 'Red Fork',
        region: CampRegion.Riverlands
    },
    BlueFork: {
        dbCode: 'bluef',
        displayName: "Blue Fork",
        region: CampRegion.Riverlands
    },
    GreenFork: {
        dbCode: 'greenf',
        displayName: "Green Fork",
        region: CampRegion.Riverlands
    },

    // TheReach
    Oldtown: {
        dbCode: 'old',
        displayName: 'Oldtown',
        region: CampRegion.Reach
    },
    TheMander: {
        dbCode: 'mander',
        displayName: "The Mander",
        region: CampRegion.Reach
    },
    OceanRoad: {
        dbCode: 'oceanr',
        displayName: "Ocean Road",
        region: CampRegion.Reach
    },

    // Dorne
    DeepSands: {
        dbCode: 'deep',
        displayName: 'Deep Sands',
        region: CampRegion.Dorne
    },
    GreenBlood: {
        dbCode: 'greenb',
        displayName: "Green Blood",
        region: CampRegion.Dorne
    },
    RedMountains: {
        dbCode: 'redmtn',
        displayName: "Red Mountains",
        region: CampRegion.Dorne
    },
});
