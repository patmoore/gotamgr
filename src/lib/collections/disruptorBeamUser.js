
// note: no leading 'unlockable'
var UNLOCKABLE_TITLE = /^(.*)_title$/;

var UNLOCKABLE_TALENT = /^unlockable_(.*)_talent$|^unlockable_(adv_batch_boon_all)$/;
/*
need to strip off optional _upgrade
need non-greedy matcher
 "unlockable_mangonel_upgrade".match(UNLOCKABLE_UPGRADE)
 ["unlockable_mangonel_upgrade", "mangonel_upgrade", undefined]
 */
var UNLOCKABLE_UPGRADE = /^unlockable_(.*?)(_upgrade)?$/;
/**
 * Properties defined by results from playerdata:
 * http://gota-www.disruptorbeam.com/play/player_data/
 *
 * disruptorBeamData:
 *
 * unlockables: [
 *   { "id": 572680, "user_id": 2245605,"symbol": "unlockable_brewhouse", "created_at": "2013-12-03 18:31:10 UTC"},
 *   {"id": 586559,"user_id": 2245605,"symbol": "unlockable_jewelled_sword_upgrade","created_at": "2013-12-11 07:43:03 UTC"
 * },
 * @type {*}
 */
DisruptorBeamUser = DbObjectType.create({
    typeName: 'disruptorBeamUser',
    databaseTableName: 'disruptorBeamUser',
    properties: [
        'userId',
        'playerId',
        'disruptorBeamData',
        {
            'titles': {
                'get': function() {
                    return this._?Object.keys(this._.titles):null;
                }
            },
            'talents': {
                'get': function() {
                    return this._?Object.keys(this._.talents):null;
                }
            },
            'buildingUpgrades': {
                'get': function() {
                    return this._?Object.keys(this._.buildingUpgrades):null;
                }
            }
        }
    ],
    extensions: {
        ctor: function() {
            if ( arguments[0] && arguments[0].playerData) {
                this.playerData = arguments[0].playerData;
            }
        }
    },
    privateProperties: {
        playerData: {
            'get': function () {
                return this.disruptorBeamData;
            },
            'set': function (value) {
                debugger;
                this.disruptorBeamData = value;
                this._= _.extend({},
                    processInventory(this.disruptorBeamData),
                    processUnlockables(this.disruptorBeamData)
                );
            }
        }
    }
});

var processUnlockables = function(disruptorBeamData) {
    // process unlockables
    // Note: that some titles end up duplicated ( 'duelist' - which can be earned every RI )
    var titles = {};
    var talents = {};
    var buildingUpgrades = {};
    _.each(disruptorBeamData.unlockables, function (unlockable) {
        var match = unlockable.symbol.match(UNLOCKABLE_TITLE);
        if (match) {
            titles[match[1]] = unlockable.created_at;
        } else if (match = unlockable.symbol.match(UNLOCKABLE_TALENT)) {
            for (var i = 1; i < match.length; i++) {
                if (match[i]) {
                    talents[match[i]] = unlockable.created_at;
                    break;
                }
            }
        } else if (match = unlockable.symbol.match(UNLOCKABLE_UPGRADE)) {
            for (var i = 1; i < match.length; i++) {
                if (match[i]) {
                    buildingUpgrades[match[i]] = unlockable.created_at;
                    break;
                }
            }
        } else {
            console.error("No match for ", unlockable.symbol);
        }
    });
    return {
        talents: talents,
        titles: titles,
        buildingUpgrades: buildingUpgrades
    };
}

var processInventory = function(disruptorBeamData) {
    var swornSwords = {};
    var buildings = {};
    var byIds = {};
    var nonPermanentItems = [];
    _.each(disruptorBeamData.inventory, function(inventoryItem){
        byIds[inventoryItem.id] = inventoryItem;
        if ( inventoryItem.permanent_item === false) {
            // track items lost on reincarnation
            nonPermanentItems.push(inventoryItem);
        }
        switch(inventoryItem.slot) {
        case "Armor":
            break;
        case "Boon":
            break;
        case "Building":
            buildings[inventoryItem.symbol] = [inventoryItem];
            break;
        case "Character":
            break;
        case "Companion":
            break;
        case "Consumable":
            break;
        case "Seal":
            debugger;
            // archetype_id is the number in the seal slot
            // these are seals that have not been applied.
            break;
        case "Sworn Sword":
            // upgrade_points ( can be trained )
            // hand_item_id,
            debugger;
            break;
        case "Treasure":
            debugger;
            break;
        case "Unit":
            debugger;
            break;
        case "Upgrade":
            buildings[inventoryItem.category].push(inventoryItem);
            break;
        case "Weapon":
            debugger;
            break;
        }
    });
    return {
        buildings: buildings,
        swornSwords: swornSwords
    }
}