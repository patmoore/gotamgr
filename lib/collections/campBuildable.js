/**
 * [SkillGeneral][currentCampLevel
 * @type {{}}
 */
CampBuildable = {};
BuildablesByCamp = {};
Meteor.startup(function(){
    function organize(skillGeneral, currentCampLevel, buildable, quantity) {
        CampBuildable[skillGeneral][currentCampLevel][buildable] = quantity;
        if ( !(buildable in BuildablesByCamp)) {
            BuildablesByCamp[buildable] = {};
        }
        if ( !(skillGeneral in BuildablesByCamp[buildable])) {
            BuildablesByCamp[buildable][skillGeneral] = [];
        }
        BuildablesByCamp[buildable][skillGeneral][currentCampLevel] = quantity;
    }
    // after startup so that Buildables has been created.
    var battle = SkillGeneral.Battle;
    var trade = SkillGeneral.Trade;
    var intrigue = SkillGeneral.Intrigue;
    CampBuildable[battle] = [];
    CampBuildable[trade] = [];
    CampBuildable[intrigue] = [];
    // i = the current camp level ( i.e. 0 = not built)
    var i;
    for(i = 0; i < 21; i++) {
        CampBuildable[battle][i] = {};
        CampBuildable[trade][i] = {}
        CampBuildable[intrigue][i] = {};
        switch(i) {
        // TODO: collapse levels 0-2 : because needs the same regardless of camp type.
        case 0:
            //10m
            organize(battle, i, Buildables.silver, 10000);
            organize(battle, i, Buildables.cloth, 20);
            organize(battle, i, Buildables.grains, 10);
            organize(battle, i, Buildables.smallfolk, 10);

            organize(battle, i, Buildables.silver, 10000);
            organize(battle, i, Buildables.cloth, 20);
            organize(battle, i, Buildables.grains, 10);
            organize(battle, i, Buildables.smallfolk, 10);

            organize(battle, i, Buildables.silver, 10000);
            organize(battle, i, Buildables.cloth, 20);
            organize(battle, i, Buildables.grains, 10);
            organize(battle, i, Buildables.smallfolk, 10);
            break;
        case 1:
            //1h
            organize(battle, i, Buildables.silver, 25000);
            organize(battle, i, Buildables.wood, 20);
            organize(battle, i, Buildables.fur, 30);
            organize(battle, i, Buildables.horse, 20);

            organize(battle, i, Buildables.silver, 25000);
            organize(battle, i, Buildables.wood, 20);
            organize(battle, i, Buildables.fur, 30);
            organize(battle, i, Buildables.horse, 20);

            organize(battle, i, Buildables.silver, 25000);
            organize(battle, i, Buildables.wood, 20);
            organize(battle, i, Buildables.fur, 30);
            organize(battle, i, Buildables.horse, 20);
            break;

        case 2:
            //1h
            organize(battle, i, Buildables.silver, 55000);
            organize(battle, i, Buildables.stone, 45);
            organize(battle, i, Buildables.ore, 40);
            organize(battle, i, Buildables.fish, 35);

            organize(battle, i, Buildables.silver, 55000);
            organize(battle, i, Buildables.stone, 45);
            organize(battle, i, Buildables.ore, 40);
            organize(battle, i, Buildables.fish, 35);

            organize(battle, i, Buildables.silver, 55000);
            organize(battle, i, Buildables.stone, 45);
            organize(battle, i, Buildables.ore, 40);
            organize(battle, i, Buildables.fish, 35);
            break;

        case 3:
            //2h
            organize(battle, i, Buildables.silver, 70000);
            organize(battle, i, Buildables.dagger, 7);
            organize(battle, i, Buildables.shortbow, 7);
            organize(battle, i, Buildables.red_gem, 7);

            organize(trade, i, Buildables.silver, 70000);
            organize(trade, i, Buildables.leather_bound_book, 7);
            organize(trade, i, Buildables.silver_chain, 7);
            organize(trade, i, Buildables.red_gem, 7);

            organize(intrigue, i, Buildables.silver, 70000);
            organize(intrigue, i, Buildables.milk_of_the_poppy, 7);
            organize(intrigue, i, Buildables.fingerless_gloves, 7);
            organize(intrigue, i, Buildables.red_gem, 7);
            break;
        case 4:
            // 3h
            organize(battle, i, Buildables.silver, 10000);
            organize(battle, i, Buildables.militia, 30);
            organize(battle, i, Buildables.blue_gem, 10);
            organize(battle, i, Buildables.decorative_blade, 10);

            organize(trade, i, Buildables.silver, 100000);
            organize(trade, i, Buildables.trader, 50);
            organize(trade, i, Buildables.blue_gem, 6);
            organize(trade, i, Buildables.decorative_blade, 8);

            organize(intrigue, i, Buildables.silver, 10000);
            organize(intrigue, i, Buildables.eavesdropper, 1);
            organize(intrigue, i, Buildables.blue_gem, 1);
            organize(intrigue, i, Buildables.decorative_blade, 1);
            break;
        case 5:
            //4h
            organize(battle, i, Buildables.silver, 1);
            organize(battle, i, Buildables.militia, 60);
            organize(battle, i, Buildables.wood_shield, 10);
            organize(battle, i, Buildables.halfhelm, 10);

            organize(trade, i, Buildables.silver, 100000);
            organize(trade, i, Buildables.trader, 100);
            organize(trade, i, Buildables.silver_torc, 17);
            organize(trade, i, Buildables.leather_bound_book, 17);

            organize(intrigue, i, Buildables.silver, 10000);
            organize(intrigue, i, Buildables.eavesdropper, 100);
            organize(intrigue, i, Buildables.fingerless_gloves, 1);
            organize(intrigue, i, Buildables.roughspun_cloak, 1);
            break;
        case 6:
            //5h
            organize(battle, i, Buildables.silver, 1);
            organize(battle, i, Buildables.militia, 90);
            organize(battle, i, Buildables.shortbow, 15);
            organize(battle, i, Buildables.doublet, 1);

            organize(trade, i, Buildables.silver, 10000);
            organize(trade, i, Buildables.leather_bound_book, 25);
            organize(trade, i, Buildables.silver_torc, 25);
            organize(trade, i, Buildables.trader, 150);

            organize(intrigue, i, Buildables.silver, 10000);
            organize(intrigue, i, Buildables.eavesdropper, 90);
            organize(intrigue, i, Buildables.fingerless_gloves, 15);
            organize(intrigue, i, Buildables.linen_clothing, 15);
            break;
        case 7:
            //6h
            organize(battle, i, Buildables.silver, 1);
            organize(battle, i, Buildables.ladder, 1);
            organize(battle, i, Buildables.halfhelm, 1);
            organize(battle, i, Buildables.doublet, 1);

            organize(trade, i, Buildables.silver, 10000);
            organize(trade, i, Buildables.silver_chain, 33);
            organize(trade, i, Buildables.trebuchet, 33);
            organize(trade, i, Buildables.parchment_scroll, 33);

            organize(intrigue, i, Buildables.silver, 10000);
            organize(intrigue, i, Buildables.turtle, 33);
            organize(intrigue, i, Buildables.roughspun_cloak, 33);
            organize(intrigue, i, Buildables.linen_clothing, 33);
            break;
        case 8:
            //7h
            organize(battle, i, Buildables.silver, 1);
            organize(battle, i, Buildables.ladder, 1);
            organize(battle, i, Buildables.militia, 1);
            organize(battle, i, Buildables.red_gem, 1);

            organize(trade, i, Buildables.silver, 10000);
            organize(trade, i, Buildables.trader, 250);
            organize(trade, i, Buildables.trebuchet, 41);
            organize(trade, i, Buildables.red_gem, 28);

            organize(intrigue, i, Buildables.silver, 10000);
            organize(intrigue, i, Buildables.eavesdropper, 150);
            organize(intrigue, i, Buildables.turtle, 37);
            organize(intrigue, i, Buildables.red_gem, 37);
            break;
        case 9:
            //8h
            organize(battle, i, Buildables.silver, 1);
            organize(battle, i, Buildables.ladder, 1);
            organize(battle, i, Buildables.dagger, 1);
            organize(battle, i, Buildables.shortbow, 1);

            organize(trade, i, Buildables.silver, 10000);
            organize(trade, i, Buildables.trebuchet, 50);
            organize(trade, i, Buildables.silver_torc, 50);
            organize(trade, i, Buildables.leather_bound_book, 50);

            organize(intrigue, i, Buildables.silver, 10000);
            organize(intrigue, i, Buildables.turtle, 30);
            organize(intrigue, i, Buildables.milk_of_the_poppy, 30);
            organize(intrigue, i, Buildables.fingerless_gloves, 30);
            break;
        case 10:
            //9h
            organize(battle, i, Buildables.silver, 1);
            organize(battle, i, Buildables.ram, 1);
            organize(battle, i, Buildables.militia, 1);
            organize(battle, i, Buildables.metal_shield, 1);

            organize(trade, i, Buildables.silver, 10000);
            organize(trade, i, Buildables.trader, 350);
            organize(trade, i, Buildables.vellum_scroll, 19);
            organize(trade, i, Buildables.catapult, 19);

            organize(intrigue, i, Buildables.silver, 10000);
            organize(intrigue, i, Buildables.scorpion, 1);
            organize(intrigue, i, Buildables.eavesdropper, 1);
            organize(intrigue, i, Buildables.satin_cloak, 1);
            break;
        case 11:
            //10h
            organize(battle, i, Buildables.silver, 1);
            organize(battle, i, Buildables.ram, 1);
            organize(battle, i, Buildables.splint_armor, 1);
            organize(battle, i, Buildables.barred_helm, 1);

            organize(trade, i, Buildables.silver, 10000);
            organize(trade, i, Buildables.merchant, 30);
            organize(trade, i, Buildables.lockbox, 22);
            organize(trade, i, Buildables.catapult, 22);

            organize(intrigue, i, Buildables.silver, 10000);
            organize(intrigue, i, Buildables.scorpion, 1);
            organize(intrigue, i, Buildables.guards_uniform, 1);
            organize(intrigue, i, Buildables.blindeye, 1);
            break;
        case 12:
            //11h
            organize(battle, i, Buildables.silver, 1);
            organize(battle, i, Buildables.ram, 1);
            organize(battle, i, Buildables.bowman, 1);
            organize(battle, i, Buildables.jerkin, 1);

            organize(trade, i, Buildables.silver, 10000);
            organize(trade, i, Buildables.catapult, 25);
            organize(trade, i, Buildables.lockbox, 25);
            organize(trade, i, Buildables.wagon, 30);

            organize(intrigue, i, Buildables.silver, 10000);
            organize(intrigue, i, Buildables.scorpion, 1);
            organize(intrigue, i, Buildables.saboteur, 1);
            organize(intrigue, i, Buildables.blindeye, 1);
            break;
        case 13:
            //12h
            organize(battle, i, Buildables.silver, 1);
            organize(battle, i, Buildables.ram, 1);
            organize(battle, i, Buildables.broadsword, 1);
            organize(battle, i, Buildables.metal_shield, 1);

            organize(trade, i, Buildables.silver, 10000);
            organize(trade, i, Buildables.catapult, 28);
            organize(trade, i, Buildables.wagon, 32);
            organize(trade, i, Buildables.gold_necklace, 28);

            organize(intrigue, i, Buildables.silver, 10000);
            organize(intrigue, i, Buildables.scorpion, 1);
            organize(intrigue, i, Buildables.dreamwine, 1);
            organize(intrigue, i, Buildables.satin_cloak, 1);
            break;
        case 14:
            //13h
            organize(battle, i, Buildables.silver, 1);
            organize(battle, i, Buildables.ram, 1);
            organize(battle, i, Buildables.broadsword, 1);
            organize(battle, i, Buildables.metal_shield, 1);

            organize(trade, i, Buildables.silver, 10000);
            organize(trade, i, Buildables.catapult, 39);
            organize(trade, i, Buildables.wagon, 33);
            organize(trade, i, Buildables.gold_necklace, 33);

            organize(intrigue, i, Buildables.silver, 10000);
            organize(intrigue, i, Buildables.scorpion, 1);
            organize(intrigue, i, Buildables.dreamwine, 1);
            organize(intrigue, i, Buildables.guards_uniform, 1);
            break;
        case 15:
            // 15h
            organize(battle, i, Buildables.silver, 1);
            organize(battle, i, Buildables.siege_tower, 1);
            organize(battle, i, Buildables.composite_bow, 1);
            organize(battle, i, Buildables.jerkin, 1);

            organize(trade, i, Buildables.silver, 10000);
            organize(trade, i, Buildables.wagon, 39);
            organize(trade, i, Buildables.gold_necklace, 39);
            organize(trade, i, Buildables.mangonel, 14);

            organize(intrigue, i, Buildables.silver, 10000);
            organize(intrigue, i, Buildables.spitfire, 1);
            organize(intrigue, i, Buildables.dreamwine, 1);
            organize(intrigue, i, Buildables.satin_cloak, 1);
            break;
        case 16:
            //17h
            organize(battle, i, Buildables.silver, 1);
            organize(battle, i, Buildables.siege_tower, 1);
            organize(battle, i, Buildables.archer, 1);
            organize(battle, i, Buildables.splint_armor, 1);

            organize(trade, i, Buildables.silver, 10000);
            organize(trade, i, Buildables.gold_necklace, 44);
            organize(trade, i, Buildables.mangonel, 16);
            organize(trade, i, Buildables.caravan, 18);

            organize(intrigue, i, Buildables.silver, 10000);
            organize(intrigue, i, Buildables.spitfire, 1);
            organize(intrigue, i, Buildables.courtesan, 1);
            organize(intrigue, i, Buildables.satin_cloak, 1);
            break;
        case 17:
            // 19h
            organize(battle, i, Buildables.silver, 1);
            organize(battle, i, Buildables.siege_tower, 1);
            organize(battle, i, Buildables.archer, 1);
            organize(battle, i, Buildables.jerkin, 1);

            organize(trade, i, Buildables.silver, 10000);
            organize(trade, i, Buildables.mangonel, 18);
            organize(trade, i, Buildables.caravan, 18);
            organize(trade, i, Buildables.lockbox, 50);

            organize(intrigue, i, Buildables.silver, 10000);
            organize(intrigue, i, Buildables.spitfire, 1);
            organize(intrigue, i, Buildables.courtesan, 1);
            organize(intrigue, i, Buildables.blindeye, 1);
            break;
        case 18:
            //21 h
            organize(battle, i, Buildables.silver, 1);
            organize(battle, i, Buildables.siege_tower, 1);
            organize(battle, i, Buildables.archer, 1);
            organize(battle, i, Buildables.shield_bearers, 1);

            organize(trade, i, Buildables.silver, 10000);
            organize(trade, i, Buildables.mangonel, 20);
            organize(trade, i, Buildables.caravan, 20);
            organize(trade, i, Buildables.mercer, 20);

            organize(intrigue, i, Buildables.silver, 10000);
            organize(intrigue, i, Buildables.spitfire, 1);
            organize(intrigue, i, Buildables.courtesan, 1);
            organize(intrigue, i, Buildables.assassin, 1);
            break;
        case 19:
            // 23h
            organize(battle, i, Buildables.silver, 1);
            organize(battle, i, Buildables.siege_tower, 1);
            organize(battle, i, Buildables.iron, 1);
            organize(battle, i, Buildables.wood, 1);

            organize(trade, i, Buildables.silver, 10000);
            organize(trade, i, Buildables.mangonel, 22);
            organize(trade, i, Buildables.ore, 1300);
            organize(trade, i, Buildables.grains, 1300);

            organize(intrigue, i, Buildables.silver, 10000);
            organize(intrigue, i, Buildables.spitfire, 22);
            organize(intrigue, i, Buildables.fish, 1300);
            organize(intrigue, i, Buildables.cloth, 1300);
            break;
        case 20:
            // no further upgrades ( but this avoids special casing the last level)
            break;
        }
        Object.freeze(CampBuildable[battle][i]);
        Object.freeze(CampBuildable[trade][i]);
        Object.freeze(CampBuildable[intrigue][i]);
    }
    Object.freeze(CampBuildable);
});
