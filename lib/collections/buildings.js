function timeInSeconds(days, hours, mins) {
    return ((((days*24)+hours)*60)+mins)*60;
};

Buildings = new Enums.Enum({
    smithy: {
        builds : {
            decorative_blade : {
                silver : function(inventory) {
                    return 10; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,0,0.5); // handle discount
                },
                iron : function(inventory) { return 1; },
                wood : function(inventory) { return 1; },
                ore : function(inventory) { return 2; }
            },
            shortsword : {
                silver : function(inventory) {
                    return 60; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
                },
                wood : function(inventory) { return 2; },
                iron : function(inventory) { return 2; }
            },
            longsword : {
                silver : function(inventory) {
                    return 60; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
                },
                shortsword : function(inventory) { return 1; },
                iron : function(inventory) { return 2; }
            },
            dagger : {
                silver : function(inventory) {
                    return 60; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
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
                    return timeInSeconds(0,3,0); // handle discount
                },
                smallfolk : function(inventory) { return 1; }
            },
            axe : {
                silver : function(inventory) {
                    return 190; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,6,0); // handle discount
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
                    return timeInSeconds(0,6,0); // handle discount
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
                    return timeInSeconds(0,14,0); // handle discount
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
                    return timeInSeconds(0,14,0); // handle discount
                },
                hefty_broadsword : function(inventory) { return 3; },
                steel : function(inventory) { return 11; },
                hard_wood : function(inventory) { return 7; },
            }
        },
        upgradeData : {
            // minimum player level to build
            minPlayerLevel:0,
            seconds : function(inventory) {
                // needs
                return timeInSeconds(0,2,0);
            },        
            upgrades: [
                {
                    furnace: {
                        maxUpgradeCount: 4,
                        storables: {

                        },
                        benefit: {
                            //battle +1
                            //+3% improved battle weapons
                        }
                    },
                    anvil: {
                        maxUpgradeCount: 1,
                        storables: {

                        },
                        benefit: {
                            //battle +1
                            // enables militia
                        }
                    }
                },
                {
                    molten_metal: {
                        maxUpgradeCount: 4,
                        storables: {

                        },
                        benefit: {
                            //battle +1
                            // -3% silver battle weapons
                        }
                    },
                    armor_rack: {
                        maxUpgradeCount: 4,
                        storables: {

                        },
                        benefit: {
                            //battle +2
                            // -3% silver battle weapons
                            // enables axe
                        }
                    },
                    hammer_tongs: {
                        maxUpgradeCount: 1,
                        storables: {
                            silver: function (inventory) {
                                return 550; // handle discount
                            },
                            stone: function (inventory) {
                                return 1;
                            },
                            iron: function (inventory) {
                                return 1;
                            },
                        },
                        benefit: {
                            //battle +2
                            // -3% silver battle weapons
                            // enables broadsword, hefty broadsword
                        }
                    }
                },
                {
                    bellows: {
                        maxUpgradeCount: 4,
                        storables: {
                            silver: function (inventory) {
                                return 550; // handle discount
                            },
                            stone: function (inventory) {
                                return 1;
                            },
                            iron: function (inventory) {
                                return 1;
                            }
                        },
                        benefit: {
                            //battle +3
                            // -3% time battle weapons
                        }
                    },
                    weapons_rack: {
                        maxUpgradeCount: 5,
                        storables: {
                            silver: function (inventory) {
                                return 550; // handle discount
                            },
                            stone: function (inventory) {
                                return 1;
                            },
                            iron: function (inventory) {
                                return 1;
                            }
                        },
                        benefit: {
                            //battle +3
                            // +1% time battle when attacking
                            // enables master greatsword
                        }
                    },
                    horseshoes: {
                        unlock: {
                            gold: function (inventory) {
                                return 5;
                            }
                        },
                        maxUpgradeCount: 5,
                        storables: {
                            silver: function (inventory) {
                                return 5;
                            },
                            stone: function (inventory) {
                                return 1;
                            },
                            iron: function (inventory) {
                                return 1;
                            }
                        },
                        benefit: {
                            // +3 battle
                            // +3% battle attacks
                        }
                    }
                }
            ]
        },
    },

    village_center : {
        builds : {
            stone : {
                seconds : function(inventory) {
                    return timeInSeconds(0,0,20); // handle discount
                },
            },
            horse : {
                seconds : function(inventory) {
                    return timeInSeconds(0,0,20); // handle discount
                },
            },
            iron : {
                seconds : function(inventory) {
                    return timeInSeconds(0,0,20); // handle discount
                },
            },
            fish : {
                seconds : function(inventory) {
                    return timeInSeconds(0,0,20); // handle discount
                },
            },
            fur : {
                seconds : function(inventory) {
                    return timeInSeconds(0,0,20); // handle discount
                },
            },
            smallfolk : {
                seconds : function(inventory) {
                    return timeInSeconds(0,0,20); // handle discount
                },
            },
            ore : {
                seconds : function(inventory) {
                    return timeInSeconds(0,0,20); // handle discount
                },
            },
            wood : {
                seconds : function(inventory) {
                    return timeInSeconds(0,0,20); // handle discount
                },
            },
            cloth : {
                seconds : function(inventory) {
                    return timeInSeconds(0,0,20); // handle discount
                }
            },
            grains : {
                seconds : function(inventory) {
                    return timeInSeconds(0,0,20); // handle discount
                }
            }
        },
        upgradeData : {
            seconds : function(inventory) {
                return timeInSeconds(0,1,50); // handle discount
            },
            minPlayerLevel:0,

            upgrades: [
                {

                },
                {
                    brewhouse: {
                        unlock: {
                            gold: function (inventory) {
                                return 10;
                            },
                        },

                        maxUpgradeCount: 5,
                        storables: {
                            silver: function (inventory) {
                                return 1000;
                            },
                            cloth: function (inventory) {
                                return 1;
                            }
                        },
                        benefit: {}
                    }
                }
            ]
        }
    },

    embassy : {
        builds : {
            eavesdropper : {
                silver : function(inventory) {
                    return 60; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
                },
                smallfolk : function(inventory) { return 1; }
            },
            milk_of_the_poppy : {
                silver : function(inventory) {
                    return 60; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
                },
                grains : function(inventory) { return 4; },
                fish : function(inventory) { return 2; }
            },
            linen_clothing : {
                silver : function(inventory) {
                    return 60; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
                },
                cloth : function(inventory) { return 4; },
                fur : function(inventory) { return 2; }
            },
            emissary : {
                silver : function(inventory) {
                    return 200; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,6,0); // handle discount
                },
                eavesdropper : function(inventory) { return 1; },
                silk_garment : function(inventory) { return 2; },
                fur : function(inventory) { return 3; }
            },
            dreamwine : {
                silver : function(inventory) {
                    return 200; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,6,0); // handle discount
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
                    return timeInSeconds(0,6,0); // handle discount
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
                    return timeInSeconds(0,15,0); // handle discount
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
                    return timeInSeconds(0,15,0); // handle discount
                },
                silk_garment : function(inventory) { return 2; },
                dyed_textile : function(inventory) { return 10; },
                precious_ore : function(inventory) { return 4; }
            }
        },
        upgradeData : {
            seconds : function(inventory) {
                return timeInSeconds(0,1,50); // handle discount
            },
            minPlayerLevel:5,

            upgrades: [
                {
                    holding_cell: {
                        maxUpgradeCount: 6,
                        storables: {

                        },
                        benefit: {
                            //battle +1
                            //+3% improved battle weapons
                        }
                    },
                    meeting_hall: {
                        maxUpgradeCount: 5,
                        storables: {

                        },
                        benefit: {
                            //battle +1
                            //+3% improved battle weapons
                        }
                    },
                    guest_house: {
                        maxUpgradeCount: 1,
                        storables: {

                        },
                        benefit: {
                            //battle +1
                            //+3% improved battle weapons
                        }
                    }
                },
                {
                    fortified_gate: {
                        maxUpgradeCount: 1,
                        storables: {

                        },
                        benefit: {
                            //battle +1
                            //+3% improved battle weapons
                        }
                    }
                },
                {
                    balcony: {

                        maxUpgradeCount: 1,
                        storables: {
                            silver: function (inventory) {
                                return 1000;
                            },
                            cloth: function (inventory) {
                                return 1;
                            }
                        },
                        benefit: {

                        }
                    },
                    guardhouse: {
                        maxUpgradeCount: 6,
                        storables: {
                            silver: function (inventory) {
                                return 1000;
                            },
                            cloth: function (inventory) {
                                return 1;
                            }
                        },
                        benefit: {

                        }
                    },
                    foreign_diplomat: {
                        unlock: {
                            gold: function (inventory) {
                                return 5;
                            }
                        },

                        maxUpgradeCount: 5,
                        storables: {
                            silver: function (inventory) {
                                return 1000;
                            },
                            cloth: function (inventory) {
                                return 1;
                            }
                        },
                        benefit: {

                        }
                    }
                }
            ]
        }
    },

    market : {
        builds : {
            trader : {
                silver : function(inventory) {
                    return 60; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
                },
                smallfolk : function(inventory) { return 1; },
            },
            merchant : {
                silver : function(inventory) {
                    return 60; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
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
                    return timeInSeconds(0,3,0); // handle discount
                },
                ore : function(inventory) { return 4; },
                cloth : function(inventory) { return 1; },
            },
            leather_bound_book : {
                silver : function(inventory) {
                    return 60; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
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
                    return timeInSeconds(0,3,0); // handle discount
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
                    return timeInSeconds(0,3,0); // handle discount
                },
                ore : function(inventory) { return 5; },
            },
            /*
            stone : {
                silver : function(inventory) {
                    return 7; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,1,0); // handle discount
                },
                grains : function(inventory) { return 4; },
                exchange_0 : function(inventory) { return 1; },
            },
            ore : {
                silver : function(inventory) {
                    return 7; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,1,0); // handle discount
                },
                smallfolk : function(inventory) { return 4; },
                exchange_0 : function(inventory) { return 1; },
            },
            wood : {
                silver : function(inventory) {
                    return 7; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,1,0); // handle discount
                },
                horse : function(inventory) { return 4; },
                exchange_0 : function(inventory) { return 1; },
            },
            iron : {
                silver : function(inventory) {
                    return 7; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,1,0); // handle discount
                },
                fur : function(inventory) { return 4; },
                exchange_0 : function(inventory) { return 1; },
            },
            */
            alloy_chain : {
                silver : function(inventory) {
                    return 800; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,15,0); // handle discount
                },
                silver_chain : function(inventory) { return 5; },
                lead : function(inventory) { return 10; },
                precious_ore : function(inventory) { return 10; },
                exchange_0 : function(inventory) { return 1; },
            },
            alloy_pendant : {
                silver : function(inventory) {
                    return 800; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,15,0); // handle discount
                },
                gold_necklace : function(inventory) { return 2; },
                precious_ore : function(inventory) { return 9; },
                lead : function(inventory) { return 5; },
                exchange_0 : function(inventory) { return 1; },
            }
        },
        upgradeData : {
            seconds : function(inventory) {
                return timeInSeconds(0,1,50); // handle discount
            },
            minPlayerLevel:5,

            upgrades: [
                {

                },
                {
                    exchange: {
                        unlock: {
                            gold: function (inventory) {
                                return 5;
                            },
                        },

                        maxUpgradeCount: 5,
                        storables: {
                            silver: function (inventory) {
                                return 1000;
                            },
                            cloth: function (inventory) {
                                return 1;
                            },
                        },
                        benefit: {

                        }
                    },
                }
            ]
        }
    },

    sept : {
        builds : {
            fresh_baked_bread : {
                silver : function(inventory) {
                    return 10; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,1,0); // handle discount
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
                    return timeInSeconds(0,3,0); // handle discount
                },
                smallfolk : function(inventory) { return 1; },
                fish : function(inventory) { return 5; },
                linen_clothing : function(inventory) { return 1; }
            },
            intrigue_boon : {
                silver : function(inventory) {
                    return 15; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,1,0); // handle discount
                },
                fish : function(inventory) { return 2; },
                grains : function(inventory) { return 2; },
                fur : function(inventory) { return 2; }
            },
            trade_boon : {
                silver : function(inventory) {
                    return 15; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,1,0); // handle discount
                },
                fish : function(inventory) { return 2; },
                grains : function(inventory) { return 2; },
                ore : function(inventory) { return 2; }
            },
            battle_boon : {
                silver : function(inventory) {
                    return 15; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,1,0); // handle discount
                },
                fish : function(inventory) { return 2; },
                grains : function(inventory) { return 2; },
                iron : function(inventory) { return 2; }
            },
            septa : {
                silver : function(inventory) {
                    return 200; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,6,0); // handle discount
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
                    return timeInSeconds(0,15,0); // handle discount
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
                    return timeInSeconds(0,5,0); // handle discount
                },
                merchants_mark : function(inventory) { return 2; },
                frauds_imprint : function(inventory) { return 2; },
                bailiffs_mark : function(inventory) { return 2; },
            },
        },
        upgradeData : {
            seconds : function(inventory) {
                return timeInSeconds(0,1,50); // handle discount
            },
            minPlayerLevel:5,

            upgrades: [
                {

                },
                {
                    xxx: {
                        unlock: {
                            gold: function (inventory) {
                                return 5;
                            },
                        },

                        maxUpgradeCount: 5,
                        storables: {
                            silver: function (inventory) {
                                return 1000;
                            },
                            cloth: function (inventory) {
                                return 1;
                            },
                        },
                        benefit: {

                        }
                    }
                }
            ]
        }
    },
    godswood : {
        builds : {
            mead : {
                silver : function(inventory) {
                    return 10; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,1,0); // handle discount
                },
                grains : function(inventory) { return 3; },
                wood : function(inventory) { return 1; },
                stone : function(inventory) { return 1; }
            },
            common_boon : {
                silver : function(inventory) {
                    return 7; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,0,35); // handle discount
                },
                fish : function(inventory) { return 1; },
                grains : function(inventory) { return 1; },
                fur : function(inventory) { return 1; }
            },
            uncommon_boon : {
                silver : function(inventory) {
                    return 15; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,1,0); // handle discount
                },
                fish : function(inventory) { return 2; },
                grains : function(inventory) { return 2; },
                horse : function(inventory) { return 2; }
            },
            seer : {
                silver : function(inventory) {
                    return 60; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
                },
                smallfolk : function(inventory) { return 1; },
                fish : function(inventory) { return 5; },
                leather_bound_book : function(inventory) { return 1; }
            },
            woods_witch: {
                silver : function(inventory) {
                    return 200; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,6,0); // handle discount
                },
                seer : function(inventory) { return 1; },
                milk_of_the_poppy : function(inventory) { return 1; },
                dagger : function(inventory) { return 1; }
            },
            rare_boon : {
                silver : function(inventory) {
                    return 30; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,2,0); // handle discount
                },
                fish : function(inventory) { return 4; },
                grains : function(inventory) { return 4; },
                stone : function(inventory) { return 4; },
            },
            forest_armor : {
                silver : function(inventory) {
                    return 800; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,15,0); // handle discount
                },
                weirwood : function(inventory) { return 5; },
                lead : function(inventory) { return 10; },
                breastplate : function(inventory) { return 2; },
            },
            warriors_imprint : {
                silver : function(inventory) {
                    return 500; // hanoublle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,5,0); // handle discount
                },
                blacksmith_mark : function(inventory) { return 2; },
                raider_notch : function(inventory) { return 2; },
                symbol_of_help : function(inventory) { return 2; },
            },
        }
    },
    rhllor_temple : {
        builds : {
            nettle_poultice : {
                silver : function(inventory) {
                    return 50; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
                },
                grains : function(inventory) { return 4; },
                fish : function(inventory) { return 3; },
                cloth : function(inventory) { return 2; }
            },
            red_robe : {
                silver : function(inventory) {
                    return 60; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
                },
                cloth : function(inventory) { return 3; },
                ore : function(inventory) { return 1; },
                grains : function(inventory) { return 2; }
            },
            incense : {
                silver : function(inventory) {
                    return 20; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,1,20); // handle discount
                },
                black_ash : function(inventory) { return 1; },
                pure_water : function(inventory) { return 1; },
                fine_wood : function(inventory) { return 1; }
            },

            // just a chance
            flickering_fire : {
                silver : function(inventory) {
                    return 60; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
                },
                wood : function(inventory) { return 3; },
                grains : function(inventory) { return 2; },
                iron : function(inventory) { return 1; }
            },
            asshai_book: {
                silver : function(inventory) {
                    return 200; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,6,0); // handle discount
                },
                leather_bound_book : function(inventory) { return 1; },
                milk_of_the_poppy : function(inventory) { return 1; },
                longsword : function(inventory) { return 1; }
            },
            offering : {
                silver : function(inventory) {
                    return 2500; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(1,4,0); // handle discount
                },
                ceremonial_bowl : function(inventory) { return 3; },
                ceremonial_dagger : function(inventory) { return 2; },
                sacrifice : function(inventory) { return 9; },
            },
            red_priest : {
                silver : function(inventory) {
                    return 200; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,6,0); // handle discount
                },
                red_robe : function(inventory) { return 2; },
                smallfolk : function(inventory) { return 2; },
                grains : function(inventory) { return 4; },
            },
            defense_boon : {
                silver : function(inventory) {
                    return 15; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,0,45); // handle discount
                },
                fish : function(inventory) { return 2; },
                horse : function(inventory) { return 2; },
                smallfolk : function(inventory) { return 2; },
            },
            // just a chance
            pyre : {
                silver : function(inventory) {
                    return 800; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,15,0); // handle discount
                },
                hard_wood : function(inventory) { return 2; },
                fine_wood : function(inventory) { return 2; },
                wildfire : function(inventory) { return 1; }
            },
            attack_boon : {
                silver : function(inventory) {
                    return 20; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,1,30); // handle discount
                },
                fish : function(inventory) { return 3; },
                grains : function(inventory) { return 3; },
                smallfolk : function(inventory) { return 3; },
            },
            oracle : {
                silver : function(inventory) {
                    return 450; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,0,12); // handle discount
                },
                red_priest : function(inventory) { return 1; },
                woods_witch : function(inventory) { return 1; },
                septa : function(inventory) { return 1; },
            },
            shadowbinders_mask : {
                silver : function(inventory) {
                    return 800; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,15,0); // handle discount
                },
                dyed_textile : function(inventory) { return 8; },
                precious_ore : function(inventory) { return 5; },
                red_priest : function(inventory) { return 2; },
            },
            mark_of_the_little_birds : {
                silver : function(inventory) {
                    return 500; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,5,0); // handle discount
                },
                agents_sign : function(inventory) { return 2; },
                saboteurs_sign : function(inventory) { return 2; },
                cutpurses_sign : function(inventory) { return 2; },
            },
        }
    },
    holdfast : {
        builds : {
            doublet : {
                silver : function(inventory) {
                    return 60; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
                },
                cloth : function(inventory) { return 2; },
                fur : function(inventory) { return 2; },
            },
            leather_armor : {
                silver : function(inventory) {
                    return 60; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
                },
                doublet : function(inventory) { return 1; },
                fur : function(inventory) { return 1; },
                cloth : function(inventory) { return 1; },
            },
            scale_armor : {
                silver : function(inventory) {
                    return 60; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
                },
                doublet : function(inventory) { return 1; },
                iron : function(inventory) { return 2; },
            },
            jerkin : {
                silver : function(inventory) {
                    return 200; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,6,0); // handle discount
                },
                doublet : function(inventory) { return 2; },
                cloth : function(inventory) { return 3; },
                fur : function(inventory) { return 3; },
                earthworks_0 : function(inventory) { return 1; }
            },
            splint_armor : {
                silver : function(inventory) {
                    return 200; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,6,0); // handle discount
                },
                scale_armor : function(inventory) { return 2; },
                iron : function(inventory) { return 4; },
                cloth : function(inventory) { return 2; },
            },
            pikeman : {
                silver : function(inventory) {
                    return 200; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,6,0); // handle discount
                },
                militia : function(inventory) { return 3; },
                pike : function(inventory) { return 3; }
            },
            grand_shield : {
                silver : function(inventory) {
                    return 800; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,15,0); // handle discount
                },
                metal_shield : function(inventory) { return 2; },
                steel : function(inventory) { return 6; },
                dyed_textile : function(inventory) { return 6; }
            },
            masterwork_splint_mail : {
                silver : function(inventory) {
                    return 800; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,15,0); // handle discount
                },
                splint_armor : function(inventory) { return 2; },
                steel : function(inventory) { return 9; },
                dyed_textile : function(inventory) { return 5; },
            },
        },
        upgradeData : {
            seconds : function(inventory) {
                return timeInSeconds(0,1,50); // handle discount
            },
            minPlayerLevel:5,

            upgrades: [
                {
                    palisades : {
                        // +1 battle
                        // +2% battle armor
                        silver : function(inventory) {
                            return 600; // handle discount
                        },
                        stone : function(inventory) { return 1; },
                        grain : function(inventory) { return 1; },
                    },
                    arrowslits : {
                        // +2 battle
                        // splint armor, masterwork splint armor
                        silver : function(inventory) {
                            return 600; // handle discount
                        },
                        stone : function(inventory) { return 1; },
                        grain : function(inventory) { return 1; },
                    },

                },
                {
                    earthworks: {
                        unlock: {
                            gold: function (inventory) {
                                return 5;
                            },
                        },

                        maxUpgradeCount: 5,
                        storables: {
                            silver: function (inventory) {
                                return 600;
                            },
                            stone : function(inventory) { return 1; },
                            grain : function(inventory) { return 1; },
                        },
                        benefit: {
                            // +2 battle
                            // jerkin

                        }
                    },
                }
            ]
        }
    },
    workshop : {
        builds : {
            roughspun_cloak : {
                silver : function(inventory) {
                    return 60; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
                },
                cloth : function(inventory) { return 4; },
                fur : function(inventory) { return 2; },
            },
            dirk : {
                silver : function(inventory) {
                    return 60; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
                },
                iron : function(inventory) { return 2; },
                wood : function(inventory) { return 3; },
                cloth : function(inventory) { return 1; },
            },
            saboteur : {
                silver : function(inventory) {
                    return 200; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,6,0); // handle discount
                },
                eavesdropper : function(inventory) { return 1; },
                satin_cloak : function(inventory) { return 1; },
                blindeye : function(inventory) { return 1; },
            },
            satin_cloak : {
                silver : function(inventory) {
                    return 200; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,6,0); // handle discount
                },
                roughspun_cloak : function(inventory) { return 1; },
                cloth : function(inventory) { return 4; },
                fur : function(inventory) { return 8; }
            },
            blindeye : {
                silver : function(inventory) {
                    return 200; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,6,0); // handle discount
                },
                dirk : function(inventory) { return 1; },
                grains : function(inventory) { return 8; },
                fish : function(inventory) { return 4; },
            },
            cart_of_tools : {
                silver : function(inventory) {
                    return 450; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                cart : function(inventory) { return 1; },
                dirk : function(inventory) { return 3; },
                blindeye : function(inventory) { return 3; }
            },
            delicate_satin_cloak : {
                silver : function(inventory) {
                    return 800; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,15,0); // handle discount
                },
                satin_cloak : function(inventory) { return 2; },
                dyed_textile : function(inventory) { return 10; },
                lead : function(inventory) { return 4; }
            },
            widows_blood : {
                silver : function(inventory) {
                    return 800; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,15,0); // handle discount
                },
                blindeye : function(inventory) { return 2; },
                lead : function(inventory) { return 7; },
                dyed_textile : function(inventory) { return 7; },
            },
        }
    },
    treasury : {
        builds : {
            vellum_scroll : {
                silver : function(inventory) {
                    return 200; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,6,0); // handle discount
                },
                parchment_scroll : function(inventory) { return 1; },
                leather_bound_book : function(inventory) { return 1; },
                cloth : function(inventory) { return 6; }
            },
            bill_of_sale : {
                silver : function(inventory) {
                    return 200; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,6,0); // handle discount
                },
                coinage : function(inventory) { return 1; },
                leather_bound_book : function(inventory) { return 1; },
                cloth : function(inventory) { return 6; }
            },
            lockbox : {
                silver : function(inventory) {
                    return 200; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,6,0); // handle discount
                },
                purse : function(inventory) { return 1; },
                ore : function(inventory) { return 6; },
            },
            gold_torc : {
                silver : function(inventory) {
                    return 200; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,6,0); // handle discount
                },
                silver_torc : function(inventory) { return 1; },
                gold_ring : function(inventory) { return 1; },
                ore : function(inventory) { return 6; }
            },
            gold_bracelet : {
                silver : function(inventory) {
                    return 200; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,6,0); // handle discount
                },
                silver_bracelet : function(inventory) { return 1; },
                gold_ring : function(inventory) { return 1; },
                ore : function(inventory) { return 6; },
            },
            gold_necklace : {
                silver : function(inventory) {
                    return 200; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,6,0); // handle discount
                },
                silver_necklace : function(inventory) { return 1; },
                gold_ring : function(inventory) { return 1; },
                ore : function(inventory) { return 6; },
            },
            secure_lockbox : {
                silver : function(inventory) {
                    return 800; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,15,0); // handle discount
                },
                lockbox : function(inventory) { return 2; },
                steel : function(inventory) { return 5; },
                precious_ore : function(inventory) { return 9; }
            },
            dark_diamond_ring : {
                silver : function(inventory) {
                    return 800; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,15,0); // handle discount
                },
                gold_ring : function(inventory) { return 6; },
                precious_ore : function(inventory) { return 10; },
                steel : function(inventory) { return 4; },
            },
        },
        upgradeData : {
            vault_0 : {
                // +2 trade
                // -2% silver trade weapons
                ladder_fabrication_0 : function(inventory) { return 1; },
                silver : function(inventory) {
                    return 380; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,0,7,30); // handle discount
                },
                ore : function(inventory) { return 1; },
                fur : function(inventory) { return 1; },
            },
            vault_1 : {
                // +2 trade
                // -2% silver trade weapons
                ladder_fabrication_0 : function(inventory) { return 1; },
                silver : function(inventory) {
                    return 760; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,0,10); // handle discount
                },
                ore : function(inventory) { return 1; },
                fur : function(inventory) { return 1; },
            },
            vault_2 : {
                // +2 trade
                // -2% silver trade weapons
                ladder_fabrication_0 : function(inventory) { return 1; },
                silver : function(inventory) {
                    return 1040; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,0,12,30); // handle discount
                },
                ore : function(inventory) { return 1; },
                fur : function(inventory) { return 1; },
            },
        }
    },
    // tyrell
    arbor : {
        builds : {
            grains : {
                seconds : function(inventory) {
                    return timeInSeconds(0,0,20); // handle discount
                },
            },
            /*
            horse : {
                seconds : function(inventory) {
                    return timeInSeconds(0,0,20); // handle discount
                },
                grains : function(inventory) { return 3; }
            },
            */
            standard_carrier : {
                silver : function(inventory) {
                    return 60; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
                },
                militia : function(inventory) { return 1; },
                eavesdropper : function(inventory) { return 1; },
                trader : function(inventory) { return 1; },
            },
            arbor_gold : {
                silver : function(inventory) {
                    return 75; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,4,0); // handle discount
                },
                mead : function(inventory) { return 3; },
                grains : function(inventory) { return 15; },
            },
            black_diamond_ring : {
                silver : function(inventory) {
                    return 450; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                gold_ring : function(inventory) { return 5; },
                leather_bound_book : function(inventory) { return 3; },
            },
            greathelm : {
                silver : function(inventory) {
                    return 450; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                barred_helm : function(inventory) { return 2; },
                iron : function(inventory) { return 8; },
                fur : function(inventory) { return 6; },
            },
            poisoned_cask : {
                silver : function(inventory) {
                    return 450; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                blindeye : function(inventory) { return 2; },
                wood : function(inventory) { return 8; },
                iron : function(inventory) { return 6; }
            },
            pure_water : {
                silver : function(inventory) {
                    return 20; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,2,0); // handle discount
                },
                grains : function(inventory) { return 4; },
                wood : function(inventory) { return 4; },
                cloth : function(inventory) { return 4; },
            },
            bascinet : {
                silver : function(inventory) {
                    return 2500; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(1,4,0); // handle discount
                },
                greathelm : function(inventory) { return 3; },
                lead : function(inventory) { return 15; },
                steel : function(inventory) { return 15; },
            },
            undetectable_poison : {
                silver : function(inventory) {
                    return 2500; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(1,4,0); // handle discount
                },
                poisoned_cask : function(inventory) { return 3; },
                fine_wood : function(inventory) { return 15; },
                hard_wood : function(inventory) { return 15; },
            },
            deadly_poison : {
                // chance - evolve
                silver : function(inventory) {
                    return 20000; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                undetectable_poison : function(inventory) { return 1; },
                widows_blood : function(inventory) { return 2; },
                // adventure in oldtown
                intent_scholar : function(inventory) { return 4; },
            },
            seal_of_the_rose : {
                silver : function(inventory) {
                    return 5500; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,15,0); // handle discount
                },
                treasurers_imprint : function(inventory) { return 3; },
                merchants_mark : function(inventory) { return 3; },
                bailiffs_mark : function(inventory) { return 3; },
            },
        }
    },
    // martell
    glasshouse : {
        builds : {
            horse : {
                seconds : function(inventory) {
                    return timeInSeconds(0,0,20); // handle discount
                },
            },
            /*
             grains : {
             seconds : function(inventory) {
             return timeInSeconds(0,0,20); // handle discount
             },
             horse : function(inventory) { return 3; }
             },
             */
            spear : {
                silver : function(inventory) {
                    return 400; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                axe : function(inventory) { return 2; },
                wood : function(inventory) { return 8; },
                iron : function(inventory) { return 6; },
            },
            spearman : {
                silver : function(inventory) {
                    return 400; // unknown
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,10,0); // handle discount
                },
                militia : function(inventory) { return 1; },
                spear : function(inventory) { return 1; },
                iron : function(inventory) { return 3; },
            },
            halberdier : {
                silver : function(inventory) {
                    return 400; // unknown
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // unknown
                },
                militia : function(inventory) { return 1; },
                spear : function(inventory) { return 1; },
                fur : function(inventory) { return 3; },
            },
            moonstone_bracelet : {
                silver : function(inventory) {
                    return 450; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,10,0); // handle discount
                },
                gold_bracelet : function(inventory) { return 2; },
                ore : function(inventory) { return 8; },
                fur : function(inventory) { return 6; },
            },
            courtiers_outfit : {
                silver : function(inventory) {
                    return 450; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                guards_uniform : function(inventory) { return 2; },
                fur : function(inventory) { return 9; },
                ore : function(inventory) { return 7; }
            },
            ceremonial_bowl : {
                silver : function(inventory) {
                    return 600; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,10,0); // handle discount
                },
                lead : function(inventory) { return 8; },
                dyed_textile : function(inventory) { return 8; },
                hard_wood : function(inventory) { return 8; },
            },
            filigreed_outfit : {
                silver : function(inventory) {
                    return 2500; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(1,4,0); // handle discount
                },
                courtiers_outfit : function(inventory) { return 3; },
                precious_ore : function(inventory) { return 20; },
                dyed_textile : function(inventory) { return 10; },
            },
            masterwork_spear : {
                silver : function(inventory) {
                    return 2500; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(1,0,0); // handle discount
                },
                spear : function(inventory) { return 3; },
                steel : function(inventory) { return 12; },
                hard_wood : function(inventory) { return 18; },
            },
            seal_of_the_sun_and_spear : {
                silver : function(inventory) {
                    return 5500; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,15,0); // handle discount
                },
                poisoned_cask : function(inventory) { return 3; },
                fine_wood : function(inventory) { return 15; },
                hard_wood : function(inventory) { return 15; },
            },
            nobleman_coat : {
                // chance -evolve
                silver : function(inventory) {
                    return 20000; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                filigreed_outfit : function(inventory) { return 1; },
                delicate_silk_garment : function(inventory) { return 2; },
                // adventure in golden tooth
                grand_embroidered_raiment : function(inventory) { return 4; },
            },
        }
    },
    reliquary : {
        builds : {
            cloth : {
                seconds : function(inventory) {
                    return timeInSeconds(0,0,20); // handle discount
                },
            },
            /*
            wood : {
                seconds : function(inventory) {
                    return timeInSeconds(0,0,20); // handle discount
                },
                ore : function(inventory) { return 3; }
            },
            */
            horseman : {
                silver : function(inventory) {
                    return 60; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
                },
                smallfolk : function(inventory) { return 3; },
                horse : function(inventory) { return 3; },
                cloth : function(inventory) { return 3; },
            },
            horse_archer : {
                silver : function(inventory) {
                    return 450; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                horseman : function(inventory) { return 2; },
                composite_bow : function(inventory) { return 2; },
            },
            arakh : {
                silver : function(inventory) {
                    return 450; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                broadsword : function(inventory) { return 1; },
                axe : function(inventory) { return 1; },
                longsword : function(inventory) { return 2; },
            },
            embroidered_tunic : {
                silver : function(inventory) {
                    return 450; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                silk_garment : function(inventory) { return 2; },
                cloth : function(inventory) { return 9; },
                ore : function(inventory) { return 5; },
            },
            receipt : {
                silver : function(inventory) {
                    return 450; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                bill_of_sale : function(inventory) { return 2; },
                horse : function(inventory) { return 6; },
                cloth : function(inventory) { return 8; }
            },
            filigreed_tunic : {
                silver : function(inventory) {
                    return 2500; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(1,4,0); // handle discount
                },
                embroidered_tunic : function(inventory) { return 3; },
                precious_ore : function(inventory) { return 20; },
                lead : function(inventory) { return 10; },
            },
            deposit : {
                silver : function(inventory) {
                    return 2500; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(1,4,0); // handle discount
                },
                receipt : function(inventory) { return 3; },
                dyed_textile : function(inventory) { return 15; },
                fine_wood : function(inventory) { return 15; },
            },
            baby_dragon : {
                silver : function(inventory) {
                    return 5000; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(1,12,0); // handle discount
                },
                dragon_egg : function(inventory) { return 1; },
                pyre : function(inventory) { return 5; },
                dragon_horn : function(inventory) { return 1; },
            },
            binding_contract : {
                // chance -evolve
                silver : function(inventory) {
                    return 20000; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                deposit : function(inventory) { return 1; },
                secure_lockbox : function(inventory) { return 2; },
                // adventure in green fork
                false_coin : function(inventory) { return 4; },
            },
            seal_of_the_dragon : {
                silver : function(inventory) {
                    return 5500; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,15,0); // handle discount
                },
                mark_of_the_little_birds : function(inventory) { return 3; },
                agents_sign : function(inventory) { return 3; },
                cutpursers_mark : function(inventory) { return 3; },
            },
        }
    },
    // tully
    fishery : {
        builds : {
            fish : {
                seconds : function(inventory) {
                    return timeInSeconds(0,0,20); // handle discount
                },
            },
            /*
             smallfolk : {
             seconds : function(inventory) {
             return timeInSeconds(0,0,20); // handle discount
             },
             fish : function(inventory) { return 3; }
             },
             */
            fisherman : {
                silver : function(inventory) {
                    return 60; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
                },
                smallfolk : function(inventory) { return 1; },
                fish : function(inventory) { return 6; },
            },
            fishing_boat : {
                silver : function(inventory) {
                    return 200; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,6,0); // handle discount
                },
                fisherman : function(inventory) { return 3; },
                wood : function(inventory) { return 10; },
                cloth : function(inventory) { return 5; },
            },
            net : {
                silver : function(inventory) {
                    return 200; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,6,0); // handle discount
                },
                cloth : function(inventory) { return 8; },
                stone : function(inventory) { return 6; },
                iron : function(inventory) { return 4; },
            },
            ledger_book : {
                silver : function(inventory) {
                    return 450; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                vellum_scroll : function(inventory) { return 2; },
                leatherbound_book : function(inventory) { return 2; },
                cloth : function(inventory) { return 2; },
            },
            moonstone_necklace : {
                silver : function(inventory) {
                    return 450; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                gold_necklace : function(inventory) { return 2; },
                silver_chain : function(inventory) { return 1; },
                ore : function(inventory) { return 8; }
            },
            random_resource : {
                seconds : function(inventory) {
                    return timeInSeconds(0,0,30);
                },
            },
            master_ledger_book : {
                silver : function(inventory) {
                    return 2500; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(1,4,0); // handle discount
                },
                ledger_book : function(inventory) { return 3; },
                fine_wood : function(inventory) { return 17; },
                dyed_textile  : function(inventory) { return 13; },
            },
            heirloom_necklace : {
                silver : function(inventory) {
                    return 2500; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(1,4,0); // handle discount
                },
                moonstone_necklace : function(inventory) { return 3; },
                precious_ore : function(inventory) { return 15; },
                lead : function(inventory) { return 15; },
            },
            extravagant_necklace : {
                // chance -evolve
                silver : function(inventory) {
                    return 20000; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                heirloom_necklace : function(inventory) { return 1; },
                alloy_necklace : function(inventory) { return 2; },
                // adventure vol I and III
                grand_pewter_collar : function(inventory) { return 4; },
            },
            seal_of_the_fish : {
                silver : function(inventory) {
                    return 5500; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,15,0); // handle discount
                },
                treasurers_imprint : function(inventory) { return 3; },
                merchants_mark : function(inventory) { return 3; },
                frauds_imprint : function(inventory) { return 3; },
            },
        }
    },
    // baratheon
    feast : {
        builds : {
            wood : {
                seconds : function(inventory) {
                    return timeInSeconds(0,0,20); // handle discount
                },
            },
            /*
            stone : {
                seconds : function(inventory) {
                    return timeInSeconds(0,0,20); // handle discount
                },
                wood : function(inventory) { return 3; }
            },
            */
            fool : {
                silver : function(inventory) {
                    return 60; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
                },
                smallfolk : function(inventory) { return 1; },
                cloth : function(inventory) { return 3; },
                ore : function(inventory) { return 2; },
            },
            mummer : {
                silver : function(inventory) {
                    return 200; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,6,0); // handle discount
                },
                fool : function(inventory) { return 2; },
                wood : function(inventory) { return 7; },
                cloth : function(inventory) { return 7; },
            },
            warhammer : {
                silver : function(inventory) {
                    return 450; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                broadsword : function(inventory) { return 2; },
                iron : function(inventory) { return 8; },
                wood : function(inventory) { return 6; },
            },
            pocketed_belt : {
                silver : function(inventory) {
                    return 450; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                woven_belt : function(inventory) { return 2; },
                cloth : function(inventory) { return 12; },
                fur : function(inventory) { return 2; },
            },
            moonstone_brooch : {
                silver : function(inventory) {
                    return 450; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                silver_brooch : function(inventory) { return 4; },
                silver_chain : function(inventory) { return 3; },
                ore : function(inventory) { return 8; }
            },
            parade_mummer : {
                silver : function(inventory) {
                    return 800; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                mummer : function(inventory) { return 2; },
                dyed_textile : function(inventory) { return 8; },
                lead : function(inventory) { return 6; },
            },
            heavy_warhammer : {
                silver : function(inventory) {
                    return 2500; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(1,4,0); // handle discount
                },
                warhammer : function(inventory) { return 3; },
                lead : function(inventory) { return 25; },
                steel  : function(inventory) { return 5; },
            },
            master_crafted_warhammer : {
                // chance -evolve
                silver : function(inventory) {
                    return 20000; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                heavy_warhammer : function(inventory) { return 1; },
                grand_shield : function(inventory) { return 2; },
                // adventure vol I and III
                grand_hardened_mace : function(inventory) { return 4; },
            },
            aurochs : {
                silver : function(inventory) {
                    return 800; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,15,0); // handle discount
                },
                grains : function(inventory) { return 18; },
                pure_water : function(inventory) { return 3; },
                horse : function(inventory) { return 12; },
            },
            seal_of_the_stag : {
                silver : function(inventory) {
                    return 5500; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,15,0); // handle discount
                },
                warriors_imprint : function(inventory) { return 3; },
                blacksmiths_mark : function(inventory) { return 3; },
                symbol_of_help : function(inventory) { return 3; },
            },
        }
    },
    // stark
    hunting_lodge : {
        builds : {
            fur : {
                seconds : function(inventory) {
                    return timeInSeconds(0,0,20); // handle discount
                },
            },
            /*
            cloth : {
                seconds : function(inventory) {
                    return timeInSeconds(0,0,20); // handle discount
                },
                fur : function(inventory) { return 3; }
            },
            */
            tracker : {
                silver : function(inventory) {
                    return 60; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
                },
                smallfolk : function(inventory) { return 1; },
                fur : function(inventory) { return 7; },
            },
            hunter : {
                silver : function(inventory) {
                    return 200; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,6,0); // handle discount
                },
                tracker : function(inventory) { return 2; },
                shortbow : function(inventory) { return 1; },
                woven_belt : function(inventory) { return 1; },
            },
            cuirass : {
                silver : function(inventory) {
                    return 450; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                breastplate : function(inventory) { return 2; },
                iron : function(inventory) { return 12; },
                fur : function(inventory) { return 2; },
            },
            fur_trimmed_cloak : {
                silver : function(inventory) {
                    return 450; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                satin_clock : function(inventory) { return 2; },
                fur : function(inventory) { return 8; },
                cloth : function(inventory) { return 6; },
            },
            longbow : {
                silver : function(inventory) {
                    return 450; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                composite_bow : function(inventory) { return 2; },
                wood : function(inventory) { return 10; },
                cloth : function(inventory) { return 4; }
            },
            warm_fur_lined_cloak : {
                silver : function(inventory) {
                    return 2500; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(1,4,0); // handle discount
                },
                fur_trimmed_cloak : function(inventory) { return 3; },
                dyed_textile : function(inventory) { return 20; },
                precious_ore  : function(inventory) { return 10; },
            },
            taut_longbow : {
                silver : function(inventory) {
                    return 2500; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(1,4,0); // handle discount
                },
                longbow : function(inventory) { return 3; },
                hard_wood : function(inventory) { return 15; },
                fine_wood : function(inventory) { return 15; },
            },
            master_crafted_longbow : {
                // chance -evolve
                silver : function(inventory) {
                    return 20000; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                taut_longbow : function(inventory) { return 1; },
                taut_composite_bow : function(inventory) { return 2; },
                // adventure in Cape Wrath
                grand_mistwood_dagger : function(inventory) { return 4; },
            },
            great_horn : {
                silver : function(inventory) {
                    return 2500; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(1,4,0); // handle discount
                },
                aurochs : function(inventory) { return 2; },
                forest_armor : function(inventory) { return 1; },
                crystal_sword : function(inventory) { return 3; },
            },
            seal_of_the_wolf : {
                silver : function(inventory) {
                    return 5500; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,15,0); // handle discount
                },
                warriors_imprint : function(inventory) { return 3; },
                raiders_notch : function(inventory) { return 3; },
                symbol_of_help : function(inventory) { return 3; },
            },
        },
        upgradeData : {
            ice_house : {

            }
        }
    },
    shipyard : {
        builds : {
            iron : {
                seconds : function(inventory) {
                    return timeInSeconds(0,0,20); // handle discount
                },
            },
            /*
            cloth : {
                seconds : function(inventory) {
                    return timeInSeconds(0,0,20); // handle discount
                },
                fish : function(inventory) { return 3; }
            },
            */
            sailor : {
                silver : function(inventory) {
                    return 60; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
                },
                smallfolk : function(inventory) { return 1; },
                dagger : function(inventory) { return 1; },
                gold_ring : function(inventory) { return 1; },
            },
            ship : {
                silver : function(inventory) {
                    return 450; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                wood : function(inventory) { return 10; },
                cloth : function(inventory) { return 5; },
                sailor : function(inventory) { return 3; },
            },
            surcoat : {
                silver : function(inventory) {
                    return 450; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                jerkin : function(inventory) { return 2; },
                cloth : function(inventory) { return 7; },
                fur : function(inventory) { return 7; },
            },
            poisoned_ring : {
                silver : function(inventory) {
                    return 450; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                dreamwine : function(inventory) { return 1; },
                blindeye : function(inventory) { return 1; },
                gold_ring : function(inventory) { return 3; },
            },
            reaving_ship : {
                silver : function(inventory) {
                    return 450; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                ship : function(inventory) { return 1; },
                sailor : function(inventory) { return 3; },
                composite_bow : function(inventory) { return 2; }
            },
            elite_reaving_ship : {
                silver : function(inventory) {
                    return 2500; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(1,4,0); // handle discount
                },
                reaving_ship : function(inventory) { return 3; },
                steel : function(inventory) { return 17; },
                lead  : function(inventory) { return 13; },
            },
            grand_cuirass : {
                silver : function(inventory) {
                    return 2500; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(1,4,0); // handle discount
                },
                surcoat : function(inventory) { return 3; },
                steel : function(inventory) { return 20; },
                dyed_textile : function(inventory) { return 10; },
            },
            master_crafted_cuirass : {
                // chance -evolve
                silver : function(inventory) {
                    return 20000; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                grand_cuirass : function(inventory) { return 1; },
                masterwork_splint_mail : function(inventory) { return 2; },
                // adventure in Great Wyk
                grand_short_hauberk : function(inventory) { return 4; },
            },
            dragon_horn : {
                silver : function(inventory) {
                    return 2500; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(1,4,0); // handle discount
                },
                great_horn : function(inventory) { return 1; },
                valyrian_glyphs : function(inventory) { return 10; },
                jeweled_armor : function(inventory) { return 1; },
            },
            seal_of_the_kraken : {
                silver : function(inventory) {
                    return 5500; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,15,0); // handle discount
                },
                warriors_imprint : function(inventory) { return 3; },
                blacksmiths_mark : function(inventory) { return 3; },
                raiders_notch : function(inventory) { return 3; }
            },
        }
    },
    // lancaster
    mine : {
        builds : {
            ore : {
                seconds : function(inventory) {
                    return timeInSeconds(0,0,20); // handle discount
                },
            },
            /*
             iron : {
             seconds : function(inventory) {
             return timeInSeconds(0,0,20); // handle discount
             },
             ore : function(inventory) { return 3; }
             },
             */
            jeweler : {
                silver : function(inventory) {
                    return 200; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,6,0); // handle discount
                },
                trader : function(inventory) { return 1; },
                iron : function(inventory) { return 8; },
                ore : function(inventory) { return 10; },
            },
            red_gem : {
                silver : function(inventory) {
                    return 25; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,1,0); // handle discount
                },
                ore : function(inventory) { return 10; },
                stone : function(inventory) { return 5; },
            },
            silk_gloves : {
                silver : function(inventory) {
                    return 450; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                moleskin_gloves : function(inventory) { return 2; },
                cloth : function(inventory) { return 9; },
                fur : function(inventory) { return 5; },
            },
            moonstone_torc : {
                silver : function(inventory) {
                    return 450; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                gold_torc : function(inventory) { return 2; },
                ore : function(inventory) { return 10; },
                cloth : function(inventory) { return 4; },
            },
            sweetsleep : {
                silver : function(inventory) {
                    return 450; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                dreamwine : function(inventory) { return 2; },
                grains : function(inventory) { return 11; },
                fish : function(inventory) { return 3; }
            },
            jeweled_armor : {
                silver : function(inventory) {
                    return 2500; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(1,4,0); // handle discount
                },
                forest_armor : function(inventory) { return 2; },
                sparkling_jewel : function(inventory) { return 10; },
                steel : function(inventory) { return 15; },
            },
            alloy_torc : {
                silver : function(inventory) {
                    return 2500; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(1,4,0); // handle discount
                },
                moonstone_torc : function(inventory) { return 3; },
                precious_ore : function(inventory) { return 20; },
                lead : function(inventory) { return 10; },
            },
            extravagant_torc : {
                // chance -evolve
                silver : function(inventory) {
                    return 20000; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                alloy_torc : function(inventory) { return 1; },
                alloy_pendant : function(inventory) { return 2; },
                // adventure in Blue Fork
                polished_antique_gold_necklace : function(inventory) { return 4; },
            },
            seal_of_the_lion : {
                silver : function(inventory) {
                    return 5500; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,15,0); // handle discount
                },
                poisoned_cask : function(inventory) { return 3; },
                fine_wood : function(inventory) { return 15; },
                hard_wood : function(inventory) { return 15; },
            },
        }
    },
    siege_works : {
        builds : {
            ladder : {
                silver : function(inventory) {
                    return 60; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
                },
                wood : function(inventory) { return 2; },
                smallfolk : function(inventory) { return 2; },
                fish : function(inventory) { return 2; },
                ladder_fabrication_0 : function(inventory) { return 1; }
            },
            trebuchet : {
                silver : function(inventory) {
                    return 60; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
                },
                stone : function(inventory) { return 2; },
                ore : function(inventory) { return 2; },
                cloth : function(inventory) { return 2; },
                trebuchet_fabrication_0 : function(inventory) { return 1; }
            },
            turtle : {
                silver : function(inventory) {
                    return 60; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
                },
                fur : function(inventory) { return 2; },
                horse : function(inventory) { return 2; },
                grains : function(inventory) { return 2; },
            },
            ram : {
                silver : function(inventory) {
                    return 200; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,6,0); // handle discount
                },
                turtle : function(inventory) { return 1; },
                iron : function(inventory) { return 6; },
                horse : function(inventory) { return 6; },
            },
            catapult : {
                silver : function(inventory) {
                    return 200; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,6,0); // handle discount
                },
                trebuchet : function(inventory) { return 2; },
                stone : function(inventory) { return 4; },
                grains : function(inventory) { return 2; },
            },
            scorpion : {
                silver : function(inventory) {
                    return 200; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,6,0); // handle discount
                },
                cloth : function(inventory) { return 6; },
                wood : function(inventory) { return 6; },
                grains : function(inventory) { return 6; },
            },
            siege_tower : {
                silver : function(inventory) {
                    return 450; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                ram : function(inventory) { return 1; },
                ladder : function(inventory) { return 1; },
                smallfolk : function(inventory) { return 14; },
            },
            mangonel : {
                silver : function(inventory) {
                    return 450; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                catapult : function(inventory) { return 2; },
                stone : function(inventory) { return 10; },
                fish : function(inventory) { return 4; },
            },
            spitfire : {
                silver : function(inventory) {
                    return 450; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                scorpion : function(inventory) { return 2; },
                cloth : function(inventory) { return 7; },
                ore : function(inventory) { return 7; },
            },
            manacles : {
                silver : function(inventory) {
                    return 200; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,6,0); // handle discount
                },
                lead : function(inventory) { return 2; },
                iron : function(inventory) { return 6; },
                ore : function(inventory) { return 6; },
            },
            valuable_prisoner : {
                silver : function(inventory) {
                    return 450; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                manacles : function(inventory) { return 1; },
                saboteur : function(inventory) { return 1; },
                smallfolk : function(inventory) { return 12; },
            }
        },
        upgradeData : {
            ladder_fabrication_0 : {
                // +1 battle
            },
            ladder_fabrication_1 : {
                // +1 battle
                ladder_fabrication_0 : function(inventory) { return 1; },
                silver : function(inventory) {
                    return 1800; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,0,21); // handle discount
                },
                wood : function(inventory) { return 1; },
                smallfolk : function(inventory) { return 1; },
            },
            trebuchet_fabrication_0 : {
                // +1 trade
            },
            trebuchet_fabrication_1 : {
                // +1 trade
                trebuchet_fabrication_0 : function(inventory) { return 1; },
                silver : function(inventory) {
                    return 1800; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,0,21); // handle discount
                },
                fur : function(inventory) { return 1; },
                horse : function(inventory) { return 1; },
            },
            turtle_fabrication_0 : {
                // +1 intrigue
            },
            turtle_fabrication_1 : {
                // +1 intrigue
                turtle_fabrication_0 : function(inventory) { return 1; },
                silver : function(inventory) {
                    return 1800; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,0,21); // handle discount
                },
                fur : function(inventory) { return 1; },
                horse : function(inventory) { return 1; },
            },
            ram_fabrication_0 : {
                // +2 fight
                silver : function(inventory) {
                    return 1000; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,0,27); // handle discount
                },
                horse : function(inventory) { return 1; },
                iron : function(inventory) { return 1; }
            },
//            ram_fabrication_1 : {
//                // +1 fight
//                ram_fabrication_0 : function(inventory) { return 1; },
//                silver : function(inventory) {
//                    return 1800; // handle discount
//                },
//                seconds : function(inventory) {
//                    return timeInSeconds(0,0,21); // handle discount
//                },
//                horse : function(inventory) { return 1; },
//                iron : function(inventory) { return 1; },
//            },
            catapult_fabrication_0 : {
                // +2 fight
                silver : function(inventory) {
                    return 1000; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,0,27); // handle discount
                },
                stone : function(inventory) { return 1; },
                grain : function(inventory) { return 1; }
            },
//            catapult_fabrication_1 : {
//                // +2 trade
//                catapult_fabrication_0 : function(inventory) { return 1; },
//                silver : function(inventory) {
//                    return 1800; // handle discount
//                },
//                seconds : function(inventory) {
//                    return timeInSeconds(0,0,21); // handle discount
//                },
//                stone : function(inventory) { return 1; },
//                grain : function(inventory) { return 1; },
//            }
            scorpion_fabrication_0 : {
                // +2 intrigue
                silver : function(inventory) {
                    return 1000; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,0,27); // handle discount
                },
                cloth : function(inventory) { return 1; },
                wood : function(inventory) { return 1; }
            },
//            scorpion_fabrication_1 : {
//                // +2 intrigue
//                scorpion_fabrication_0 : function(inventory) { return 1; },
//                silver : function(inventory) {
//                    return 1800; // handle discount
//                },
//                seconds : function(inventory) {
//                    return timeInSeconds(0,0,21); // handle discount
//                },
//                fur : function(inventory) { return 1; },
//                horse : function(inventory) { return 1; },
//            },
            siege_tower_fabrication_0 : {
                // +2 battle
                silver : function(inventory) {
                    return 1100; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,1,6,30); // handle discount
                },
                cloth : function(inventory) { return 1; },
                wood : function(inventory) { return 1; }
            },
            siege_tower_fabrication_1 : {
                // +2 battle
                siege_tower_fabrication_0 : function(inventory) { return 1; },
                silver : function(inventory) {
                    return 2200; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,2,11); // handle discount
                },
                fur : function(inventory) { return 1; },
                horse : function(inventory) { return 1; },
            }
        }
    },
    warehouse : {
        builds : {
            parchment_scroll : {
                silver : function(inventory) {
                    return 60; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
                },
                leather_bound_book : function(inventory) { return 1; },
                cloth : function(inventory) { return 1; },
                fur : function(inventory) { return 1; },
            },
            coinage : {
                silver : function(inventory) {
                    return 60; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
                },
                gold_ring : function(inventory) { return 1; },
                ore : function(inventory) { return 2; },
            },
            silver_necklace : {
                silver : function(inventory) {
                    return 60; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
                },
                silver_chain : function(inventory) { return 1; },
                ore : function(inventory) { return 2; },
            },
            cart : {
                silver : function(inventory) {
                    return 60; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
                },
                wood : function(inventory) { return 5; },
                iron : function(inventory) { return 1; },
            },
            wagon : {
                silver : function(inventory) {
                    return 60; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
                },
                cart : function(inventory) { return 1; },
                horse : function(inventory) { return 1; },
                fish : function(inventory) { return 6; },
            },
            caravan : {
                silver : function(inventory) {
                    return 450; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                wagon : function(inventory) { return 3; },
                merchant : function(inventory) { return 3; },
                grains : function(inventory) { return 6; },
            },
            alloy_bracelet : {
                silver : function(inventory) {
                    return 800; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,15,0); // handle discount
                },
                gold_bracelet : function(inventory) { return 2; },
                lead : function(inventory) { return 8; },
                precious_ore : function(inventory) { return 6; },
            },
            alloy_necklace : {
                silver : function(inventory) {
                    return 800; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,15,0); // handle discount
                },
                gold_necklace : function(inventory) { return 2; },
                lead : function(inventory) { return 8; },
                precious_ore : function(inventory) { return 6; },
            },
        },
        upgradeData : {
            hired_guards_0 : {
                // +1 fight
                // enables bowman
            },
            hired_guards_1 : {
                // +1 trade
                // +3% prod trade units
                silver : function(inventory) {
                    return 1600; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,0,15); // handle discount
                },
                horse : function(inventory) { return 1; },
                fur : function(inventory) { return 1; },
            },
            hired_guards_2 : {
                // +1 trade
                // +3% prod trade units
                silver : function(inventory) {
                    return 2400; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,0,18); // handle discount
                },
                horse : function(inventory) { return 1; },
                fur : function(inventory) { return 1; },
            },
            storeroom : {
                // +3 trade
                // + 3% PROD TRADE ARMOR
                silver : function(inventory) {
                    return 1000; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,0,40); // handle discount
                },
                horse : function(inventory) { return 1; },
                fur : function(inventory) { return 1; },
            }
        }
    },
    practice_yard : {
        builds : {
            shortbow : {
                silver : function(inventory) {
                    return 60; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
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
                    return timeInSeconds(0,3,0); // handle discount
                },
                iron : function(inventory) { return 5; },
                wood : function(inventory) { return 1; },
            },
            barred_helm : {
                silver : function(inventory) {
                    return 200; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,6,0); // handle discount
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
                    return timeInSeconds(0,6,0); // handle discount
                },
                shortbow : function(inventory) { return 3; },
                militia : function(inventory) { return 3; },
            },
            composite_bow : {
                silver : function(inventory) {
                    return 200; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,6,0); // handle discount
                },
                shortbow : function(inventory) { return 2; },
                wood : function(inventory) { return 3; },
                cloth : function(inventory) { return 3; },
            },
            archer : {
                silver : function(inventory) {
                    return 200; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,6,0); // handle discount
                },
                composite_bow : function(inventory) { return 2; },
                militia : function(inventory) { return 2; },
                bowman : function(inventory) { return 2; },
            },
            partisan : {
                silver : function(inventory) {
                    return 800; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,15,0); // handle discount
                },
                pike : function(inventory) { return 2; },
                steel : function(inventory) { return 5; },
                hard_wood : function(inventory) { return 9; },
            },
            taut_composite_bow : {
                silver : function(inventory) {
                    return 800; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,15,0); // handle discount
                },
                composite_bow : function(inventory) { return 2; },
                hard_wood : function(inventory) { return 8; },
                fine_wood : function(inventory) { return 6; },
            },
        },
        upgradeData : {
            bows_quivers_and_arrows : {
                // +1 fight
                // enables bowman
            },
            wooden_swords_0 : {
                // +1 fight
                // +2% improved battle units
                silver : function(inventory) {
                    return 800; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,0,12); // handle discount
                },
                wood : function(inventory) { return 1; },
                iron : function(inventory) { return 1; },
            },
            wooden_swords_1 : {
                // +1 fight
                // +2% improved battle units
                silver : function(inventory) {
                    return 1600; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,0,15);
                },
                wood : function(inventory) { return 1; },
                iron : function(inventory) { return 1; },
            },
        }
    },
    shanty : {
        builds : {
            fingerless_gloves : {
                silver : function(inventory) {
                    return 60; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
                },
                cloth : function(inventory) { return 3; },
                fur : function(inventory) { return 3; },
            },
            leather_belt : {
                silver : function(inventory) {
                    return 60; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
                },
                cloth : function(inventory) { return 2; },
                wood : function(inventory) { return 4; },
            },
            thief : {
                silver : function(inventory) {
                    return 60; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
                },
                eavesdropper : function(inventory) { return 1; },
                grains : function(inventory) { return 5; },
                ore : function(inventory) { return 3; },
            },
            moleskin_gloves : {
                silver : function(inventory) {
                    return 200; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,6,0); // handle discount
                },
                fingerless_gloves : function(inventory) { return 1; },
                fur : function(inventory) { return 6; },
                cloth : function(inventory) { return 6; },
            },
            woven_belt : {
                silver : function(inventory) {
                    return 200; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,6,0); // handle discount
                },
                leather_belt : function(inventory) { return 1; },
                cloth : function(inventory) { return 10; },
                fur : function(inventory) { return 2; },
            },
            courtesan : {
                silver : function(inventory) {
                    return 450; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                thief : function(inventory) { return 1; },
                moleskin_gloves : function(inventory) { return 1; },
                woven_belt : function(inventory) { return 1; },
            },
            wolfsbane : {
                silver : function(inventory) {
                    return 800; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,15,0); // handle discount
                },
                blindeye : function(inventory) { return 1; },
                dreamwine : function(inventory) { return 1; },
                fine_wood : function(inventory) { return 14; },
            },
            madam : {
                silver : function(inventory) {
                    return 2500; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(1,4,0); // handle discount
                },
                courtesan : function(inventory) { return 3; },
                dyed_textile : function(inventory) { return 15; },
                precious_ore : function(inventory) { return 15; },
            },
        },
        upgradeData : {
            tenements : {
                // +1 intrigue
                // +3% buildtime on steal weapons, armor, and units (everything built by shanty)
            },
            urchins_0 : {
                // +1 intrigue
                // +3% improved steal weapons, armor, and units (everything built by shanty)
                silver : function(inventory) {
                    return 1000; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,0,12); // handle discount
                },
                cloth : function(inventory) { return 1; },
                smallfolk : function(inventory) { return 1; },
            },
            urchins_1 : {
                // +1 intrigue
                // +3% improved steal weapons, armor, and units (everything built by shanty)
                silver : function(inventory) {
                    return 2000; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,0,12); // handle discount
                },
                cloth : function(inventory) { return 1; },
                smallfolk : function(inventory) { return 1; },
            },
        }
    },
    armory : {
        builds : {
            shield_bearers : {
                silver : function(inventory) {
                    return 200; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,6,0); // handle discount
                },
                militia : function(inventory) { return 2; },
                metal_shield : function(inventory) { return 2; },
            },
            pike : {
                silver : function(inventory) {
                    return 200; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,6,0); // handle discount
                },
                longsword : function(inventory) { return 2; },
                wood : function(inventory) { return 4; },
                iron : function(inventory) { return 2; },
            },
            wood_shield : {
                silver : function(inventory) {
                    return 60; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
                },
                wood : function(inventory) { return 5; },
                iron : function(inventory) { return 1; },
            },
            metal_shield : {
                silver : function(inventory) {
                    return 200; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,6,0); // handle discount
                },
                wood_shield : function(inventory) { return 2; },
                iron : function(inventory) { return 6; },
            },
            breastplate : {
                silver : function(inventory) {
                    return 200; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,6,0); // handle discount
                },
                leather_armor : function(inventory) { return 2; },
                iron : function(inventory) { return 4; },
                fur : function(inventory) { return 2; },
            },
            phalanx : {
                silver : function(inventory) {
                    return 450; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                shield_bearers : function(inventory) { return 2; },
                pikeman : function(inventory) { return 2; },
                halfhelm : function(inventory) { return 4; },
            },
            grand_breastplate : {
                silver : function(inventory) {
                    return 800; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,15,0); // handle discount
                },
                breastplate : function(inventory) { return 2; },
                steel : function(inventory) { return 8; },
                lead : function(inventory) { return 6; },
            },
            elite_phalanx : {
                silver : function(inventory) {
                    return 2500; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(1,4,0); // handle discount
                },
                phalanx : function(inventory) { return 3; },
                steel : function(inventory) { return 20; },
                hard_wood : function(inventory) { return 10; },
            },
            phalanx_commander : {
                silver : function(inventory) {
                    return 20000; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                phalanx : function(inventory) { return 1; },
                grand_breastplate : function(inventory) { return 2; },
                // great wyk
                grand_short_hauberk : function(inventory) { return 4; },
            },
        }
    },
    watchtower : {
        // 20 min., 1000 silver
        builds : {
            unremarkable_tunic : {
                silver : function(inventory) {
                    return 60; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
                },
                cloth : function(inventory) { return 3; },
                fur : function(inventory) { return 3; },
            },
            light_crossbow : {
                silver : function(inventory) {
                    return 60; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
                },
                wood : function(inventory) { return 3; },
                cloth : function(inventory) { return 2; },
                fur : function(inventory) { return 1; },
            },
            crossbowman : {
                silver : function(inventory) {
                    return 200; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,6,0); // handle discount
                },
                militia : function(inventory) { return 3; },
                light_crossbow : function(inventory) { return 3; },
            },
            guards_uniform : {
                silver : function(inventory) {
                    return 200; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,6,0); // handle discount
                },
                unremarkable_tunic : function(inventory) { return 1; },
                fur : function(inventory) { return 5; },
                cloth : function(inventory) { return 7; },
            },
            heavy_crossbow : {
                silver : function(inventory) {
                    return 200; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,6,0); // handle discount
                },
                light_crossbow : function(inventory) { return 1; },
                wood : function(inventory) { return 7; },
                cloth : function(inventory) { return 5; },
            },
            assassin : {
                silver : function(inventory) {
                    return 450; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                thief : function(inventory) { return 1; },
                heavy_crossbow : function(inventory) { return 1; },
                guards_uniform : function(inventory) { return 1; },
            },
            expert_crossbowman : {
                silver : function(inventory) {
                    return 800; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,15,0); // handle discount
                },
                crossbowman : function(inventory) { return 1; },
                heavy_crossbow : function(inventory) { return 1; },
                hard_wood : function(inventory) { return 14; },
            },
            guild_assassin : {
                silver : function(inventory) {
                    return 2500; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(1,4,0); // handle discount
                },
                assassin : function(inventory) { return 3; },
                dyed_textile : function(inventory) { return 15; },
                fine_wood : function(inventory) { return 15; },
            },
            master_assassin : {
                // chance -evolve
                silver : function(inventory) {
                    return 20000; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                guild_assassin : function(inventory) { return 1; },
                expert_crossbowman : function(inventory) { return 2; },
                // crackclaw point
                grand_tailored_tunic : function(inventory) { return 4; },
            },
        },
        upgradeData : {
            first_story_0 : {
                // +1 intrigue
                // +3% improved steal weapons, armor, and units (everything built by shanty)
                silver : function(inventory) {
                    return 1000; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,0,10,30); // handle discount
                },
                stone : function(inventory) { return 1; },
                fish : function(inventory) { return 1; },
            },
            first_story_1 : {
                // +1 intrigue
                silver : function(inventory) {
                    return 00; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,0,0); // handle discount
                },
                cloth : function(inventory) { return 1; },
                fish : function(inventory) { return 1; },
            },

        }
    },
    artisan_quarters : {
        builds : {
            purse : {
                silver : function(inventory) {
                    return 60; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
                },
                gold_ring : function(inventory) { return 1; },
                ore : function(inventory) { return 2; },
            },
            silver_bracelet : {
                silver : function(inventory) {
                    return 60; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
                },
                silver_brooch : function(inventory) { return 1; },
                ore : function(inventory) { return 1; },
                cloth : function(inventory) { return 1; },
            },
            silver_torc : {
                silver : function(inventory) {
                    return 60; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
                },
                silver_chain : function(inventory) { return 1; },
                ore : function(inventory) { return 1; },
                fur : function(inventory) { return 1; },
            },
            mercer : {
                silver : function(inventory) {
                    return 450; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                merchant : function(inventory) { return 6; },
                cloth : function(inventory) { return 8; },
                ore : function(inventory) { return 4; }
            },
            spicer : {
                silver : function(inventory) {
                    return 450; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                merchant : function(inventory) { return 6; },
                grains : function(inventory) { return 8; },
                ore : function(inventory) { return 4; }
            },
            furrier : {
                silver : function(inventory) {
                    return 450; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                merchant : function(inventory) { return 6; },
                fur : function(inventory) { return 8; },
                ore : function(inventory) { return 4; }
            },
            master_mercer : {
                silver : function(inventory) {
                    return 2500; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(1,4,0); // handle discount
                },
                mercer : function(inventory) { return 3; },
                dyed_textile : function(inventory) { return 20; },
                precious_ore : function(inventory) { return 10; }
            },
            master_spicer : {
                silver : function(inventory) {
                    return 2500; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(1,4,0); // handle discount
                },
                spicer : function(inventory) { return 3; },
                fine_wood : function(inventory) { return 20; },
                precious_ore : function(inventory) { return 10; }
            },
            master_furrier : {
                silver : function(inventory) {
                    return 2500; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(1,4,0); // handle discount
                },
                furrier : function(inventory) { return 3; },
                lead : function(inventory) { return 20; },
                precious_ore : function(inventory) { return 10; }
            },
            illustrious_mercer : {
                // chance -evolve
                silver : function(inventory) {
                    return 20000; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                master_mercer : function(inventory) { return 1; },
                dark_diamond_ring : function(inventory) { return 2; },
                // greenblood
                grand_pewter_chain : function(inventory) { return 4; },
            },
        }
    },
    stables : {
        builds : {
            ostler : {
                silver : function(inventory) {
                    return 60; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
                },
                smallfolk : function(inventory) { return 1; },
                fur : function(inventory) { return 2; },
                grains : function(inventory) { return 3; },
            },
            blue_gem : {
                silver : function(inventory) {
                    return 15; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,0,30); // handle discount
                },
                peddler : function(inventory) { return 2; },
                ore : function(inventory) { return 2; },
                stone : function(inventory) { return 1; },
            },
            warhorse : {
                silver : function(inventory) {
                    return 60; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
                },
                horse : function(inventory) { return 1; },
                ostler : function(inventory) { return 1; },
                leather_armor : function(inventory) { return 1; },
            },
            harrier : {
                silver : function(inventory) {
                    return 60; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
                },
                militia : function(inventory) { return 1; },
                horse : function(inventory) { return 1; },
                grains : function(inventory) { return 5; }
            },
            scout : {
                silver : function(inventory) {
                    return 60; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
                },
                eavesdropper : function(inventory) { return 1; },
                horse : function(inventory) { return 1; },
                grains : function(inventory) { return 5; }
            },
            peddler : {
                silver : function(inventory) {
                    return 60; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,3,0); // handle discount
                },
                trader : function(inventory) { return 1; },
                horse : function(inventory) { return 1; },
                grains : function(inventory) { return 5; }
            },
            steelshod_warhorse : {
                silver : function(inventory) {
                    return 800; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,15,0); // handle discount
                },
                warhorse : function(inventory) { return 2; },
                ostler : function(inventory) { return 1; },
                steel : function(inventory) { return 4; }
            },
            mounted_escort : {
                silver : function(inventory) {
                    return 800; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,15,0); // handle discount
                },
                harrier : function(inventory) { return 3; },
                scout : function(inventory) { return 3; },
                fine_wood : function(inventory) { return 14; }
            },
        }
    },
    tourney_arena : {
        builds : {
            red_gem : {
                silver : function(inventory) {
                    return 15; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,0,30); // handle discount
                },
                peddler : function(inventory) { return 2; },
                ore : function(inventory) { return 2; },
                iron : function(inventory) { return 1; },
            },
            foot_soldier : {
                silver : function(inventory) {
                    return 200; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,6,0); // handle discount
                },
                smallfolk : function(inventory) { return 1; },
                longsword : function(inventory) { return 1; },
                guards_uniform : function(inventory) { return 1; },
            },
            armored_knight : {
                silver : function(inventory) {
                    return 450; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                foot_soldier : function(inventory) { return 1; },
                breastplate : function(inventory) { return 1; },
                barred_helm : function(inventory) { return 1; },
            },
            mounted_knight : {
                silver : function(inventory) {
                    return 450; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                armored_knight : function(inventory) { return 1; },
                warhorse : function(inventory) { return 1; },
                purse : function(inventory) { return 1; }
            },
            lancer : {
                silver : function(inventory) {
                    return 450; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                mounted_knight : function(inventory) { return 1; },
                pike : function(inventory) { return 1; },
                silk_garment : function(inventory) { return 1; }
            },
            heavy_knight : {
                silver : function(inventory) {
                    return 450; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                lancer : function(inventory) { return 1; },
                gold_torc : function(inventory) { return 1; },
                metal_shield : function(inventory) { return 1; }
            },
            grand_barred_helm : {
                silver : function(inventory) {
                    return 800; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,15,0); // handle discount
                },
                barred_helm : function(inventory) { return 2; },
                steel : function(inventory) { return 8; },
                lead : function(inventory) { return 6; }
            },
            elite_cavalryman : {
                silver : function(inventory) {
                    return 2500; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(1,4,0); // handle discount
                },
                heavy_knight : function(inventory) { return 1; },
                steelshod_warhorse : function(inventory) { return 1; },
                masterwork_greatsword : function(inventory) { return 1; }
            },
            cavalry_commander : {
                // chance -evolve
                silver : function(inventory) {
                    return 20000; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                elite_cavalryman : function(inventory) { return 1; },
                grand_barred_helm : function(inventory) { return 2; },
                // vol I and III
                grand_pack_horse : function(inventory) { return 4; },
            },
        }
    },
    alchemists_guild : {
        builds : {
            fire_archer : {
                silver : function(inventory) {
                    return 450; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                archer : function(inventory) { return 1; },
                wood : function(inventory) { return 2; },
                iron : function(inventory) { return 2; },
            },
            smuggling_vessel : {
                silver : function(inventory) {
                    return 450; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,12,0); // handle discount
                },
                wood : function(inventory) { return 17; },
                cloth : function(inventory) { return 9; },
                thief : function(inventory) { return 4; },
            },
            pure_water : {
                silver : function(inventory) {
                    return 5; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,0,30); // handle discount
                },
                black_ash : function(inventory) { return 1; },
                mead : function(inventory) { return 1; },
                cloth : function(inventory) { return 3; },
            },
            blazing_fire_archer : {
                silver : function(inventory) {
                    return 2500; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(1,4,0); // handle discount
                },
                fire_archer : function(inventory) { return 3; },
                flickering_fire : function(inventory) { return 3; },
                hard_wood : function(inventory) { return 12; }
            },
            sparkling_jewel : {
                silver : function(inventory) {
                    return 15; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,2,0); // handle discount
                },
                black_ash : function(inventory) { return 6; },
                precious_ore : function(inventory) { return 6; },
                ore : function(inventory) { return 6; }
            },
            wildfire : { // chance of wildfire
                silver : function(inventory) {
                    return 30; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(0,2,0); // handle discount
                },
                pure_water : function(inventory) { return 2; },
                flickering_fire : function(inventory) { return 2; },
                stone : function(inventory) { return 4; }
            },
            fireship : { // chance of fireship
                silver : function(inventory) {
                    return 2500; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(1,4,0); // handle discount
                },
                wildfire : function(inventory) { return 8; },
                smuggling_vessel : function(inventory) { return 2; },
                fire_archer : function(inventory) { return 2; }
            },
//            uncommon_resource : { // chance
//                silver : function(inventory) {
//                    return 50; // handle discount
//                },
//                seconds : function(inventory) {
//                    return timeInSeconds(0,4,0); // handle discount
//                },
//                wildfire : function(inventory) { return 1; },
//                rashers_of_bacon : function(inventory) { return 1; },
//                fish : function(inventory) { return 5; }
//            },
            dragon_egg : { 
                silver : function(inventory) {
                    return 5000; // handle discount
                },
                seconds : function(inventory) {
                    return timeInSeconds(1,12,0); // handle discount
                },
                dormant_dragon_egg : function(inventory) { return 1; },
                offering : function(inventory) { return 1; },
                incense : function(inventory) { return 7; }
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
                alwaysAvailable: true
            },

            leather_bound_book : {
                // always available
                silver : function(inventory) {
                    return 585;
                },
                alwaysAvailable: true
            },
            longsword : {
                // always available
                silver : function(inventory) {
                    return 585;
                },
                alwaysAvailable: true
            },
            silver_bracelet : {
                silver : function(inventory) {
                    return 175;
                },
                alwaysAvailable: false
            },
            composite_bow : {
                silver : function(inventory) {
                    return 944;
                },
                alwaysAvailable: false
            },
            fingerless_gloves : {
                silver : function(inventory) {
                    return 522;
                },
                alwaysAvailable: false
            },
            halfhelm : {
                silver : function(inventory) {
                    return 175;
                },
                alwaysAvailable: false
            },
            gold_ring : {
                silver : function(inventory) {
                    return 1000;
                },
                alwaysAvailable: false
            },
            silk_garment : {
                silver : function(inventory) {
                    return 1000;
                },
                alwaysAvailable: false
            },
            woven_belt : {
                // always available
                silver : function(inventory) {
                    return 742;
                },
                alwaysAvailable: false
            },
            gold_brooch : {
                // always available
                silver : function(inventory) {
                    return 2500;
                },
                alwaysAvailable: false
            },
            coinage : {
                silver : function(inventory) {
                    return 227;
                },
                alwaysAvailable: false
            },
            dreamwine : {
                silver : function(inventory) {
                    return 977;
                },
                alwaysAvailable: false
            },
            poisoned_cask : {
                silver : function(inventory) {
                    return 8385;
                },
                alwaysAvailable: false
            },
            barred_helm : {
                // sometimes
                silver : function(inventory) {
                    return 1000;
                },
                alwaysAvailable: false
            },
            saltwater_surcoat : {
                // sometimes
                silver : function(inventory) {
                    return 175;
                },
                alwaysAvailable: false
            },
            dormant_dragon_egg: {
                gold: function(inventory) {
                    return 53;
                },
                alwaysAvailable: true
            }
        }
    }
});

