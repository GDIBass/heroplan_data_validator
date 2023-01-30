import { Config, HasIntegers, HasRequiredKeys, validate } from "../../validation";


const requiredKeys = ['attack', 'defense', 'health', 'mana'];
const integerKeys = ['attack', 'defense', 'health', 'mana'];

interface RawStatsBonuses {
  attack: string;
  defense: string;
  health: string;
  mana: string;
}

class StatBonuses implements Config, HasRequiredKeys, HasIntegers {
  private readonly _attack:number;
  private readonly _defense:number;
  private readonly _health:number;
  private readonly _mana:number;

  constructor(rawYaml: object) {
    validate(this, rawYaml);
    this._attack = parseInt((rawYaml as RawStatsBonuses).attack);
    this._defense = parseInt((rawYaml as RawStatsBonuses).defense);
    this._health = parseInt((rawYaml as RawStatsBonuses).health);
    this._mana = parseInt((rawYaml as RawStatsBonuses).mana);
  }

  getClassName = (): string => StatBonuses.name;
  getRequiredKeys = (): string[] => requiredKeys;
  getIntegers = (): string[] => integerKeys;


  get attack(): number {
    return this._attack;
  }

  get defense(): number {
    return this._defense;
  }

  get health(): number {
    return this._health;
  }

  get mana(): number {
    return this._mana;
  }
}

export default StatBonuses;