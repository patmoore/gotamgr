DisruptorBeamInventorySlot = new Enums.Enum({
    typeName: 'dbInventorySlot',
    defs: {
        armor: {
            dbCode: "Armor",
            disrBeamCode: "Armor"
        },
        boon: {
            dbCode: "Boon",
            disrBeamCode: "Boon"
        },
        building: {
            dbCode: "Building",
            disrBeamCode: "Building"
        },
        character: {
            dbCode: "Character",
            disrBeamCode: "Character"
        },
        companion: {
            dbCode: "Companion",
            disrBeamCode: "Companion"
        },
        consumable: {
            dbCode: "Consumable",
            disrBeamCode: "Consumable"
        },
        seal: {
            dbCode: "Seal",
            disrBeamCode: "Seal"
        },
        ssword: {
            dbCode: "SSword",
            disrBeamCode: "Sworn Sword"
        },
        treasure: {
            dbCode: "Treasure",
            disrBeamCode: "Treasure"
        },
        unit: {
            dbCode: "Unit",
            disrBeamCode: "Unit"
        },
        upgrade: {
            dbCode: "Upgrade",
            disrBeamCode: "Upgrade"
        },
        weapon: {
            dbCode: "Weapon",
            disrBeamCode: "Weapon"
        }
    }
});

var byInventorySlot = {};
_.each(DisruptorBeamInventorySlot.symbols(), function(symbol) {
    byInventorySlot[symbol.disrBeamCode] = symbol;
});
DisruptorBeamInventorySlotfindBySlot = function(inventorySlot) {
    return byInventorySlot[inventorySlot];
}