var storables = {
    black_ash: {
        adventure: [
            {
                volume: 2,
                level: 61 // patrolling the bay
            }
        ]
    },
    ceremonial_bowl: {
        adventure: [
            {
                volume: 2,
                level: 93
            },
            {
                volume: 2,
                level: 98
            },
            {
                volume: 3,
                level: 102
            },
            {
                volume: 'you2',
                level: 25
            },
        ],
        silver: 3009
    },
    crystal_sword: {
        adventure: [
            {
                volume: 2,
                level: 90
            },
        ],
        silver: 15480
    },
    dyed_textile: {
        adventure: [
            {
                volume: 2,
                level:59
            },
            {
                volume: 2,
                level:101
            },
            {
                volume: 2,
                level:78
            },
        ]
    },
    false_coin: {
        adventure: [
            {
                volume: 1,
                level: 83
            },
            {
                volume: 3,
                level: 105
            }
        ]
    },
    fine_wood: {
        adventure: [
            {
                volume: 2,
                level:76
            },
            {
                volume: 2,
                level:75
            },
            {
                volume: 2,
                level:30
            },
            {
                volume: 2,
                level:98
            },
            {
                volume: 2,
                level:32
            },
        ]
    },
    grand_embroidered_raiment : {
        adventure: [
            {
                volume: 1,
                level: 91
            }
        ]
    },
    grand_hardened_mace : {
        adventure: [
            {
                volume: 1,
                level: 77
            }
        ],
        silver: 3600
    },
    grand_mistwood_dagger: {
        adventure: [
            {
                volume: 1,
                level:97
            }
        ],
        silver: 2700
    },
    grand_pack_horse: {
        adventure: [
            {
                volume: 1,
                level: 100
            },
            {
                volume: 3,
                level: 95
            }
        ],
        silver: 4680
    },
    grand_pewter_chain: {
        adventure: [
            {
                volume: 1,
                level: 80
            },
            {
                volume: 3,
                level: 96
            }
        ],
        silver: 2250
    },
    grand_pewter_collar : {
        adventure: [
            {
                volume: 1,
                level: 70
            }
        ]
    },
    grand_rainwood_cloak: {
        adventure: [
            {
                volume: 1,
                level: 97,
            },
            {
                volume: 3,
                level: 79
            }
        ],
    },
    grand_short_hauberk: {
        adventure: [
            {
                volume: 1,
                level: 88
            }
        ]
    },
    grand_tailored_tunic: {
        adventure: [
            {
                volume: 1,
                level: 94
            }
        ]
    },
    hard_wood: {
        adventure: [
            {
                volume: 2,
                level: 30
            },
            {
                volume: 2,
                level: 90
            },
            {
                volume: 2,
                level: 37
            },
            {
                volume: 2,
                level: 49
            },
            {
                volume: 2,
                level: 75
            },
            {
                volume: 2,
                level: 46
            },
            {
                volume: 2,
                level: 82
            },
            {
                volume: 2,
                level: 78
            },
            {
                volume: 3,
                level: 120
            },
            {
                volume: 3,
                level: 13
            },
            {
                volume: 3,
                level: 52
            },
            {
                volume: 3,
                level: 62
            },
            {
                volume: 4,
                level: 50,
                fealty: 'tyrell'
            },
            {
                volume: 4,
                level: 90,
                fealty: 'stark'
            },
            {
                volume: 'you2',
                level: 25
            },
            {
                volume: 4,
                level: 90,
                fealty: 'tyrell'
            },
            {
                volume: 'you2',
                level: 10
            }

        ]
    },
    intent_scholar : {
        adventure: [
            {
                volume: 1,
                level: 125,
            }
        ],
        silver: 3200
    },
    iron_bank_bounty: {
        adventure: [
            {
                volume: 'you2',
                level: 10
            }
        ],
        silver: 2006
    },
    lead: {
        adventure: [
            {
                volume: 2,
                level:76
            },
            {
                volume: 2,
                level:78
            },
            {
                volume: 2,
                level:61
            },
            {
                volume: 2,
                level:104
            },
            {
                volume: 2,
                level:75
            },
            {
                volume: 2,
                level:93
            },
            {
                volume: 2,
                level:101
            },

        ]
    },
    mistwood_dagger: {
        adventure: [
            {
                volume: 1,
                level:33
            }
        ],
        silver: 1495
    },
    parrying_blade: {
        adventure: [
            {
                volume: 1,
                level: 27
            }
        ]
    },
    poisoned_blade: {
        adventure: [
            {
                volume: 1,
                level: 31
            }
        ]
    },
    precious_ore: {
        adventure: [
            {
                volume: 2,
                level:75
            },
            {
                volume: 2,
                level:76
            },
            {
                volume: 2,
                level:59
            },
            {
                volume: 2,
                level:46
            },
            {
                volume: 2,
                level:47
            },
            {
                volume: 2,
                level:92
            },
            {
                volume: 2,
                level:104
            },
        ]
    },
    polished_antique_gold_necklace: {
        adventure: [
            {
                volume: 1,
                level:110
            }
        ]
    },
    sacrifice: {
        adventure: [
            {
                volume: 2,
                level: 92
            },
            {
                volume: 2,
                level: 99
            },
            {
                volume: 3,
                level: 103
            },
            {
                volume: 'you2',
                level: 25
            }
        ],

    },
    steel: {
        adventure: [
            {
                volume: 2,
                level:47
            },
            {
                volume: 2,
                level:49
            },
            {
                volume: 2,
                level:61
            },
            {
                volume: 2,
                level:76
            },
            {
                volume: 2,
                level:78
            },
            {
                volume: 2,
                level:82
            },
            {
                volume: 3,
                level:17
            },
            {
                volume: 3,
                level:42
            },
            {
                volume: 3,
                level:50
            },
            {
                volume: 3,
                level:72,
            },
            {
                volume: 3,
                level:86
            },
            {
                volume: 3,
                level:95
            },
            {
                volume: 3,
                level:66
            },
            {
                volume: 4,
                level:20,
                fealty: 'greyjoy'
            },
            {
                volume: 4,
                level:50,
                fealty: 'greyjoy'
            },
            {
                volume: 4,
                level:50,
                fealty: 'tyrell'
            },
            {
                volume: 4,
                level:50,
                fealty: 'martell'
            },
            {
                volume: 4,
                level:20,
                fealty: 'lannister'
            },
            {
                volume: 4,
                level:50,
                fealty: 'lannister'
            },
            {
                volume: 'you2',
                level:10
            },
            {
                volume: 'you2',
                level:25
            },
            {
                volume: 'you2',
                level:55
            },
        ]
    },
    rainwood_cloak: {
        adventure: [
            {
                volume: 1,
                level: 33
            },
            {
                volume: 3,
                level: 21
            }
        ],
        silver: 148
    },
    common_black_gem: {
        displayName: 'Black Gem (common)',
        adventure: [
            {
                volume: 4,
                level: 90
            },
            {
                volume: 4,
                level: 120
            }
        ]
    },
    uncommon_black_gem: {
        displayName: 'Black Gem (uncommon)',
        adventure: [
            {
                volume: 4,
                level: 105
            }
        ]
    },
    valyrian_glyphs: {
        adventure: [
            {
                volume: 2,
                level: 99
            },
            {
                volume: 2,
                level: 101
            },
            {
                volume: 3,
                level: 102
            },
            {
                volume: 'you2',
                level: 25
            }
        ],
        silver: 2
    },
    wierwood: {
        adventure: [
            {
                volume: 2,
                level: 98
            },
        ]
    },
};

