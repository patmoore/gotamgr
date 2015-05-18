
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
        'characterName',
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
                    processUnlockables(this.disruptorBeamData),
                    processStat(this.disruptorBeamData)
                );
                this.characterName = _.deep(this.disruptorBeamData, 'strings.title_and_name');
            }
        },
        '_' : {
            enumerable:false,
            defaultValue: function() {
                console.log("created a empty object");
                return {};
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
    var inventory = DisruptorBeamInventorySlot.createKeyedMap(function() {
        return {};
    });
    inventory.by = {};
    var buildings = inventory[DisruptorBeamInventorySlot.building];
    var byIds = inventory.by.ids = {};
    inventory.by.permanence = [[],[]];
    var nonPermanentItems = inventory.by.permanence[0];
    var permanentItems = inventory.by.permanence[1];
    var swornSwordsBySkillSpecialization = SkillSpecialization.createKeyedMap(function() {
        return Rarity.createKeyedMap();
    });
    _.each(disruptorBeamData.inventory, function(inventoryItem){
        byIds[inventoryItem.id] = inventoryItem;
        if ( inventoryItem.permanent_item === false) {
            // track items lost on reincarnation
            nonPermanentItems.push(inventoryItem);
        } else {
            permanentItems.push(inventoryItem);
        }
        var disruptorBeamInventorySlot = DisruptorBeamInventorySlotfindBySlot(inventoryItem.slot);
        inventory[disruptorBeamInventorySlot][inventoryItem.id] =inventoryItem;
        //debugger;
        switch(disruptorBeamInventorySlot) {
        case DisruptorBeamInventorySlot.armor:
            break;
        case DisruptorBeamInventorySlot.boon:
            break;
        case DisruptorBeamInventorySlot.building:
            // such as 'counting_house' -- used when handling the building Upgrades.
            buildings[inventoryItem.symbol] = inventoryItem;
            inventoryItem.upgrades = [];
            break;
        case DisruptorBeamInventorySlot.character:
            break;
        case DisruptorBeamInventorySlot.companion:
            break;
        case DisruptorBeamInventorySlot.consumable:
            break;
        case DisruptorBeamInventorySlot.seal:
            // archetype_id is the number in the seal slot
            // these are seals that have not been applied.
            break;
        case DisruptorBeamInventorySlot.ssword:
            var skillSpecialization = SkillSpecialization.byDisrBeamCode(inventoryItem.modifier);
            var rarity = Rarity.byDisrBeamCode(inventoryItem.rarity);
            swornSwordsBySkillSpecialization[skillSpecialization][rarity].push(inventoryItem);
            // upgrade_points ( can be trained )
            // hand_item_id,
            break;
        case DisruptorBeamInventorySlot.treasure:
            break;
        case DisruptorBeamInventorySlot.unit:
            break;
        case DisruptorBeamInventorySlot.upgrade:
            buildings[inventoryItem.category].upgrades.push(inventoryItem);
            break;
        case DisruptorBeamInventorySlot.weapon:
            break;
        }
    });
    debugger;
    _.each(swornSwordsBySkillSpecialization, function(bySkillSpecialization, key) {
        var skillSpecialization = SkillSpecialization.enumOf(key);
        _.each(bySkillSpecialization, function(byRarity, key) {
            var rarity = Rarity.enumOf(key);
            console.log(skillSpecialization.displayName, rarity.displayName, "sworn sword", byRarity.length);
        });
    });
    return inventory;
}

var processStat = function(disruptorBeamData){
    'use strict';
    var stats = {
        loreBook: [],
        unclaimedRewards: [],
    };
    _.each(disruptorBeamData.stat, function(value, key) {
        var rewardInfo = key.match(/chapter_([0-9])_([0-9])_reward_(.*)/);
        var disruptorBeamBadKey = key.match(/^#{@/);
        if ( rewardInfo) {
            var rewardVolume = Number(rewardInfo[1]);
            var rewardChapter = Number(rewardInfo[2]);
            var reward = rewardInfo[3];
            console.log('vol=',rewardVolume, 'ch=', rewardChapter, 'reward=', reward, 'value=', value);
            // because volumes and chapters start at '1'
            rewardVolume--;
            rewardChapter--;
            if (stats.loreBook[rewardVolume] == null) {
                stats.loreBook[rewardVolume] = [];
            }
            var loreBookChapter = stats.loreBook[rewardVolume];
            if ( reward == 'bonus' ) {

            } else if ( reward != 'chose' ) {
                loreBookChapter[rewardChapter] = reward;
                _.deep(stats.unclaimed, rewardVolume+'.'+rewardChapter, null);
            } else {
                _.deep(stats.unclaimed, rewardVolume+'.'+rewardChapter, reward);
            }
            debugger;
        } else if ( disruptorBeamBadKey ) {
            // disruptor beam has a bug in their output because this is really 'buildings_upgrades_added'
            console.log("bad key removing:", key, value);
            delete disruptorBeamData.stat[key];
        }
    });
    console.log(JSON.stringify(stats));
    debugger;
    return stats;
}