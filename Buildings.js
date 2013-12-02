Meteor.startup(function() {
    function timeInSeconds(days, hours, mins) {
        return (((days*24)+hours)*60)+mins)*60;
    }
    Buildings = {
        smithy: {
            builds : {
                shortsword : {
                    silver : function(inventory) {
                        return 60; // handle discount
                    },
                    seconds : function(inventory) { 
                        return timeCalc(0,3,0); // handle discount
                    },
                    wood : function(inventory) { return 2; },
                    iron : function(inventory) { return 2; }
                },
                longsword : {
                    silver : function(inventory) {
                        return 60; // handle discount
                    },
                    seconds : function(inventory) { 
                        return timeCalc(0,3,0); // handle discount
                    },
                    shortsword : function(inventory) { return 1; },
                    iron : function(inventory) { return 2; }
                },
                dagger : {
                    silver : function(inventory) {
                        return 60; // handle discount
                    },
                    seconds : function(inventory) { 
                        return timeCalc(0,3,0); // handle discount
                    },
                    wood : function(inventory) { return 3; },
                    iron : function(inventory) { return 2; },
                    cloth : function(inventory) { return 1; }
                },
                militia : {
                    silver : function(inventory) {
                        return 60; // handle discount
                    },
                    seconds : function(inventory) { 
                        return timeCalc(0,3,0); // handle discount
                    },
                    smallfolk : function(inventory) { return 1; }
                },
                axe : {
                    silver : function(inventory) {
                        return 190; // handle discount
                    },
                    seconds : function(inventory) { 
                        return timeCalc(0,6,0); // handle discount
                    },
                    wood : function(inventory) { return 3; },
                    iron : function(inventory) { return 3; },
                    dagger : function(inventory) { return 2; }
                },
                broadsword : {
                    silver : function(inventory) {
                        return 190; // handle discount
                    },
                    seconds : function(inventory) { 
                        return timeCalc(0,6,0); // handle discount
                    },
                    shortsword : function(inventory) { return 2; },
                    wood : function(inventory) { return 2; },
                    iron : function(inventory) { return 4; },
                },
                hefty_broadsword : {
                    silver : function(inventory) {
                        return 800; // handle discount
                    },
                    seconds : function(inventory) { 
                        return timeCalc(0,14,0); // handle discount
                    },
                    broadsword : function(inventory) { return 2; },
                    steel : function(inventory) { return 9; },
                    hard_wood : function(inventory) { return 5; },
                },
                masterwork_greatsword : {
                    silver : function(inventory) {
                        return 800; // handle discount
                    },
                    seconds : function(inventory) { 
                        return timeCalc(0,14,0); // handle discount
                    },
                    hefty_broadsword : function(inventory) { return 3; },
                    steel : function(inventory) { return 11; },
                    hard_wood : function(inventory) { return 7; },
                },

                furnace : {
                    seconds : function(inventory) {
                        // needs
                        return timeCalc(0,2,0);
                    }
                },
                anvil : {
                },
                molten_metal : {
                },
                armor_rack : {
                },
                hammer_tongs : {
                },
                bellows : {
                },
                weapons_rack : {
                },
                horseshoes : {
                    gold : function(inventory) {
                        return 5;
                    },
                    silver : function(inventory) {
                        return 5;
                    },
                    stone : function(inventory) {
                        return 1;
                    },
                    iron : function(inventory) {
                        return 1;
                    },
                },
            },
        },
        
        village_center : {
            builds : {
                stone : {
                    seconds : function(inventory) { 
                        return timeCalc(0,0,20); // handle discount
                    },
                },
                horse : {
                    seconds : function(inventory) { 
                        return timeCalc(0,0,20); // handle discount
                    },
                },
                iron : {
                    seconds : function(inventory) { 
                        return timeCalc(0,0,20); // handle discount
                    },
                },
                fish : {
                    seconds : function(inventory) { 
                        return timeCalc(0,0,20); // handle discount
                    },
                },
                fur : {
                    seconds : function(inventory) { 
                        return timeCalc(0,0,20); // handle discount
                    },
                },
                smallfolk : {
                    seconds : function(inventory) { 
                        return timeCalc(0,0,20); // handle discount
                    },
                },
                ore : {
                    seconds : function(inventory) { 
                        return timeCalc(0,0,20); // handle discount
                    },
                },
                wood : {
                    seconds : function(inventory) { 
                        return timeCalc(0,0,20); // handle discount
                    },
                },
                cloth : {
                    seconds : function(inventory) { 
                        return timeCalc(0,0,20); // handle discount
                    },
                },
                grains : {
                    seconds : function(inventory) { 
                        return timeCalc(0,0,20); // handle discount
                    },
                },
            }
        },

        market : {
            builds : {
                eavesdropper : {
                    silver : function(inventory) {
                        return 60; // handle discount
                    },
                    seconds : function(inventory) {
                        return timeCalc(0,3,0); // handle discount
                    },
                    smallfolk : function(inventory) { return 1; },
                },
                merchant : {
                    silver : function(inventory) {
                        return 60; // handle discount
                    },
                    seconds : function(inventory) {
                        return timeCalc(0,3,0); // handle discount
                    },
                    trader : function(inventory) { return 1; },
                    leather_bound_book : function(inventory) { return 1; },
                    silver_chain : function(inventory) { return 1; },
                },
                silver_brooch : {
                    silver : function(inventory) {
                        return 60; // handle discount
                    },
                    seconds : function(inventory) {
                        return timeCalc(0,3,0); // handle discount
                    },
                    ore : function(inventory) { return 4; },
                    cloth : function(inventory) { return 1; },
                },
                leather_bound_book : {
                    silver : function(inventory) {
                        return 60; // handle discount
                    },
                    seconds : function(inventory) {
                        return timeCalc(0,3,0); // handle discount
                    },
                    cloth : function(inventory) { return 2; },
                    fur : function(inventory) { return 2; },
                    ore : function(inventory) { return 1; },
                },
                silver_chain : {
                    silver : function(inventory) {
                        return 60; // handle discount
                    },
                    seconds : function(inventory) {
                        return timeCalc(0,3,0); // handle discount
                    },
                    ore : function(inventory) { return 3; },
                    fur : function(inventory) { return 1; },
                    cloth : function(inventory) { return 1; },
                },
                gold_ring : {
                    silver : function(inventory) {
                        return 60; // handle discount
                    },
                    seconds : function(inventory) {
                        return timeCalc(0,3,0); // handle discount
                    },
                    ore : function(inventory) { return 5; },
                },
                stone : {
                    silver : function(inventory) {
                        return 10; // handle discount
                    },
                    seconds : function(inventory) {
                        return timeCalc(0,1,0); // handle discount
                    },
                    grains : function(inventory) { return 4; },
                },
                ore : {
                    silver : function(inventory) {
                        return 10; // handle discount
                    },
                    seconds : function(inventory) {
                        return timeCalc(0,1,0); // handle discount
                    },
                    smallfolk : function(inventory) { return 4; },
                },
                wood : {
                    silver : function(inventory) {
                        return 10; // handle discount
                    },
                    seconds : function(inventory) {
                        return timeCalc(0,1,0); // handle discount
                    },
                    horse : function(inventory) { return 4; },
                },
                iron : {
                    silver : function(inventory) {
                        return 10; // handle discount
                    },
                    seconds : function(inventory) {
                        return timeCalc(0,1,0); // handle discount
                    },
                    fur : function(inventory) { return 4; },
                },
                alloy_chain : {
                    silver : function(inventory) {
                        return 800; // handle discount
                    },
                    seconds : function(inventory) {
                        return timeCalc(0,15,0); // handle discount
                    },
                    silver_chain : function(inventory) { return 5; },
                    lead : function(inventory) { return 10; },
                    precious_ore : function(inventory) { return 10; },
                },
                alloy_pendant : {
                    silver : function(inventory) {
                        return 800; // handle discount
                    },
                    seconds : function(inventory) {
                        return timeCalc(0,15,0); // handle discount
                    },
                    gold_necklace : function(inventory) { return 2; },
                    precious_ore : function(inventory) { return 9; },
                    lead : function(inventory) { return 5; }
                }
            }
        },

        embassy : {
            builds : {
                eavesdropper : {
                    silver : function(inventory) {
                        return 60; // handle discount
                    },
                    seconds : function(inventory) { 
                        return timeCalc(0,3,0); // handle discount
                    },
                    smallfolk : function(inventory) { return 1; },
                },
                milk_of_the_poppy : {
                    silver : function(inventory) {
                        return 60; // handle discount
                    },
                    seconds : function(inventory) { 
                        return timeCalc(0,3,0); // handle discount
                    },
                    grains : function(inventory) { return 4; },
                    fish : function(inventory) { return 2; },
                },
                linen_clothing : {
                    silver : function(inventory) {
                        return 60; // handle discount
                    },
                    seconds : function(inventory) { 
                        return timeCalc(0,3,0); // handle discount
                    },
                    cloth : function(inventory) { return 4; },
                    fur : function(inventory) { return 2; },
                },
                emissary : {
                    silver : function(inventory) {
                        return 200; // handle discount
                    },
                    seconds : function(inventory) { 
                        return timeCalc(0,6,0); // handle discount
                    },
                    eavesdropper : function(inventory) { return 1; },
                    silk_garment : function(inventory) { return 2; },
                    fur : function(inventory) { return 3; },
                },
                dreamwine : {
                    silver : function(inventory) {
                        return 200; // handle discount
                    },
                    seconds : function(inventory) { 
                        return timeCalc(0,6,0); // handle discount
                    },
                    milk_of_the_poppy : function(inventory) { return 1; },
                    grains : function(inventory) { return 8; },
                    fish : function(inventory) { return 4; },
                },
                silk_garment : {
                    silver : function(inventory) {
                        return 200; // handle discount
                    },
                    seconds : function(inventory) { 
                        return timeCalc(0,6,0); // handle discount
                    },
                    linen_clothing : function(inventory) { return 1; },
                    cloth : function(inventory) { return 8; },
                    fur : function(inventory) { return 4; },
                },
                nightshade : {
                    silver : function(inventory) {
                        return 800; // handle discount
                    },
                    seconds : function(inventory) { 
                        return timeCalc(0,15,0); // handle discount
                    },
                    dreamwine : function(inventory) { return 2; },
                    dyed_textile : function(inventory) { return 7; },
                    fine_wood : function(inventory) { return 7; },
                },
                delicate_silk_garment : {
                    silver : function(inventory) {
                        return 800; // handle discount
                    },
                    seconds : function(inventory) { 
                        return timeCalc(0,15,0); // handle discount
                    },
                    silk_garment : function(inventory) { return 2; },
                    dyed_textile : function(inventory) { return 10; },
                    precious_ore : function(inventory) { return 4; },
                },
            }
        },

        sept : {
            builds : {
                fresh_baked_bread : {
                    silver : function(inventory) {
                        return 10; // handle discount
                    },
                    seconds : function(inventory) {
                        return timeCalc(0,1,0); // handle discount
                    },
                    fish : function(inventory) { return 2; },
                    grains : function(inventory) { return 2; },
                    wood : function(inventory) { return 2; },
                },
                devout : {
                    silver : function(inventory) {
                        return 60; // handle discount
                    },
                    seconds : function(inventory) {
                        return timeCalc(0,3,0); // handle discount
                    },
                    smallfolk : function(inventory) { return 1; },
                    fish : function(inventory) { return 5; },
                    linen_clothing : function(inventory) { return 1; }
                },
                intrigue_boon : {
                    silver : function(inventory) {
                        return 14; // handle discount
                    },
                    seconds : function(inventory) {
                        return timeCalc(0,0,45); // handle discount
                    },
                    fish : function(inventory) { return 2; },
                    grains : function(inventory) { return 2; },
                    fur : function(inventory) { return 2; }
                },
                trade_boon : {
                    silver : function(inventory) {
                        return 14; // handle discount
                    },
                    seconds : function(inventory) {
                        return timeCalc(0,0,45); // handle discount
                    },
                    fish : function(inventory) { return 2; },
                    grains : function(inventory) { return 2; },
                    ore : function(inventory) { return 2; }
                },
                battle_boon : {
                    silver : function(inventory) {
                        return 14; // handle discount
                    },
                    seconds : function(inventory) {
                        return timeCalc(0,0,45); // handle discount
                    },
                    fish : function(inventory) { return 2; },
                    grains : function(inventory) { return 2; },
                    iron : function(inventory) { return 2; }
                },
                septa : {
                    silver : function(inventory) {
                        return 150; // handle discount
                    },
                    seconds : function(inventory) {
                        return timeCalc(0,5,0); // handle discount
                    },
                    devout : function(inventory) { return 1; },
                    wood_shield : function(inventory) { return 1; },
                    silver_brooch : function(inventory) { return 1; },
                },
                ceremonial_dagger : {
                    silver : function(inventory) {
                        return 800; // handle discount
                    },
                    seconds : function(inventory) {
                        return timeCalc(0,15,0); // handle discount
                    },
                    oracle : function(inventory) { return 1; },
                    steel : function(inventory) { return 5; },
                    precious_ore : function(inventory) { return 6; },
                },
                treasurers_imprint : {
                    silver : function(inventory) {
                        return 500; // handle discount
                    },
                    seconds : function(inventory) {
                        return timeCalc(0,5,0); // handle discount
                    },
                    merchants_mark : function(inventory) { return 2; },
                    frauds_imprint : function(inventory) { return 2; },
                    bailiffs_mark : function(inventory) { return 2; },
                },
            }
        },
        practice_yard : {
            builds : {
                shortbow : {
                    silver : function(inventory) {
                        return 60; // handle discount
                    },
                    seconds : function(inventory) { 
                        return timeCalc(0,3,0); // handle discount
                    },
                    wood : function(inventory) { return 3; },
                    cloth : function(inventory) { return 2; },
                    fur : function(inventory) { return 1; },
                },
                halfhelm : {
                    silver : function(inventory) {
                        return 60; // handle discount
                    },
                    seconds : function(inventory) { 
                        return timeCalc(0,3,0); // handle discount
                    },
                    iron : function(inventory) { return 5; },
                    wood : function(inventory) { return 1; },
                },
                barred_helm : {
                    silver : function(inventory) {
                        return 200; // handle discount
                    },
                    seconds : function(inventory) { 
                        return timeCalc(0,6,0); // handle discount
                    },
                    halfhelm : function(inventory) { return 2; },
                    fur : function(inventory) { return 5; },
                    wood : function(inventory) { return 1; },
                },
                bowman : {
                    silver : function(inventory) {
                        return 200; // handle discount
                    },
                    seconds : function(inventory) { 
                        return timeCalc(0,6,0); // handle discount
                    },
                    shortbow : function(inventory) { return 3; },
                    militia : function(inventory) { return 5; },
                },
            }
        },
        shop : {
            builds : {
                leather_armor : {
                    // always available
                    silver : function(inventory) {
                        return 450;
                    },
                },
                barred_helm : {
                    // sometimes
                    silver : function(inventory) {
                        return 1000; // handle discount
                    },
                },
            }
        }
    };
});