// Silver comes from too many different sources to be effectively tracked.
_.each(['silver', 'gold', 'stone','iron','cloth', 'fish','ore', 'horse','smallfolk', 'grains', 'fur', 'wood'], function(resource) {
    storables[resource] = _.extend(storables[resource] || {}, {
        displayName: resource,
        resource: true,
        buildings: []
    });
});
storables.black_ash = {
    displayName: 'black ash',
    resource: true,
    buildings : []
};
for(var i = 1; i < 9; i++) {
    storables['special_'+i] = {
        displayName: 'Special '+i
    }
}

_.each(storables, function(storable) {
    if ( storable.buildings == null) {
        storable.buildings = [];
    }
});
_.each(Buildings, function(building, building_key) {
    // add name of building to building object
    building.displayName = building_key.replace(/_/g, ' ');
    building.key = building_key;

    // map storables to buildings
    _.each(building.builds, function(storable_needs, storable) {
        if ( typeof(storables[storable]) === "undefined") {
            var storableName = storable.replace(/_/g, ' ');
            storables[storable] = {
                displayName: storableName,
                buildings : [ building ]
            };
        } else {
            storables[storable].buildings.push(building);
        }
    });
});
_.each(storables, function(storable) {
    if ( storable.adventure == null) {
        storable.adventure = [];
    }
});

Storables = new Enums.Enum(_.object(_.sortBy(_.pairs(storables), function(pairArray) {
    return pairArray[0];
})));
StorableInBuildings = _.sortBy(
    _.filter(Storables.symbols(), function(element) {
        return !_.isEmpty(element.buildings);
    }),
    'displayName');


