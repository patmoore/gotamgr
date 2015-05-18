SkillGeneral = new Enums.Enum({
    typeName: 'SkillGeneral',
    defs: {
        Battle: {
            displayName: 'Battle',
            dbCode: 'battle',
            disrBeamCode: 'battle'
        },
        Trade: {
            displayName: 'Trade',
            dbCode: 'trade',
            disrBeamCode: 'trade'
        },
        Intrigue: {
            displayName: 'Intrigue',
            dbCode: 'intrigue',
            disrBeamCode: 'intrigue'
        },
        None: {
            displayName: 'None',
            dbCode: 'none',
            disrBeamCode: ''
        }
    },
    properties: {
        byDisrBeamCode: {
            value: function (disrBeamCode) {
                var result;
                _.each(SkillGeneral.symbols(), function(symbol) {
                    if ( symbol.disrBeamCode == disrBeamCode) {
                        result = symbol;
                    }
                });
                return result;
            }
        },
        ifSelectedChoices: {
            value: function() {
                return [
                    this.Battle,
                    this.Trade,
                    this.Intrigue
                ];
            }
        }
    }
});

/**
 * disrBeamCode: on swornswords this is the 'modifier field
 * @type {exports.Enum}
 */
SkillSpecialization = new Enums.Enum({
    typeName: "skillSpecialization",
    defs: {
        Fight: {
            displayName: 'Fight',
            skillGeneral: SkillGeneral.Battle,
            dbCode: 'fight',
            disrBeamCode: 'fight'
        },
        Harass: {
            displayName: 'Harass',
            skillGeneral: SkillGeneral.Battle,
            dbCode: 'harass',
            disrBeamCode: 'harass'
        },
        Aid: {
            displayName: 'Aid',
            skillGeneral: SkillGeneral.Battle,
            dbCode: 'aid',
            disrBeamCode: 'aid'
        },

        Barter: {
            displayName: 'Barter',
            skillGeneral: SkillGeneral.Trade,
            dbCode: 'barter',
            disrBeamCode: 'barter'
        },
        Swindle: {
            displayName: 'Swindle',
            skillGeneral: SkillGeneral.Trade,
            dbCode: 'hoodwink',
            disrBeamCode: 'hoodwink',
            characterDisplayName: 'Charlatan'
        },
        Bribe: {
            displayName: 'Bribe',
            skillGeneral: SkillGeneral.Trade,
            disrBeamCode: 'bribe',
            dbCode: 'bribe'
        },

        Spy: {
            displayName: 'Spy',
            skillGeneral: SkillGeneral.Intrigue,
            dbCode: 'spy',
            disrBeamCode: 'spy'
        },
        Sabotage: {
            displayName: 'Sabotage',
            skillGeneral: SkillGeneral.Intrigue,
            dbCode: 'sabotage',
            disrBeamCode: 'sabotage'
        },
        Steal: {
            displayName: 'Steal',
            skillGeneral: SkillGeneral.Intrigue,
            dbCode: 'steal',
            disrBeamCode: 'steal',
            characterDisplayName: 'Thief'
        },
        None: {
            displayName: 'No Specialization',
            skillGeneral: SkillGeneral.None,
            dbCode: 'none',
            // blank modifier on sworn swords :-)
            disrBeamCode: '',
            characterDisplayName: ''
        }
    },
    properties: {
        byDisrBeamCode: {
            value: function (disrBeamCode) {
                var result;
                _.each(SkillSpecialization.symbols(), function(symbol) {
                    if ( symbol.disrBeamCode == disrBeamCode) {
                        result = symbol;
                    }
                });
                return result;
            }
        },
        properties: {
            ifSelectedChoices: {
                value: function() {
                    return [
                        this.Fight,
                        this.Harass,
                        this.Aid,
                        this.Barter,
                        this.Swindle,
                        this.Bribe,
                        this.Spy,
                        this.Sabotage,
                        this.Steal
                    ];
                }
            }
        }
    }
});