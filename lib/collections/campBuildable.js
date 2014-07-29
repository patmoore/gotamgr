/**
 * [SkillGeneral][currentCampLevel
 * @type {{}}
 */
CampBuildable = {};
BuildablesByCamp = {};
Meteor.startup(function(){
    function (skillGeneral, currentCampLevel, buildable, quantity) {
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
    debugger;
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
            CampBuildable[battle][i][Buildables.silver] = 10000;
            CampBuildable[battle][i][Buildables.cloth] = 20;
            CampBuildable[battle][i][Buildables.grains] = 10;
            CampBuildable[battle][i][Buildables.smallfolk] = 10;

            CampBuildable[battle][i][Buildables.silver] = 10000;
            CampBuildable[battle][i][Buildables.cloth] = 20;
            CampBuildable[battle][i][Buildables.grains] = 10;
            CampBuildable[battle][i][Buildables.smallfolk] = 10;

            CampBuildable[battle][i][Buildables.silver] = 10000;
            CampBuildable[battle][i][Buildables.cloth] = 20;
            CampBuildable[battle][i][Buildables.grains] = 10;
            CampBuildable[battle][i][Buildables.smallfolk] = 10;
            break;
        case 1:
            //1h
            CampBuildable[battle][i][Buildables.silver] = 25000;
            CampBuildable[battle][i][Buildables.wood] = 20;
            CampBuildable[battle][i][Buildables.fur] = 30;
            CampBuildable[battle][i][Buildables.horse] = 20;

            CampBuildable[battle][i][Buildables.silver] = 25000;
            CampBuildable[battle][i][Buildables.wood] = 20;
            CampBuildable[battle][i][Buildables.fur] = 30;
            CampBuildable[battle][i][Buildables.horse] = 20;

            CampBuildable[battle][i][Buildables.silver] = 25000;
            CampBuildable[battle][i][Buildables.wood] = 20;
            CampBuildable[battle][i][Buildables.fur] = 30;
            CampBuildable[battle][i][Buildables.horse] = 20;
            break;

        case 2:
            //1h
            CampBuildable[battle][i][Buildables.silver] = 55000;
            CampBuildable[battle][i][Buildables.stone] = 45;
            CampBuildable[battle][i][Buildables.ore] = 40;
            CampBuildable[battle][i][Buildables.fish] = 35;

            CampBuildable[battle][i][Buildables.silver] = 55000;
            CampBuildable[battle][i][Buildables.stone] = 45;
            CampBuildable[battle][i][Buildables.ore] = 40;
            CampBuildable[battle][i][Buildables.fish] = 35;

            CampBuildable[battle][i][Buildables.silver] = 55000;
            CampBuildable[battle][i][Buildables.stone] = 45;
            CampBuildable[battle][i][Buildables.ore] = 40;
            CampBuildable[battle][i][Buildables.fish] = 35;
            break;

        case 3:
            //2h
            CampBuildable[battle][i][Buildables.silver] = 70000;
            CampBuildable[battle][i][Buildables.dagger] = 7;
            CampBuildable[battle][i][Buildables.shortbow] = 7;
            CampBuildable[battle][i][Buildables.red_gem] = 7;

            CampBuildable[trade][i][Buildables.silver] = 70000;
            CampBuildable[trade][i][Buildables.leather_bound_book] = 7;
            CampBuildable[trade][i][Buildables.silver_chain] = 7;
            CampBuildable[trade][i][Buildables.red_gem] = 7;

            CampBuildable[intrigue][i][Buildables.silver] = 70000;
            CampBuildable[intrigue][i][Buildables.milk_of_the_poppy] = 7;
            CampBuildable[intrigue][i][Buildables.fingerless_gloves] = 7;
            CampBuildable[intrigue][i][Buildables.red_gem] = 7;
            break;
        case 4:
            // 3h
            CampBuildable[battle][i][Buildables.silver] = 10000;
            CampBuildable[battle][i][Buildables.militia] = 30;
            CampBuildable[battle][i][Buildables.blue_gem] = 10;
            CampBuildable[battle][i][Buildables.decorative_blade] = 10;

            CampBuildable[trade][i][Buildables.silver] = 100000;
            CampBuildable[trade][i][Buildables.trader] = 50;
            CampBuildable[trade][i][Buildables.blue_gem] = 6;
            CampBuildable[trade][i][Buildables.decorative_blade] = 8;

            CampBuildable[intrigue][i][Buildables.silver] = 10000;
            CampBuildable[intrigue][i][Buildables.eavesdropper] = 1;
            CampBuildable[intrigue][i][Buildables.blue_gem] = 1;
            CampBuildable[intrigue][i][Buildables.decorative_blade] = 1;
            break;
        case 5:
            //4h
            CampBuildable[battle][i][Buildables.silver] = 1;
            CampBuildable[battle][i][Buildables.militia] = 60;
            CampBuildable[battle][i][Buildables.wood_shield] = 10;
            CampBuildable[battle][i][Buildables.halfhelm] = 10;

            CampBuildable[trade][i][Buildables.silver] = 100000;
            CampBuildable[trade][i][Buildables.trader] = 100;
            CampBuildable[trade][i][Buildables.silver_torc] = 17;
            CampBuildable[trade][i][Buildables.leather_bound_book] = 17;

            CampBuildable[intrigue][i][Buildables.silver] = 10000;
            CampBuildable[intrigue][i][Buildables.eavesdropper] = 100;
            CampBuildable[intrigue][i][Buildables.fingerless_gloves] = 1;
            CampBuildable[intrigue][i][Buildables.roughspun_cloak] = 1;
            break;
        case 6:
            //5h
            CampBuildable[battle][i][Buildables.silver] = 1;
            CampBuildable[battle][i][Buildables.militia] = 90;
            CampBuildable[battle][i][Buildables.shortbow] = 15;
            CampBuildable[battle][i][Buildables.doublet] = 1;

            CampBuildable[trade][i][Buildables.silver] = 10000;
            CampBuildable[trade][i][Buildables.leather_bound_book] = 25;
            CampBuildable[trade][i][Buildables.silver_torc] = 25;
            CampBuildable[trade][i][Buildables.trader] = 150;

            CampBuildable[intrigue][i][Buildables.silver] = 10000;
            CampBuildable[intrigue][i][Buildables.eavesdropper] = 1;
            CampBuildable[intrigue][i][Buildables.fingerless_gloves] = 1;
            CampBuildable[intrigue][i][Buildables.linen_clothing] = 1;
            break;
        case 7:
            //6h
            CampBuildable[battle][i][Buildables.silver] = 1;
            CampBuildable[battle][i][Buildables.ladder] = 1;
            CampBuildable[battle][i][Buildables.halfhelm] = 1;
            CampBuildable[battle][i][Buildables.doublet] = 1;

            CampBuildable[trade][i][Buildables.silver] = 10000;
            CampBuildable[trade][i][Buildables.silver_chain] = 33;
            CampBuildable[trade][i][Buildables.trebuchet] = 33;
            CampBuildable[trade][i][Buildables.parchment_scroll] = 33;

            CampBuildable[intrigue][i][Buildables.silver] = 10000;
            CampBuildable[intrigue][i][Buildables.turtle] = 1;
            CampBuildable[intrigue][i][Buildables.roughspun_cloak] = 1;
            CampBuildable[intrigue][i][Buildables.linen_clothing] = 1;
            break;
        case 8:
            //7h
            CampBuildable[battle][i][Buildables.silver] = 1;
            CampBuildable[battle][i][Buildables.ladder] = 1;
            CampBuildable[battle][i][Buildables.militia] = 1;
            CampBuildable[battle][i][Buildables.red_gem] = 1;

            CampBuildable[trade][i][Buildables.silver] = 10000;
            CampBuildable[trade][i][Buildables.trader] = 250;
            CampBuildable[trade][i][Buildables.trebuchet] = 41;
            CampBuildable[trade][i][Buildables.red_gem] = 28;

            CampBuildable[intrigue][i][Buildables.silver] = 10000;
            CampBuildable[intrigue][i][Buildables.eavesdropper] = 1;
            CampBuildable[intrigue][i][Buildables.turtle] = 1;
            CampBuildable[intrigue][i][Buildables.red_gem] = 1;
            break;
        case 9:
            //8h
            CampBuildable[battle][i][Buildables.silver] = 1;
            CampBuildable[battle][i][Buildables.ladder] = 1;
            CampBuildable[battle][i][Buildables.dagger] = 1;
            CampBuildable[battle][i][Buildables.shortbow] = 1;

            CampBuildable[trade][i][Buildables.silver] = 10000;
            CampBuildable[trade][i][Buildables.trebuchet] = 50;
            CampBuildable[trade][i][Buildables.silver_torc] = 50;
            CampBuildable[trade][i][Buildables.leather_bound_book] = 50;

            CampBuildable[intrigue][i][Buildables.silver] = 10000;
            CampBuildable[intrigue][i][Buildables.turtle] = 1;
            CampBuildable[intrigue][i][Buildables.milk_of_the_poppy] = 1;
            CampBuildable[intrigue][i][Buildables.fingerless_gloves] = 1;
            break;
        case 10:
            //9h
            CampBuildable[battle][i][Buildables.silver] = 1;
            CampBuildable[battle][i][Buildables.ram] = 1;
            CampBuildable[battle][i][Buildables.militia] = 1;
            CampBuildable[battle][i][Buildables.metal_shield] = 1;

            CampBuildable[trade][i][Buildables.silver] = 10000;
            CampBuildable[trade][i][Buildables.trader] = 350;
            CampBuildable[trade][i][Buildables.vellum_scroll] = 19;
            CampBuildable[trade][i][Buildables.catapult] = 19;

            CampBuildable[intrigue][i][Buildables.silver] = 10000;
            CampBuildable[intrigue][i][Buildables.scorpion] = 1;
            CampBuildable[intrigue][i][Buildables.eavesdropper] = 1;
            CampBuildable[intrigue][i][Buildables.satin_cloak] = 1;
            break;
        case 11:
            //10h
            CampBuildable[battle][i][Buildables.silver] = 1;
            CampBuildable[battle][i][Buildables.ram] = 1;
            CampBuildable[battle][i][Buildables.splint_mail] = 1;
            CampBuildable[battle][i][Buildables.barred_helm] = 1;

            CampBuildable[trade][i][Buildables.silver] = 10000;
            CampBuildable[trade][i][Buildables.merchant] = 30;
            CampBuildable[trade][i][Buildables.lockbox] = 22;
            CampBuildable[trade][i][Buildables.catapult] = 22;

            CampBuildable[intrigue][i][Buildables.silver] = 10000;
            CampBuildable[intrigue][i][Buildables.scorpion] = 1;
            CampBuildable[intrigue][i][Buildables.guards_uniform] = 1;
            CampBuildable[intrigue][i][Buildables.blindeye] = 1;
            break;
        case 12:
            //11h
            CampBuildable[battle][i][Buildables.silver] = 1;
            CampBuildable[battle][i][Buildables.ram] = 1;
            CampBuildable[battle][i][Buildables.bowman] = 1;
            CampBuildable[battle][i][Buildables.jerkin] = 1;

            CampBuildable[trade][i][Buildables.silver] = 10000;
            CampBuildable[trade][i][Buildables.catapult] = 25;
            CampBuildable[trade][i][Buildables.lockbox] = 25;
            CampBuildable[trade][i][Buildables.wagon] = 30;

            CampBuildable[intrigue][i][Buildables.silver] = 10000;
            CampBuildable[intrigue][i][Buildables.scorpion] = 1;
            CampBuildable[intrigue][i][Buildables.saboteur] = 1;
            CampBuildable[intrigue][i][Buildables.blindeye] = 1;
            break;
        case 13:
            //12h
            CampBuildable[battle][i][Buildables.silver] = 1;
            CampBuildable[battle][i][Buildables.ram] = 1;
            CampBuildable[battle][i][Buildables.broadsword] = 1;
            CampBuildable[battle][i][Buildables.metal_shield] = 1;

            CampBuildable[trade][i][Buildables.silver] = 10000;
            CampBuildable[trade][i][Buildables.catapult] = 28;
            CampBuildable[trade][i][Buildables.wagon] = 32;
            CampBuildable[trade][i][Buildables.gold_necklace] = 28;

            CampBuildable[intrigue][i][Buildables.silver] = 10000;
            CampBuildable[intrigue][i][Buildables.scorpion] = 1;
            CampBuildable[intrigue][i][Buildables.dreamwine] = 1;
            CampBuildable[intrigue][i][Buildables.satin_cloak] = 1;
            break;
        case 14:
            //13h
            CampBuildable[battle][i][Buildables.silver] = 1;
            CampBuildable[battle][i][Buildables.ram] = 1;
            CampBuildable[battle][i][Buildables.broadsword] = 1;
            CampBuildable[battle][i][Buildables.metal_shield] = 1;

            CampBuildable[trade][i][Buildables.silver] = 10000;
            CampBuildable[trade][i][Buildables.catapult] = 39;
            CampBuildable[trade][i][Buildables.wagon] = 33;
            CampBuildable[trade][i][Buildables.gold_necklace] = 33;

            CampBuildable[intrigue][i][Buildables.silver] = 10000;
            CampBuildable[intrigue][i][Buildables.scorpion] = 1;
            CampBuildable[intrigue][i][Buildables.dreamwine] = 1;
            CampBuildable[intrigue][i][Buildables.guards_uniform] = 1;
            break;
        case 15:
            // 15h
            CampBuildable[battle][i][Buildables.silver] = 1;
            CampBuildable[battle][i][Buildables.siege_tower] = 1;
            CampBuildable[battle][i][Buildables.composite_bow] = 1;
            CampBuildable[battle][i][Buildables.jerkin] = 1;

            CampBuildable[trade][i][Buildables.silver] = 10000;
            CampBuildable[trade][i][Buildables.wagon] = 39;
            CampBuildable[trade][i][Buildables.gold_necklace] = 39;
            CampBuildable[trade][i][Buildables.mangonel] = 14;

            CampBuildable[intrigue][i][Buildables.silver] = 10000;
            CampBuildable[intrigue][i][Buildables.spitfire] = 1;
            CampBuildable[intrigue][i][Buildables.dreamwine] = 1;
            CampBuildable[intrigue][i][Buildables.satin_cloak] = 1;
            break;
        case 16:
            //17h
            CampBuildable[battle][i][Buildables.silver] = 1;
            CampBuildable[battle][i][Buildables.siege_tower] = 1;
            CampBuildable[battle][i][Buildables.archer] = 1;
            CampBuildable[battle][i][Buildables.splint_mail] = 1;

            CampBuildable[trade][i][Buildables.silver] = 10000;
            CampBuildable[trade][i][Buildables.gold_necklace] = 44;
            CampBuildable[trade][i][Buildables.mangonel] = 16;
            CampBuildable[trade][i][Buildables.caravan] = 18;

            CampBuildable[intrigue][i][Buildables.silver] = 10000;
            CampBuildable[intrigue][i][Buildables.spitfire] = 1;
            CampBuildable[intrigue][i][Buildables.courtesan] = 1;
            CampBuildable[intrigue][i][Buildables.satin_cloak] = 1;
            break;
        case 17:
            // 19h
            CampBuildable[battle][i][Buildables.silver] = 1;
            CampBuildable[battle][i][Buildables.siege_tower] = 1;
            CampBuildable[battle][i][Buildables.archer] = 1;
            CampBuildable[battle][i][Buildables.jerkin] = 1;

            CampBuildable[trade][i][Buildables.silver] = 10000;
            CampBuildable[trade][i][Buildables.mangonel] = 18;
            CampBuildable[trade][i][Buildables.caravan] = 18;
            CampBuildable[trade][i][Buildables.lockbox] = 50;

            CampBuildable[intrigue][i][Buildables.silver] = 10000;
            CampBuildable[intrigue][i][Buildables.spitfire] = 1;
            CampBuildable[intrigue][i][Buildables.courtesan] = 1;
            CampBuildable[intrigue][i][Buildables.blindeye] = 1;
            break;
        case 18:
            //21 h
            CampBuildable[battle][i][Buildables.silver] = 1;
            CampBuildable[battle][i][Buildables.siege_tower] = 1;
            CampBuildable[battle][i][Buildables.archer] = 1;
            CampBuildable[battle][i][Buildables.shield_bearers] = 1;

            CampBuildable[trade][i][Buildables.silver] = 10000;
            CampBuildable[trade][i][Buildables.mangonel] = 20;
            CampBuildable[trade][i][Buildables.caravan] = 20;
            CampBuildable[trade][i][Buildables.mercer] = 20;

            CampBuildable[intrigue][i][Buildables.silver] = 10000;
            CampBuildable[intrigue][i][Buildables.spitfire] = 1;
            CampBuildable[intrigue][i][Buildables.courtesan] = 1;
            CampBuildable[intrigue][i][Buildables.assassin] = 1;
            break;
        case 19:
            // 23h
            CampBuildable[battle][i][Buildables.silver] = 1;
            CampBuildable[battle][i][Buildables.siege_tower] = 1;
            CampBuildable[battle][i][Buildables.iron] = 1;
            CampBuildable[battle][i][Buildables.wood] = 1;

            CampBuildable[trade][i][Buildables.silver] = 10000;
            CampBuildable[trade][i][Buildables.mangonel] = 22;
            CampBuildable[trade][i][Buildables.ore] = 1300;
            CampBuildable[trade][i][Buildables.grains] = 1300;

            CampBuildable[intrigue][i][Buildables.silver] = 10000;
            CampBuildable[intrigue][i][Buildables.spitfire] = 22;
            CampBuildable[intrigue][i][Buildables.fish] = 1300;
            CampBuildable[intrigue][i][Buildables.cloth] = 1300;
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

    debugger;
});
