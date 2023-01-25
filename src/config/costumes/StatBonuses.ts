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
  public readonly attack:number;
  public readonly defense:number;
  public readonly health:number;
  public readonly mana:number;

  constructor(rawYaml: object) {
    validate(this, rawYaml);
    this.attack = parseInt((rawYaml as RawStatsBonuses).attack);
    this.defense = parseInt((rawYaml as RawStatsBonuses).defense);
    this.health = parseInt((rawYaml as RawStatsBonuses).health);
    this.mana = parseInt((rawYaml as RawStatsBonuses).mana);
  }

  getClassName = () => StatBonuses.name;
  getRequiredKeys = () => requiredKeys;
  getIntegers = () => integerKeys;
}

export default StatBonuses;