export class BaseItem {
  id: string;
  name: string;
  iconPath: string;
  description: string;
}



export const baseItems: { [id: string]: BaseItem; } = {
  BF_SWORD: {
    id: 'BF_SWORD',
    name: 'B.F. Sword',
    iconPath: 'assets/BF_SWORD.png',
    description: '+20 Attack Damage'
  },
  RECURVE_BOW: {
    id: 'RECURVE_BOW',
    name: 'Recurve Bow',
    iconPath: 'assets/RECURVE_BOW.png',
    description: '+15% Attack Speed'
  },
  NEEDLESSLY_LARGE_ROD: {
    id: 'NEEDLESSLY_LARGE_ROD',
    name: 'Needlessly Large Rod',
    iconPath: 'assets/NEEDLESSLY_LARGE_ROD.png',
    description: '+20% Spell Damage'
  },
  TEAR_OF_THE_GODDESS: {
    id: 'TEAR_OF_THE_GODDESS',
    name: 'Tear of the Goddess',
    iconPath: 'assets/TEAR_OF_THE_GODDESS.png',
    description: '+20 Mana'
  },
  CHAIN_VEST: {
    id: 'CHAIN_VEST',
    name: 'Chain Vest',
    iconPath: 'assets/CHAIN_VEST.png',
    description: '+20 Armor'
  },
  NEGATRON_CLOAK: {
    id: 'NEGATRON_CLOAK',
    name: 'Negatron Cloak',
    iconPath: 'assets/NEGATRON_CLOAK.png',
    description: '+20 Magic Resist'
  },
  GIANTS_BELT: {
    id: 'GIANTS_BELT',
    name: 'Giants Belt',
    iconPath: 'assets/GIANTS_BELT.png',
    description: '+200 Health'
  },
  SPATULA: {
    id: 'SPATULA',
    name: 'Spatula',
    iconPath: 'assets/SPATULA.png',
    description: 'It must do something'
  }
};

export const baseItemList: BaseItem[] = Object.values(baseItems);


export class CompletedItem extends BaseItem {
  in1: BaseItem;
  in2: BaseItem;
}

export const tier1ItemList: CompletedItem[] = [
  {
    id: 'BLOODTHIRSTER',
    name: 'Bloodthirster',
    iconPath: 'assets/BLOODTHIRSTER.png',
    description: '+35% Lifesteal',
    in1: baseItems.BF_SWORD,
    in2: baseItems.NEGATRON_CLOAK,
  },
  {
    id: 'FORCE_OF_NATURE',
    name: 'Force of Nature',
    iconPath: 'assets/FORCE_OF_NATURE.png',
    description: 'Gain +1 team size',
    in1: baseItems.SPATULA,
    in2: baseItems.SPATULA,
  },
  {
    id: 'GUINSOOS_RAGEBLADE',
    name: 'Guinsoo\'s Rageblade',
    iconPath: 'assets/GUINSOOS_RAGEBLADE.png',
    description: 'Attacks grant 3% Attack Speed. Stacks infinitely',
    in1: baseItems.RECURVE_BOW,
    in2: baseItems.NEEDLESSLY_LARGE_ROD,
  },
  {
    id: 'RAPID_FIRECANNON',
    name: 'Rapid Firecannon',
    iconPath: 'assets/RAPID_FIRECANNON.png',
    description: 'Wearer\'s attacks cannot be dodged. Attack Range is doubled',
    in1: baseItems.RECURVE_BOW,
    in2: baseItems.RECURVE_BOW,
  },
  {
    id: 'SPEAR_OF_SHOJIN',
    name: 'Spear of Shojin',
    iconPath: 'assets/SPEAR_OF_SHOJIN.png',
    description: 'After casting, wearer gains 20% of its max mana per attack',
    in1: baseItems.BF_SWORD,
    in2: baseItems.TEAR_OF_THE_GODDESS,
  },
  {
    id: 'STATIKK_SHIV',
    name: 'Statikk Shiv',
    iconPath: 'assets/STATIKK_SHIV.png',
    description: 'Every 3rd attack deals 100 splash magical damage',
    in1: baseItems.RECURVE_BOW,
    in2: baseItems.TEAR_OF_THE_GODDESS,
  },
];

