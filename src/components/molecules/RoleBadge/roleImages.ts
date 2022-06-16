import {
  Alchemist,
  Archer,
  Cleric,
  Druid,
  Dwarf,
  Healer,
  Hunter,
  Monk,
  Necromancer,
  Paladin,
  Ranger,
  Rogue,
  Scribe,
  TavernKeeper,
  Warrior,
  Wizard,
} from '../../icons';

export const roleImage: {
  [name: string]: {
    img: any;
    color: string;
  };
} = {
  alchemist: { img: Alchemist, color: '#FFEF56' },
  archer: { img: Archer, color: '#AD17AD' },
  cleric: { img: Cleric, color: '#626CA0' },
  druid: { img: Druid, color: '#D35353' },
  dwarf: { img: Dwarf, color: '#CFAA18' },
  healer: { img: Healer, color: '#751545' },
  hunter: { img: Hunter, color: '#C64B1A' },
  monk: { img: Monk, color: '#4CED63' },
  necromancer: { img: Necromancer, color: '#455360' },
  paladin: { img: Paladin, color: '#0C4913' },
  ranger: { img: Ranger, color: '#B5A518' },
  rogue: { img: Rogue, color: '#79B6EE' },
  scribe: { img: Scribe, color: '#668466' },
  tavernkeeper: { img: TavernKeeper, color: '#439B3E' },
  warrior: { img: Warrior, color: '#EF0012' },
  wizard: { img: Wizard, color: '#24DCEA' },
};
