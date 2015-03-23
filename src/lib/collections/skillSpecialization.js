SkillGeneral = new Enums.Enum({
    Battle: {
        dbCode: 'bat',
        displayName: 'Battle'
    },
    Trade: {
        dbCode: 'trd',
        displayName: 'Trade'
    },
    Intrigue: {
        dbCode: 'int',
        displayName: 'Intrigue'
    }
});

/**
 * disrBeamModifierCode: on swornswords this is the 'modifier field
 * @type {exports.Enum}
 */
SkillSpecialization = new Enums.Enum({
    Fight: {
        displayName: 'Fight',
        skillGeneral: SkillGeneral.Battle,
    },
    Harass: {
        displayName: 'Harass',
        skillGeneral: SkillGeneral.Battle,
    },
    Aid: {
        displayName: 'Aid',
        skillGeneral: SkillGeneral.Battle,
    },

    Barter: {
        displayName: 'Barter',
        skillGeneral: SkillGeneral.Trade,
    },
    Swindle: {
        displayName: 'Swindle',
        skillGeneral: SkillGeneral.Trade,
    },
    Bribe: {
        displayName: 'Bribe',
        skillGeneral: SkillGeneral.Trade,
        disrBeamModifierCode: 'bribe'
    },

    Spy: {
        displayName: 'Spy',
        skillGeneral: SkillGeneral.Intrigue,
    },
    Sabotage: {
        displayName: 'Sabotage',
        skillGeneral: SkillGeneral.Intrigue,
    },
    Steal: {
        displayName: 'Steal',
        skillGeneral: SkillGeneral.Intrigue,
    }
});