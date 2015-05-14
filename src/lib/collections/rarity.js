/**
 *
 * @type {exports.Enum}
 */
Rarity = new Enums.Enum({
    typeName: 'rarity',
    defs: {
        Peerless: {
            dbCode: 'peerless',
            disrBeamCode: 5
        },
        Legendary: {
            dbCode: 'legendary',
            disrBeamCode: 4
        },
        Rare: {
            dbCode: 'rare',
            disrBeamCode: 3
        },
        Uncommon: {
            dbCode: 'uncommon',
            disrBeamCode: 2
        },
        Common: {
            dbCode: 'common',
            disrBeamCode: 1
        }
    },
    properties: {
        byDisrBeamCode: {
            value: function (disrBeamCode) {
                var result;
                _.each(Rarity.symbols(), function(symbol) {
                    if ( symbol.disrBeamCode == disrBeamCode) {
                        result = symbol;
                    }
                });
                return result;
            }
        }
    }
})