export const tier2ItemList: CompletedItem[] = [
  {
    id: 'FROZEN_HEART',
    name: 'Frozen Heart',
    iconPath: 'assets/FROZEN_HEART.png',
    description: 'Adjacent enemies lose 20% Attack Speed',
    in1: baseItems.CHAIN_VEST,
    in2: baseItems.TEAR_OF_THE_GODDESS,
  }, {
    id: 'FROZEN_MALLET',
    name: 'Frozen Mallet',
    iconPath: 'assets/FROZEN_MALLET.png',
    description: 'Wearer is also a Glacial',
    in1: baseItems.GIANTS_BELT,
    in2: baseItems.SPATULA,
  }, {
    id: 'HEXTECH_GUNBLADE',
    name: 'Hextech Gunblade',
    iconPath: 'assets/HEXTECH_GUNBLADE.png',
    description: 'Heal for 25% of all damage dealt',
    in1: baseItems.BF_SWORD,
    in2: baseItems.NEEDLESSLY_LARGE_ROD,
  }, {
    id: 'LOCKET_OF_THE_IRON_SOLARI',
    name: 'Locket of the Iron Solari',
    iconPath: 'assets/LOCKET_OF_THE_IRON_SOLARI.png',
    description: 'On start of combat, all adjacent allies gain a shield of 200',
    in1: baseItems.NEEDLESSLY_LARGE_ROD,
    in2: baseItems.CHAIN_VEST,
  }, {
    id: 'RUNAANS_HURRICANE',
    name: 'Runaan\'s Hurricane',
    iconPath: 'assets/RUNAANS_HURRICANE.png',
    description: 'Attacks target 2 additional enemies. These additional attacks deal 50% damage',
    in1: baseItems.NEGATRON_CLOAK,
    in2: baseItems.SPATULA,
  }, {
    id: 'TITANIC_HYDRA',
    name: 'Titanic Hydra',
    iconPath: 'assets/TITANIC_HYDRA.png',
    description: 'Attacks deal 10% of the wearer\'s max Health as splash damage',
    in1: baseItems.RECURVE_BOW,
    in2: baseItems.GIANTS_BELT,
  }, {
    id: 'WARMOGS_ARMOR',
    name: 'Warmog\'s Armor',
    iconPath: 'assets/WARMOGS_ARMOR.png',
    description: 'Wearer regenerates 2.5% max Health per second',
    in1: baseItems.GIANTS_BELT,
    in2: baseItems.GIANTS_BELT,
  }, {
    id: 'YUUMI',
    name: 'Yuumi',
    iconPath: 'assets/YUUMI.png',
    description: 'Wearer is also a Sorcerer',
    in1: baseItems.SPATULA,
    in2: baseItems.NEEDLESSLY_LARGE_ROD,
  }, {
    id: 'ZEKES_HERALD',
    name: 'Zeke\'s Herald',
    iconPath: 'assets/ZEKES_HERALD.png',
    description: 'Adjacent allies gain +20% Attack Speed',
    in1: baseItems.BF_SWORD,
    in2: baseItems.GIANTS_BELT,
  }, {
    id: 'ZEPHYR',
    name: 'Zephyr',
    iconPath: 'assets/ZEPHYR.png',
    description: 'On start of combat, banish an enemy for 5 seconds',
    in1: baseItems.NEGATRON_CLOAK,
    in2: baseItems.GIANTS_BELT,
  },
];

