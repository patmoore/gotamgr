CampBuildable = {};
Meteor.startup(function(){
    debugger;
    var battle = SkillGeneral.Battle;
    var trade = SkillGeneral.Trade;
    var intrigue = SkillGeneral.Intrigue;
    CampBuildable[battle] = [];
    CampBuildable[trade] = [];
    CampBuildable[intrigue] = [];
    for(var i = 0; i < 20; i++) {
        CampBuildable[battle][i] = {};
        CampBuildable[trade][i] = {}
        CampBuildable[intrigue][i] = {};
        switch(i) {
        case 0:
            CampBuildable[battle][i][Buildables.silver] = 10000;
            CampBuildable[battle][i][Buildables.cloth] = 20;
            CampBuildable[battle][i][Buildables.grains] = 10;
            CampBuildable[battle][i][Buildables.smallfolk] = 10;

            CampBuildable[trade][i][Buildables.silver] = 10000;
            CampBuildable[trade][i][Buildables.smallfolk] = 1;
            CampBuildable[trade][i][Buildables.silver] = 1;
            CampBuildable[trade][i][Buildables.cloth] = 1;

            CampBuildable[intrigue][i][Buildables.silver] = 10000;
            CampBuildable[intrigue][i][Buildables.grains] = 1;
            CampBuildable[intrigue][i][Buildables.smallfolk] = 1;
            CampBuildable[intrigue][i][Buildables.silver] = 1;
            break;
        case 1:
            CampBuildable[battle][i][Buildables.silver] = 25000;
            CampBuildable[battle][i][Buildables.wood] = 20;
            CampBuildable[battle][i][Buildables.fur] = 30;
            CampBuildable[battle][i][Buildables.horse] = 20;

            CampBuildable[trade][i][Buildables.silver] = 10000;
            CampBuildable[trade][i][Buildables.smallfolk] = 1;
            CampBuildable[trade][i][Buildables.silver] = 1;
            CampBuildable[trade][i][Buildables.cloth] = 1;

            CampBuildable[intrigue][i][Buildables.silver] = 10000;
            CampBuildable[intrigue][i][Buildables.grains] = 1;
            CampBuildable[intrigue][i][Buildables.smallfolk] = 1;
            CampBuildable[intrigue][i][Buildables.silver] = 1;
            break;

        case 2:
            CampBuildable[battle][i][Buildables.silver] = 55000;
            CampBuildable[battle][i][Buildables.stone] = 45;
            CampBuildable[battle][i][Buildables.ore] = 40;
            CampBuildable[battle][i][Buildables.fish] = 35;

            CampBuildable[trade][i][Buildables.silver] = 10000;
            CampBuildable[trade][i][Buildables.smallfolk] = 1;
            CampBuildable[trade][i][Buildables.silver] = 1;
            CampBuildable[trade][i][Buildables.cloth] = 1;

            CampBuildable[intrigue][i][Buildables.silver] = 10000;
            CampBuildable[intrigue][i][Buildables.grains] = 1;
            CampBuildable[intrigue][i][Buildables.smallfolk] = 1;
            CampBuildable[intrigue][i][Buildables.silver] = 1;
            break;

        case 3:
            CampBuildable[battle][i][Buildables.silver] = 70000;
            CampBuildable[battle][i][Buildables.dagger] = 7;
            CampBuildable[battle][i][Buildables.grains] = 1;
            CampBuildable[battle][i][Buildables.grains] = 1;

            CampBuildable[trade][i][Buildables.silver] = 10000;
            CampBuildable[trade][i][Buildables.smallfolk] = 1;
            CampBuildable[trade][i][Buildables.silver] = 1;
            CampBuildable[trade][i][Buildables.cloth] = 1;

            CampBuildable[intrigue][i][Buildables.silver] = 10000;
            CampBuildable[intrigue][i][Buildables.grains] = 1;
            CampBuildable[intrigue][i][Buildables.smallfolk] = 1;
            CampBuildable[intrigue][i][Buildables.silver] = 1;
            break;
        case 4:
            CampBuildable[battle][i][Buildables.silver] = 10000;
            CampBuildable[battle][i][Buildables.cloth] = 1;
            CampBuildable[battle][i][Buildables.grains] = 1;
            CampBuildable[battle][i][Buildables.grains] = 1;

            CampBuildable[trade][i][Buildables.silver] = 10000;
            CampBuildable[trade][i][Buildables.smallfolk] = 1;
            CampBuildable[trade][i][Buildables.silver] = 1;
            CampBuildable[trade][i][Buildables.cloth] = 1;

            CampBuildable[intrigue][i][Buildables.silver] = 10000;
            CampBuildable[intrigue][i][Buildables.grains] = 1;
            CampBuildable[intrigue][i][Buildables.smallfolk] = 1;
            CampBuildable[intrigue][i][Buildables.silver] = 1;
            break;
        case 5:
            CampBuildable[battle][i][Buildables.silver] = 1;
            CampBuildable[battle][i][Buildables.cloth] = 1;
            CampBuildable[battle][i][Buildables.grains] = 1;
            CampBuildable[battle][i][Buildables.grains] = 1;

            CampBuildable[trade][i][Buildables.silver] = 10000;
            CampBuildable[trade][i][Buildables.smallfolk] = 1;
            CampBuildable[trade][i][Buildables.silver] = 1;
            CampBuildable[trade][i][Buildables.cloth] = 1;

            CampBuildable[intrigue][i][Buildables.silver] = 10000;
            CampBuildable[intrigue][i][Buildables.grains] = 1;
            CampBuildable[intrigue][i][Buildables.smallfolk] = 1;
            CampBuildable[intrigue][i][Buildables.silver] = 1;
            break;
        case 6:
            CampBuildable[battle][i][Buildables.silver] = 1;
            CampBuildable[battle][i][Buildables.cloth] = 1;
            CampBuildable[battle][i][Buildables.grains] = 1;
            CampBuildable[battle][i][Buildables.grains] = 1;

            CampBuildable[trade][i][Buildables.silver] = 10000;
            CampBuildable[trade][i][Buildables.smallfolk] = 1;
            CampBuildable[trade][i][Buildables.silver] = 1;
            CampBuildable[trade][i][Buildables.cloth] = 1;

            CampBuildable[intrigue][i][Buildables.silver] = 10000;
            CampBuildable[intrigue][i][Buildables.grains] = 1;
            CampBuildable[intrigue][i][Buildables.smallfolk] = 1;
            CampBuildable[intrigue][i][Buildables.silver] = 1;
            break;
        case 7:
            CampBuildable[battle][i][Buildables.silver] = 1;
            CampBuildable[battle][i][Buildables.cloth] = 1;
            CampBuildable[battle][i][Buildables.grains] = 1;
            CampBuildable[battle][i][Buildables.grains] = 1;

            CampBuildable[trade][i][Buildables.silver] = 10000;
            CampBuildable[trade][i][Buildables.smallfolk] = 1;
            CampBuildable[trade][i][Buildables.silver] = 1;
            CampBuildable[trade][i][Buildables.cloth] = 1;

            CampBuildable[intrigue][i][Buildables.silver] = 10000;
            CampBuildable[intrigue][i][Buildables.grains] = 1;
            CampBuildable[intrigue][i][Buildables.smallfolk] = 1;
            CampBuildable[intrigue][i][Buildables.silver] = 1;
            break;
        case 8:
            CampBuildable[battle][i][Buildables.silver] = 1;
            CampBuildable[battle][i][Buildables.cloth] = 1;
            CampBuildable[battle][i][Buildables.grains] = 1;
            CampBuildable[battle][i][Buildables.grains] = 1;

            CampBuildable[trade][i][Buildables.silver] = 10000;
            CampBuildable[trade][i][Buildables.smallfolk] = 1;
            CampBuildable[trade][i][Buildables.silver] = 1;
            CampBuildable[trade][i][Buildables.cloth] = 1;

            CampBuildable[intrigue][i][Buildables.silver] = 10000;
            CampBuildable[intrigue][i][Buildables.grains] = 1;
            CampBuildable[intrigue][i][Buildables.smallfolk] = 1;
            CampBuildable[intrigue][i][Buildables.silver] = 1;
            break;
        case 9:
            CampBuildable[battle][i][Buildables.silver] = 1;
            CampBuildable[battle][i][Buildables.cloth] = 1;
            CampBuildable[battle][i][Buildables.grains] = 1;
            CampBuildable[battle][i][Buildables.grains] = 1;

            CampBuildable[trade][i][Buildables.silver] = 10000;
            CampBuildable[trade][i][Buildables.smallfolk] = 1;
            CampBuildable[trade][i][Buildables.silver] = 1;
            CampBuildable[trade][i][Buildables.cloth] = 1;

            CampBuildable[intrigue][i][Buildables.silver] = 10000;
            CampBuildable[intrigue][i][Buildables.grains] = 1;
            CampBuildable[intrigue][i][Buildables.smallfolk] = 1;
            CampBuildable[intrigue][i][Buildables.silver] = 1;
            break;
        case 10:
            CampBuildable[battle][i][Buildables.silver] = 1;
            CampBuildable[battle][i][Buildables.cloth] = 1;
            CampBuildable[battle][i][Buildables.grains] = 1;
            CampBuildable[battle][i][Buildables.grains] = 1;

            CampBuildable[trade][i][Buildables.silver] = 10000;
            CampBuildable[trade][i][Buildables.smallfolk] = 1;
            CampBuildable[trade][i][Buildables.silver] = 1;
            CampBuildable[trade][i][Buildables.cloth] = 1;

            CampBuildable[intrigue][i][Buildables.silver] = 10000;
            CampBuildable[intrigue][i][Buildables.grains] = 1;
            CampBuildable[intrigue][i][Buildables.smallfolk] = 1;
            CampBuildable[intrigue][i][Buildables.silver] = 1;
            break;
        case 11:
            CampBuildable[battle][i][Buildables.silver] = 1;
            CampBuildable[battle][i][Buildables.cloth] = 1;
            CampBuildable[battle][i][Buildables.grains] = 1;
            CampBuildable[battle][i][Buildables.grains] = 1;

            CampBuildable[trade][i][Buildables.silver] = 10000;
            CampBuildable[trade][i][Buildables.smallfolk] = 1;
            CampBuildable[trade][i][Buildables.silver] = 1;
            CampBuildable[trade][i][Buildables.cloth] = 1;

            CampBuildable[intrigue][i][Buildables.silver] = 10000;
            CampBuildable[intrigue][i][Buildables.grains] = 1;
            CampBuildable[intrigue][i][Buildables.smallfolk] = 1;
            CampBuildable[intrigue][i][Buildables.silver] = 1;
            break;
        case 12:
            CampBuildable[battle][i][Buildables.silver] = 1;
            CampBuildable[battle][i][Buildables.cloth] = 1;
            CampBuildable[battle][i][Buildables.grains] = 1;
            CampBuildable[battle][i][Buildables.grains] = 1;

            CampBuildable[trade][i][Buildables.silver] = 10000;
            CampBuildable[trade][i][Buildables.smallfolk] = 1;
            CampBuildable[trade][i][Buildables.silver] = 1;
            CampBuildable[trade][i][Buildables.cloth] = 1;

            CampBuildable[intrigue][i][Buildables.silver] = 10000;
            CampBuildable[intrigue][i][Buildables.grains] = 1;
            CampBuildable[intrigue][i][Buildables.smallfolk] = 1;
            CampBuildable[intrigue][i][Buildables.silver] = 1;
            break;
        case 13:
            CampBuildable[battle][i][Buildables.silver] = 1;
            CampBuildable[battle][i][Buildables.cloth] = 1;
            CampBuildable[battle][i][Buildables.grains] = 1;
            CampBuildable[battle][i][Buildables.grains] = 1;

            CampBuildable[trade][i][Buildables.silver] = 10000;
            CampBuildable[trade][i][Buildables.smallfolk] = 1;
            CampBuildable[trade][i][Buildables.silver] = 1;
            CampBuildable[trade][i][Buildables.cloth] = 1;

            CampBuildable[intrigue][i][Buildables.silver] = 10000;
            CampBuildable[intrigue][i][Buildables.grains] = 1;
            CampBuildable[intrigue][i][Buildables.smallfolk] = 1;
            CampBuildable[intrigue][i][Buildables.silver] = 1;
            break;
        case 14:
            CampBuildable[battle][i][Buildables.silver] = 1;
            CampBuildable[battle][i][Buildables.cloth] = 1;
            CampBuildable[battle][i][Buildables.grains] = 1;
            CampBuildable[battle][i][Buildables.grains] = 1;

            CampBuildable[trade][i][Buildables.silver] = 10000;
            CampBuildable[trade][i][Buildables.smallfolk] = 1;
            CampBuildable[trade][i][Buildables.silver] = 1;
            CampBuildable[trade][i][Buildables.cloth] = 1;

            CampBuildable[intrigue][i][Buildables.silver] = 10000;
            CampBuildable[intrigue][i][Buildables.grains] = 1;
            CampBuildable[intrigue][i][Buildables.smallfolk] = 1;
            CampBuildable[intrigue][i][Buildables.silver] = 1;
            break;
        case 15:
            CampBuildable[battle][i][Buildables.silver] = 1;
            CampBuildable[battle][i][Buildables.cloth] = 1;
            CampBuildable[battle][i][Buildables.grains] = 1;
            CampBuildable[battle][i][Buildables.grains] = 1;

            CampBuildable[trade][i][Buildables.silver] = 10000;
            CampBuildable[trade][i][Buildables.smallfolk] = 1;
            CampBuildable[trade][i][Buildables.silver] = 1;
            CampBuildable[trade][i][Buildables.cloth] = 1;

            CampBuildable[intrigue][i][Buildables.silver] = 10000;
            CampBuildable[intrigue][i][Buildables.grains] = 1;
            CampBuildable[intrigue][i][Buildables.smallfolk] = 1;
            CampBuildable[intrigue][i][Buildables.silver] = 1;
            break;
        case 16:
            CampBuildable[battle][i][Buildables.silver] = 1;
            CampBuildable[battle][i][Buildables.cloth] = 1;
            CampBuildable[battle][i][Buildables.grains] = 1;
            CampBuildable[battle][i][Buildables.grains] = 1;

            CampBuildable[trade][i][Buildables.silver] = 10000;
            CampBuildable[trade][i][Buildables.smallfolk] = 1;
            CampBuildable[trade][i][Buildables.silver] = 1;
            CampBuildable[trade][i][Buildables.cloth] = 1;

            CampBuildable[intrigue][i][Buildables.silver] = 10000;
            CampBuildable[intrigue][i][Buildables.grains] = 1;
            CampBuildable[intrigue][i][Buildables.smallfolk] = 1;
            CampBuildable[intrigue][i][Buildables.silver] = 1;
            break;
        case 17:
            CampBuildable[battle][i][Buildables.silver] = 1;
            CampBuildable[battle][i][Buildables.cloth] = 1;
            CampBuildable[battle][i][Buildables.grains] = 1;
            CampBuildable[battle][i][Buildables.grains] = 1;

            CampBuildable[trade][i][Buildables.silver] = 10000;
            CampBuildable[trade][i][Buildables.smallfolk] = 1;
            CampBuildable[trade][i][Buildables.silver] = 1;
            CampBuildable[trade][i][Buildables.cloth] = 1;

            CampBuildable[intrigue][i][Buildables.silver] = 10000;
            CampBuildable[intrigue][i][Buildables.grains] = 1;
            CampBuildable[intrigue][i][Buildables.smallfolk] = 1;
            CampBuildable[intrigue][i][Buildables.silver] = 1;
            break;
        case 18:
            CampBuildable[battle][i][Buildables.silver] = 1;
            CampBuildable[battle][i][Buildables.cloth] = 1;
            CampBuildable[battle][i][Buildables.grains] = 1;
            CampBuildable[battle][i][Buildables.grains] = 1;

            CampBuildable[trade][i][Buildables.silver] = 10000;
            CampBuildable[trade][i][Buildables.smallfolk] = 1;
            CampBuildable[trade][i][Buildables.silver] = 1;
            CampBuildable[trade][i][Buildables.cloth] = 1;

            CampBuildable[intrigue][i][Buildables.silver] = 10000;
            CampBuildable[intrigue][i][Buildables.grains] = 1;
            CampBuildable[intrigue][i][Buildables.smallfolk] = 1;
            CampBuildable[intrigue][i][Buildables.silver] = 1;
            break;
        case 19:
            CampBuildable[battle][i][Buildables.silver] = 1;
            CampBuildable[battle][i][Buildables.cloth] = 1;
            CampBuildable[battle][i][Buildables.grains] = 1;
            CampBuildable[battle][i][Buildables.grains] = 1;

            CampBuildable[trade][i][Buildables.silver] = 10000;
            CampBuildable[trade][i][Buildables.smallfolk] = 1;
            CampBuildable[trade][i][Buildables.silver] = 1;
            CampBuildable[trade][i][Buildables.cloth] = 1;

            CampBuildable[intrigue][i][Buildables.silver] = 10000;
            CampBuildable[intrigue][i][Buildables.grains] = 1;
            CampBuildable[intrigue][i][Buildables.smallfolk] = 1;
            CampBuildable[intrigue][i][Buildables.silver] = 1;
            break;
        }
        Object.freeze(CampBuildable[battle][i]);
        Object.freeze(CampBuildable[trade][i]);
        Object.freeze(CampBuildable[intrigue][i]);
    }
    Object.freeze(CampBuildable);
    debugger;
});
