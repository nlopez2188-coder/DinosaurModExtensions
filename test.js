/* this is the testing extension, to find out what works and what does not. */

(function (Scratch) {
    class Extension {
        static get SAY_OR_THINK () {
            return 'SAY';
        }
        getInfo() {
            return {
                name: "Test Extension",
                id: "TESTEXTENSION",
                blocks: [
                    {
                        opcode: 'showAllsprites',
                        text: 'show all sprites',
                        blockType: Scratch.BlockType.COMMAND,
                        filter: [Scratch.TargetType.SPRITE],
                        arguments: {}
                    },
                    {
                        opcode: 'hideAllsprites',
                        text: 'hide all sprites',
                        blockType: Scratch.BlockType.COMMAND,
                        filter: [Scratch.TargetType.SPRITE],
                        arguments: {}
                    },
                    "---",
                    {
                        opcode: 'TEST',
                        text: 'RGB',
                        blockType: Scratch.BlockType.REPORTER,
                        arguments: {},
                        color1: '#ff0000',
                        color2: '#00ff00',
                        color3: '#0000ff'
                    },
                    "---",
                    {
                        opcode: 'BRANCHES',
                        text: 'boolean branches',
                        blockType: Scratch.BlockType.BOOLEAN,
                        branchCount: 4,
                        isTerminal: true,
                        arguments: {},
                    },
                    {
                        opcode: 'Shout',
                        text: 'shout [SHOUT]',
                        blockType: Scratch.BlockType.COMMAND,
                        arguments: {
                            SHOUT: {
                                type: Scratch.ArgumentType.STRING,
                            }
                        },
                    },
                    {
                        opcode: 'typableMenu',
                        text: 'typable menu [TYPING]',
                        blockType: Scratch.BlockType.COMMAND,
                        arguments: {
                            TYPING: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "Hello",
                                menu: "THIS"
                            }
                        },
                    },
                    {
                        blockType: "label",
                        text: "Inputs Tests",
                    },
                    {
                        opcode: 'Broadcast',
                        text: 'broadcast arg [SHOUT]',
                        blockType: Scratch.BlockType.COMMAND,
                        arguments: {
                            SHOUT: {
                                type: Scratch.ArgumentType.BROADCAST,
                            }
                        },
                    },
                    {
                        opcode: 'Variable',
                        text: 'variable arg [SHOUT]',
                        blockType: Scratch.BlockType.COMMAND,
                        arguments: {
                            SHOUT: {
                                type: Scratch.ArgumentType.VARIABLE,
                            }
                        },
                    },
                    {
                        opcode: 'List',
                        text: 'list arg [SHOUT]',
                        blockType: Scratch.BlockType.COMMAND,
                        arguments: {
                            SHOUT: {
                                type: Scratch.ArgumentType.LIST,
                            }
                        },
                    },
                    {
                        blockType: "label",
                        text: "BlockShape Tests",
                    },
                    {
                        opcode: 'LEAF',
                        text: 'leaf',
                        blockType: Scratch.BlockType.REPORTER,
                        blockShape: 4,
                        hideFromPalette: !Scratch.extensions.isPenguinMod,
                        arguments: {},
                    },
                    {
                        opcode: 'TICKET',
                        text: 'ticket',
                        blockType: Scratch.BlockType.REPORTER,
                        blockShape: 11, 
                        hideFromPalette: !Scratch.extensions.isPenguinMod,
                        arguments: {},
                    },
                    {
                        opcode: 'HUH',
                        text: 'non-existent shape',
                        blockType: Scratch.BlockType.REPORTER,
                        blockShape: 12, 
                        hideFromPalette: !Scratch.extensions.isPenguinMod,
                        arguments: {},
                    },
                    {
                        blockType: "label",
                        text: "Branches Tests",
                    },
                    {
                        opcode: 'ALIGNMENT',
                        blockType: Scratch.BlockType.COMMAND,
                        text: [
                          'dave',
                          'the',
                          'magical',
                          'cheese',
                          'wizard',
                        ],
                        branchCount: 4,
                        alignments: [
                          null,
                          null,
                          Scratch.ArgumentAlignment.LEFT,
                          null,
                          Scratch.ArgumentAlignment.CENTER,
                          null,
                          Scratch.ArgumentAlignment.RIGHT,
                          null,
                          Scratch.ArgumentAlignment.CENTER
                        ]
                    },
                    "---",
                    {
                        blockType: Scratch.BlockType.XML,
                        xml: `<block type=""></block>`,
                    },
                    "---",
                    {
                        opcode: 'INVISIBLE',
                        text: 'no reporter. only label',
                        blockType: Scratch.BlockType.BOOLEAN,
                        blockShape: 12, 
                        hideFromPalette: !Scratch.extensions.isPenguinMod,
                        arguments: {},
                        color1: '#00000000',
                        color2: '#00000000',
                        color3: '#00000000'
                    },
                    {
                        opcode: 'INVISIBLE2',
                        text: [
                          'no loop. only label',
                          'no loop. only label'
                        ],
                        blockType: Scratch.BlockType.COMMAND,
                        blockShape: 12, 
                        hideFromPalette: !Scratch.extensions.isPenguinMod,
                        arguments: {},
                        color1: '#00000000',
                        color2: '#00000000',
                        color3: '#00000000',
                        branchCount: 1,
                    },
                    {
                        opcode: 'INVISIBLE3',
                        text: 'no block. only label',
                        blockType: Scratch.BlockType.COMMAND,
                        blockShape: 12, 
                        hideFromPalette: !Scratch.extensions.isPenguinMod,
                        arguments: {},
                        color1: '#00000000',
                        color2: '#00000000',
                        color3: '#00000000'
                    },
                    {
                        opcode: 'INVISIBLE4',
                        text: '[INPUT]',
                        blockType: Scratch.BlockType.REPORTER,
                        forceOutputType: 1,
                        blockShape: 12,
                        hideFromPalette: !Scratch.extensions.isPenguinMod,
                        arguments: {
                            INPUT: {
                                type: Scratch.ArgumentType.STRING
                            }
                        },
                        color1: '#00000000',
                        color2: '#00000000',
                        color3: '#00000000'
                    },
                    {
                        opcode: 'INVISIBLE5',
                        text: '[INPUT]',
                        blockType: Scratch.BlockType.REPORTER,
                        forceOutputType: 1,
                        blockShape: 12,
                        hideFromPalette: !Scratch.extensions.isPenguinMod,
                        arguments: {
                            INPUT: {
                                type: Scratch.ArgumentType.BOOLEAN
                            }
                        },
                        color1: '#00000000',
                        color2: '#00000000',
                        color3: '#00000000'
                    },
                ],
                menus: {
                    THIS: {
                        items: [
                            "Dave",
                            "The",
                            "Magical",
                            "Cheese",
                            "Wizard"
                        ],
                        isTypeable: true
                    }
                }
            }
        }

        showAllsprites(args, util) {
            // Note: runtime.targets doesn't have a direct setVisible method. 
            // To affect sprites, iterate over targets instead:
            Scratch.vm.runtime.targets.forEach(target => {
                if (target.isSprite()) {
                    target.setVisible(true);
                }
            });
        }

        hideAllsprites(args, util) {
            Scratch.vm.runtime.targets.forEach(target => {
                if (target.isSprite()) {
                    target.setVisible(false);
                }
            });
        }

        TEST() {
            return 'RGB';
        }

        BRANCHES(args, util) {
            return false;
        }

        Shout(args, util) {
            Scratch.vm.runtime.emit(Extension.SAY_OR_THINK, util.target, 'shout', args.SHOUT);
        }

        typableMenu(args, util) {
            // Implementation for typable menu command
        }

        Broadcast(args, util) {
            // Implementation for broadcast argument block
        }

        Variable(args, util) {
            return args.SHOUT;
        }

        List(args, util) {
            return args.SHOUT;
        }

        LEAF() {
            return "leaf";
        }

        TICKET() {
            return "ticket";
        }

        HUH() {
            return "huh";
        }

        ALIGNMENT(args, util) {
            // Multi-text command block implementation
        }

        INVISIBLE() {
            return Math.round(Math.random()) == 1;
        }

        INVISIBLE2(_, util) {
            return util.startBranch(1);
        }

        INVISIBLE3() {
            console.log(Math.round(Math.random() * 30));
            console.log("YOU JUST RAN THE INVISIBLE BLOCK");
        }

        INVISIBLE4(args) {
            return args.INPUT;
        }

        INVISIBLE5(args) {
            return args.INPUT;
        }
    }

    Scratch.extensions.register(new Extension());
})(Scratch);