export const tier3ItemList: CompletedItem[] = [
  {
    id: 'BLADE_OF_THE_RUINED_KING',
    name: 'Blade of the Ruined King',
    iconPath: 'assets/BLADE_OF_THE_RUINED_KING.png',
    description: 'Wearer is also a Blademaster',
    in1: baseItems.RECURVE_BOW,
    in2: baseItems.SPATULA,
  }, {
    id: 'CURSED_BLADE',
    name: 'Cursed Blade',
    iconPath: 'assets/CURSED_BLADE.png',
    description: 'Attacks have a low chance to Shrink (Reduce enemy\'s star level by 1)',
    in1: baseItems.RECURVE_BOW,
    in2: baseItems.NEGATRON_CLOAK,
  }, {
    id: 'DRAGONS_CLAW',
    name: 'Dragon\'s Claw',
    iconPath: 'assets/DRAGONS_CLAW.png',
    description: 'Gain 83% resistance to magic damage',
    in1: baseItems.NEGATRON_CLOAK,
    in2: baseItems.NEGATRON_CLOAK,
  }, {
    id: 'HUSH',
    name: 'Hush',
    iconPath: 'assets/HUSH.png',
    description: 'Attacks have a high chance to Silence',
    in1: baseItems.NEGATRON_CLOAK,
    in2: baseItems.TEAR_OF_THE_GODDESS,
  }, {
    id: 'INFINITY_EDGE',
    name: 'Infinity Edge',
    iconPath: 'assets/INFINITY_EDGE.png',
    description: 'Critical Strikes deal +100% damage',
    in1: baseItems.BF_SWORD,
    in2: baseItems.BF_SWORD,
  }, {
    id: 'KNIGHTS_VOW',
    name: 'Knight\'s Vow',
    iconPath: 'assets/KNIGHTS_VOW.png',
    description: 'Wearer is also a Knight',
    in1: baseItems.CHAIN_VEST,
    in2: baseItems.SPATULA,
  }, {
    id: 'LUDENS_ECHO',
    name: 'Luden\'s Echo',
    iconPath: 'assets/LUDENS_ECHO.png',
    description: 'Spells deal 100 splash damage on hit',
    in1: baseItems.NEEDLESSLY_LARGE_ROD,
    in2: baseItems.TEAR_OF_THE_GODDESS,
  }, {
    id: 'MORELLONOMICON',
    name: 'Morellonomicon',
    iconPath: 'assets/MORELLONOMICON.png',
    description: 'Spells deal burn damage equal to 5% of the enemy\'s maximum health per second',
    in1: baseItems.NEEDLESSLY_LARGE_ROD,
    in2: baseItems.GIANTS_BELT,
  }, {
    id: 'RABADONS_DEATHCAP',
    name: 'Rabadon\'s Deathcap',
    iconPath: 'assets/RABADONS_DEATHCAP.png',
    description: 'Wearer\'s Spell Damage stat is amplified by 50%',
    in1: baseItems.NEEDLESSLY_LARGE_ROD,
    in2: baseItems.NEEDLESSLY_LARGE_ROD,
  }, {
    id: 'RED_BUFF',
    name: 'Red Buff',
    iconPath: 'assets/RED_BUFF.png',
    description: 'Attacks deal 2.5% burn damage',
    in1: baseItems.CHAIN_VEST,
    in2: baseItems.GIANTS_BELT,
  }, {
    id: 'SERAPHS_EMBRACE',
    name: 'Seraph\'s Embrace',
    iconPath: 'assets/SERAPHS_EMBRACE.png',
    description: 'Regain 20 mana each time a spell is cast',
    in1: baseItems.TEAR_OF_THE_GODDESS,
    in2: baseItems.TEAR_OF_THE_GODDESS,
  }, {
    id: 'SWORD_OF_THE_DIVINE',
    name: 'Sword of the Divine',
    iconPath: 'assets/SWORD_OF_THE_DIVINE.png',
    description: 'Each second, the wearer has a 5% chance to gain 100% Critical Strike',
    in1: baseItems.BF_SWORD,
    in2: baseItems.RECURVE_BOW,
  }, {
    id: 'THORNMAIL',
    name: 'Thornmail',
    iconPath: 'assets/THORNMAIL.png',
    description: 'Reflect 25% of damage taken from attacks',
    in1: baseItems.CHAIN_VEST,
    in2: baseItems.CHAIN_VEST,
  }, {
    id: 'YOUMUUS_GHOSTBLADE',
    name: 'Youmuu\'s Ghostblade',
    iconPath: 'assets/YOUMUUS_GHOSTBLADE.png',
    description: 'Wearer is also an Assassin',
    in1: baseItems.BF_SWORD,
    in2: baseItems.SPATULA,
  },
];
