/**
 * [SkillGeneral][currentCampLevel
 * @type {{}}
 */
CampStorable = {};
StorablesByCamp = {};

Meteor.startup(function(){
    function organize(skillGeneral, currentCampLevel, storable, quantity) {
        var storableDbCode = storable.dbCode;
        var skillGeneralDbCode = skillGeneral.dbCode;
        CampStorable[skillGeneralDbCode][currentCampLevel][storableDbCode] = quantity;
        if ( !(storableDbCode in StorablesByCamp)) {
            StorablesByCamp[storableDbCode] = {};
        }
        if ( !(skillGeneralDbCode in StorablesByCamp[storableDbCode])) {
            StorablesByCamp[storableDbCode][skillGeneralDbCode] = [];
        }
        StorablesByCamp[storableDbCode][skillGeneralDbCode][currentCampLevel] = quantity;
    }
    // after startup so that Storables has been created.
    var battle = SkillGeneral.Battle;
    var trade = SkillGeneral.Trade;
    var intrigue = SkillGeneral.Intrigue;
    CampStorable[battle.dbCode] = [];
    CampStorable[trade.dbCode] = [];
    CampStorable[intrigue.dbCode] = [];
    // i = the current camp level ( i.e. 0 = not built)
    var i;
    for(i = 0; i < 21; i++) {
        CampStorable[battle.dbCode][i] = {};
        CampStorable[trade.dbCode][i] = {}
        CampStorable[intrigue.dbCode][i] = {};
        switch(i) {
        // TODO: collapse levels 0-2 : because needs the same regardless of camp type.
        case 0:
            //10m
            _.each(SkillGeneral.ifSelectedChoices(), function(skillGeneral) {
                organize(skillGeneral, i, Storables.silver, 0);
                organize(skillGeneral, i, Storables.cloth, 20);
                organize(skillGeneral, i, Storables.grains, 10);
                organize(skillGeneral, i, Storables.smallfolk, 10);
            });
            break;
        case 1:
            //1h
            _.each(SkillGeneral.ifSelectedChoices(), function(skillGeneral) {
                organize(skillGeneral, i, Storables.silver, 0);
                organize(skillGeneral, i, Storables.wood, 30);
                organize(skillGeneral, i, Storables.fur, 30);
                organize(skillGeneral, i, Storables.horse, 20);
            });
            break;

        case 2:
            //1h
            _.each(SkillGeneral.ifSelectedChoices(), function(skillGeneral) {
                organize(skillGeneral, i, Storables.silver, 0);
                organize(skillGeneral, i, Storables.stone, 40);
                organize(skillGeneral, i, Storables.ore, 40);
                organize(skillGeneral, i, Storables.fish, 30);
            });
            break;

        case 3:
            //2h
            // old needs:
//            organize(battle, i, Storables.silver, 70000);
//            organize(battle, i, Storables.dagger, 7);
//            organize(battle, i, Storables.shortbow, 7);
//            organize(battle, i, Storables.red_gem, 7);
//
//            organize(trade, i, Storables.silver, 70000);
//            organize(trade, i, Storables.leather_bound_book, 7);
//            organize(trade, i, Storables.silver_chain, 7);
//            organize(trade, i, Storables.red_gem, 7);
//
//            organize(intrigue, i, Storables.silver, 70000);
//            organize(intrigue, i, Storables.milk_of_the_poppy, 7);
//            organize(intrigue, i, Storables.fingerless_gloves, 7);
//            organize(intrigue, i, Storables.red_gem, 7);
            organize(battle, i, Storables.silver, 0);
            organize(battle, i, Storables.red_gem, 10);
            organize(battle, i, Storables.special_1, 6);
            organize(battle, i, Storables.special_2, 3);

            organize(trade, i, Storables.silver, 0);
            organize(trade, i, Storables.red_gem, 10);
            organize(trade, i, Storables.special_3, 6);
            organize(trade, i, Storables.special_4, 3);

            organize(intrigue, i, Storables.silver, 0);
            organize(intrigue, i, Storables.red_gem, 10);
            organize(intrigue, i, Storables.special_5, 6);
            organize(intrigue, i, Storables.special_6, 3);
            break;
        case 4:
            // 3h
//            organize(battle, i, Storables.silver, 10000);
//            organize(battle, i, Storables.militia, 30);
//            organize(battle, i, Storables.blue_gem, 10);
//            organize(battle, i, Storables.decorative_blade, 10);
//
//            organize(trade, i, Storables.silver, 100000);
//            organize(trade, i, Storables.trader, 50);
//            organize(trade, i, Storables.blue_gem, 6);
//            organize(trade, i, Storables.decorative_blade, 8);
//
//            organize(intrigue, i, Storables.silver, 10000);
//            organize(intrigue, i, Storables.eavesdropper, 1);
//            organize(intrigue, i, Storables.blue_gem, 1);
//            organize(intrigue, i, Storables.decorative_blade, 1);
            organize(battle, i, Storables.silver, 0);
            organize(battle, i, Storables.blue_gem, 10);
            organize(battle, i, Storables.special_1, 11);
            organize(battle, i, Storables.special_2, 5);

            organize(trade, i, Storables.silver, 0);
            organize(trade, i, Storables.blue_gem, 10);
            organize(trade, i, Storables.special_3, 11);
            organize(trade, i, Storables.special_4, 5);

            organize(intrigue, i, Storables.silver, 0);
            organize(intrigue, i, Storables.blue_gem, 10);
            organize(intrigue, i, Storables.special_5, 11);
            organize(intrigue, i, Storables.special_6, 5);
            break;
        case 5:
            //4h
//            organize(battle, i, Storables.silver, 1);
//            organize(battle, i, Storables.militia, 60);
//            organize(battle, i, Storables.wood_shield, 10);
//            organize(battle, i, Storables.halfhelm, 10);
//
//            organize(trade, i, Storables.silver, 100000);
//            organize(trade, i, Storables.trader, 100);
//            organize(trade, i, Storables.silver_torc, 17);
//            organize(trade, i, Storables.leather_bound_book, 17);
//
//            organize(intrigue, i, Storables.silver, 10000);
//            organize(intrigue, i, Storables.eavesdropper, 100);
//            organize(intrigue, i, Storables.fingerless_gloves, 1);
//            organize(intrigue, i, Storables.roughspun_cloak, 1);
            organize(battle, i, Storables.silver, 0);
            organize(battle, i, Storables.special_1, 12);
            organize(battle, i, Storables.special_2, 6);
            organize(battle, i, Storables.special_7, 3);

            organize(trade, i, Storables.silver, 0);
            organize(trade, i, Storables.special_3, 12);
            organize(trade, i, Storables.special_4, 6);
            organize(trade, i, Storables.special_7, 3);

            organize(intrigue, i, Storables.silver, 0);
            organize(intrigue, i, Storables.special_5, 12);
            organize(intrigue, i, Storables.special_6, 6);
            organize(intrigue, i, Storables.special_7, 3);
            break;
        case 6:
            //5h
//            organize(battle, i, Storables.silver, 1);
//            organize(battle, i, Storables.militia, 90);
//            organize(battle, i, Storables.shortbow, 15);
//            organize(battle, i, Storables.doublet, 1);
//
//            organize(trade, i, Storables.silver, 10000);
//            organize(trade, i, Storables.leather_bound_book, 25);
//            organize(trade, i, Storables.silver_torc, 25);
//            organize(trade, i, Storables.trader, 150);
//
//            organize(intrigue, i, Storables.silver, 10000);
//            organize(intrigue, i, Storables.eavesdropper, 90);
//            organize(intrigue, i, Storables.fingerless_gloves, 15);
//            organize(intrigue, i, Storables.linen_clothing, 15);
            organize(battle, i, Storables.silver, 0);
            organize(battle, i, Storables.special_1, 20);
            organize(battle, i, Storables.special_2, 10);
            organize(battle, i, Storables.special_8, 5);

            organize(trade, i, Storables.silver, 0);
            organize(trade, i, Storables.special_3, 20);
            organize(trade, i, Storables.special_4, 10);
            organize(trade, i, Storables.special_8, 5);

            organize(intrigue, i, Storables.silver, 0);
            organize(intrigue, i, Storables.special_5, 20);
            organize(intrigue, i, Storables.special_6, 10);
            organize(intrigue, i, Storables.special_8, 5);
            break;
        case 7:
            //6h
//            organize(battle, i, Storables.silver, 1);
//            organize(battle, i, Storables.ladder, 1);
//            organize(battle, i, Storables.halfhelm, 1);
//            organize(battle, i, Storables.doublet, 1);
//
//            organize(trade, i, Storables.silver, 10000);
//            organize(trade, i, Storables.silver_chain, 33);
//            organize(trade, i, Storables.trebuchet, 33);
//            organize(trade, i, Storables.parchment_scroll, 33);
//
//            organize(intrigue, i, Storables.silver, 10000);
//            organize(intrigue, i, Storables.turtle, 33);
//            organize(intrigue, i, Storables.roughspun_cloak, 33);
//            organize(intrigue, i, Storables.linen_clothing, 33);
            organize(battle, i, Storables.silver, 0);
            organize(battle, i, Storables.ladder, 20);
            organize(battle, i, Storables.special_2, 22);
            organize(battle, i, Storables.special_7, 10);

            organize(trade, i, Storables.silver, 0);
            organize(trade, i, Storables.trebuchet, 20);
            organize(trade, i, Storables.special_4, 22);
            organize(trade, i, Storables.special_7, 10);

            organize(intrigue, i, Storables.silver, 0);
            organize(intrigue, i, Storables.turtle, 20);
            organize(intrigue, i, Storables.special_6, 22);
            organize(intrigue, i, Storables.special_7, 10);
            break;
        case 8:
            //7h
//            organize(battle, i, Storables.silver, 1);
//            organize(battle, i, Storables.ladder, 1);
//            organize(battle, i, Storables.militia, 1);
//            organize(battle, i, Storables.red_gem, 1);
//
//            organize(trade, i, Storables.silver, 10000);
//            organize(trade, i, Storables.trader, 250);
//            organize(trade, i, Storables.trebuchet, 41);
//            organize(trade, i, Storables.red_gem, 28);
//
//            organize(intrigue, i, Storables.silver, 10000);
//            organize(intrigue, i, Storables.eavesdropper, 150);
//            organize(intrigue, i, Storables.turtle, 37);
//            organize(intrigue, i, Storables.red_gem, 37);
            organize(battle, i, Storables.silver, 0);
            organize(battle, i, Storables.ladder, 25);
            organize(battle, i, Storables.special_3, 30);
            organize(battle, i, Storables.special_8, 15);

            organize(trade, i, Storables.silver, 0);
            organize(trade, i, Storables.trebuchet, 25);
            organize(trade, i, Storables.special_5, 30);
            organize(trade, i, Storables.special_8, 15);

            organize(intrigue, i, Storables.silver, 0);
            organize(intrigue, i, Storables.turtle, 25);
            organize(intrigue, i, Storables.special_3, 30);
            organize(intrigue, i, Storables.special_8, 15);
            break;
        case 9:
            //8h
//            organize(battle, i, Storables.silver, 1);
//            organize(battle, i, Storables.ladder, 1);
//            organize(battle, i, Storables.dagger, 1);
//            organize(battle, i, Storables.shortbow, 1);
//
//            organize(trade, i, Storables.silver, 10000);
//            organize(trade, i, Storables.trebuchet, 50);
//            organize(trade, i, Storables.silver_torc, 50);
//            organize(trade, i, Storables.leather_bound_book, 50);
//
//            organize(intrigue, i, Storables.silver, 10000);
//            organize(intrigue, i, Storables.turtle, 30);
//            organize(intrigue, i, Storables.milk_of_the_poppy, 30);
//            organize(intrigue, i, Storables.fingerless_gloves, 30);
            organize(battle, i, Storables.ladder, 30);

            organize(trade, i, Storables.trebuchet, 25);

            organize(intrigue, i, Storables.turtle, 25);
            _.each(SkillGeneral.ifSelectedChoices(), function(skillGeneral) {
                organize(skillGeneral, i, Storables.silver, 0);
                organize(skillGeneral, i, Storables.special_7, 14);
                organize(skillGeneral, i, Storables.special_8, 22);
            });
            break;
        case 10:
            //9h
            organize(battle, i, Storables.silver, 10000);
            organize(battle, i, Storables.ram, 1);
            organize(battle, i, Storables.militia, 1);
            organize(battle, i, Storables.metal_shield, 1);

            organize(trade, i, Storables.silver, 10000);
            organize(trade, i, Storables.trader, 350);
            organize(trade, i, Storables.vellum_scroll, 19);
            organize(trade, i, Storables.catapult, 19);

            organize(intrigue, i, Storables.silver, 10000);
            organize(intrigue, i, Storables.scorpion, 1);
            organize(intrigue, i, Storables.eavesdropper, 1);
            organize(intrigue, i, Storables.satin_cloak, 1);
            break;
        case 11:
            //10h
            organize(battle, i, Storables.silver, 1);
            organize(battle, i, Storables.ram, 1);
            organize(battle, i, Storables.splint_armor, 1);
            organize(battle, i, Storables.barred_helm, 1);

            organize(trade, i, Storables.silver, 10000);
            organize(trade, i, Storables.merchant, 30);
            organize(trade, i, Storables.lockbox, 22);
            organize(trade, i, Storables.catapult, 22);

            organize(intrigue, i, Storables.silver, 10000);
            organize(intrigue, i, Storables.scorpion, 1);
            organize(intrigue, i, Storables.guards_uniform, 1);
            organize(intrigue, i, Storables.blindeye, 1);
            break;
        case 12:
            //11h
            organize(battle, i, Storables.silver, 1);
            organize(battle, i, Storables.ram, 1);
            organize(battle, i, Storables.bowman, 1);
            organize(battle, i, Storables.jerkin, 1);

            organize(trade, i, Storables.silver, 10000);
            organize(trade, i, Storables.catapult, 25);
            organize(trade, i, Storables.lockbox, 25);
            organize(trade, i, Storables.wagon, 30);

            organize(intrigue, i, Storables.silver, 10000);
            organize(intrigue, i, Storables.scorpion, 1);
            organize(intrigue, i, Storables.saboteur, 1);
            organize(intrigue, i, Storables.blindeye, 1);
            break;
        case 13:
            //12h
            organize(battle, i, Storables.silver, 1);
            organize(battle, i, Storables.ram, 1);
            organize(battle, i, Storables.broadsword, 1);
            organize(battle, i, Storables.metal_shield, 1);

            organize(trade, i, Storables.silver, 10000);
            organize(trade, i, Storables.catapult, 28);
            organize(trade, i, Storables.wagon, 32);
            organize(trade, i, Storables.gold_necklace, 28);

            organize(intrigue, i, Storables.silver, 10000);
            organize(intrigue, i, Storables.scorpion, 1);
            organize(intrigue, i, Storables.dreamwine, 1);
            organize(intrigue, i, Storables.satin_cloak, 1);
            break;
        case 14:
            //13h
            organize(battle, i, Storables.silver, 1);
            organize(battle, i, Storables.ram, 1);
            organize(battle, i, Storables.broadsword, 1);
            organize(battle, i, Storables.metal_shield, 1);

            organize(trade, i, Storables.silver, 10000);
            organize(trade, i, Storables.catapult, 39);
            organize(trade, i, Storables.wagon, 33);
            organize(trade, i, Storables.gold_necklace, 33);

            organize(intrigue, i, Storables.silver, 10000);
            organize(intrigue, i, Storables.scorpion, 1);
            organize(intrigue, i, Storables.dreamwine, 1);
            organize(intrigue, i, Storables.guards_uniform, 1);
            break;
        case 15:
            // 15h
            organize(battle, i, Storables.silver, 1);
            organize(battle, i, Storables.siege_tower, 1);
            organize(battle, i, Storables.composite_bow, 1);
            organize(battle, i, Storables.jerkin, 1);

            organize(trade, i, Storables.silver, 10000);
            organize(trade, i, Storables.wagon, 39);
            organize(trade, i, Storables.gold_necklace, 39);
            organize(trade, i, Storables.mangonel, 14);

            organize(intrigue, i, Storables.silver, 10000);
            organize(intrigue, i, Storables.spitfire, 14);
            organize(intrigue, i, Storables.dreamwine, 42);
            organize(intrigue, i, Storables.satin_cloak, 39);
            break;
        case 16:
            //17h
            organize(battle, i, Storables.silver, 1);
            organize(battle, i, Storables.siege_tower, 1);
            organize(battle, i, Storables.archer, 1);
            organize(battle, i, Storables.splint_armor, 1);

            organize(trade, i, Storables.silver, 10000);
            organize(trade, i, Storables.gold_necklace, 44);
            organize(trade, i, Storables.mangonel, 16);
            organize(trade, i, Storables.caravan, 18);

            organize(intrigue, i, Storables.silver, 10000);
            organize(intrigue, i, Storables.spitfire, 1);
            organize(intrigue, i, Storables.courtesan, 1);
            organize(intrigue, i, Storables.satin_cloak, 42);
            break;
        case 17:
            // 19h
            organize(battle, i, Storables.silver, 1);
            organize(battle, i, Storables.siege_tower, 1);
            organize(battle, i, Storables.archer, 1);
            organize(battle, i, Storables.jerkin, 1);

            organize(trade, i, Storables.silver, 10000);
            organize(trade, i, Storables.mangonel, 18);
            organize(trade, i, Storables.caravan, 18);
            organize(trade, i, Storables.lockbox, 50);

            organize(intrigue, i, Storables.silver, 10000);
            organize(intrigue, i, Storables.spitfire, 1);
            organize(intrigue, i, Storables.courtesan, 1);
            organize(intrigue, i, Storables.blindeye, 1);
            break;
        case 18:
            //21 h
            organize(battle, i, Storables.silver, 1);
            organize(battle, i, Storables.siege_tower, 1);
            organize(battle, i, Storables.archer, 1);
            organize(battle, i, Storables.shield_bearers, 1);

            organize(trade, i, Storables.silver, 10000);
            organize(trade, i, Storables.mangonel, 20);
            organize(trade, i, Storables.caravan, 20);
            organize(trade, i, Storables.mercer, 20);

            organize(intrigue, i, Storables.silver, 10000);
            organize(intrigue, i, Storables.spitfire, 1);
            organize(intrigue, i, Storables.courtesan, 1);
            organize(intrigue, i, Storables.assassin, 1);
            break;
        case 19:
            // 23h
            organize(battle, i, Storables.silver, 1);
            organize(battle, i, Storables.siege_tower, 1);
            organize(battle, i, Storables.iron, 1);
            organize(battle, i, Storables.wood, 1);

            organize(trade, i, Storables.silver, 10000);
            organize(trade, i, Storables.mangonel, 22);
            organize(trade, i, Storables.ore, 1300);
            organize(trade, i, Storables.grains, 1300);

            organize(intrigue, i, Storables.silver, 10000);
            organize(intrigue, i, Storables.spitfire, 22);
            organize(intrigue, i, Storables.fish, 1300);
            organize(intrigue, i, Storables.cloth, 1300);
            break;
        case 20:
            // no further upgrades ( but this avoids special casing the last level)
            break;
        }
        Object.freeze(CampStorable[battle.dbCode][i]);
        Object.freeze(CampStorable[trade.dbCode][i]);
        Object.freeze(CampStorable[intrigue.dbCode][i]);
    }
    Object.freeze(CampStorable);
});
