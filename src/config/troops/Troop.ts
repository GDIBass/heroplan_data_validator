import Images from "./Images";
import {
  Config, HasId,
  HasIntegers,
  HasObjects,
  HasRequiredKeys,
  HasStrings,
  validate,
  validateKeysMatch
} from "../../validation";

const requiredKeys = ['key', 'id', 'stars', 'name', 'description', 'images'];
const stringKeys = ['key', 'name', 'description'];
const objectKeys = ['images', 'manaBonus'];
const integerKeys  = ['id', 'stars'];

interface RawTroop {
  key: string,
  id: string,
  stars: string,
  name: string,
  description: string,
  images: {[key: string]: object},
  mana_bonus: {[key: string]: string},
}

class Troop implements Config, HasRequiredKeys, HasStrings, HasObjects, HasIntegers, HasId {
  public readonly key: string;
  public readonly id: number;
  public readonly stars: number;
  public readonly name: string;
  public readonly description: string;
  public readonly images: Images;
  public readonly manaBonus: {[key: number]: number} = {};

  constructor(troopKey: string, rawYaml: object) {
    validate(this, rawYaml);
    validateKeysMatch(this, troopKey, (rawYaml as RawTroop).key);
    this.key = (rawYaml as RawTroop).key;
    this.id = parseInt((rawYaml as RawTroop).id);
    this.stars = parseInt((rawYaml as RawTroop).stars);
    this.name = (rawYaml as RawTroop).name;
    this.description = (rawYaml as RawTroop).description;
    this.images = new Images((rawYaml as RawTroop).images);
    const manaBonus = (rawYaml as RawTroop).mana_bonus || {};
    for (let breakpoint in manaBonus) {
      this.manaBonus[parseInt(breakpoint)] = parseInt(manaBonus[breakpoint]);
    }
  }

  getClassName = () => Troop.name;
  getIntegers = () => integerKeys;
  getRequiredKeys = () => requiredKeys;
  getStrings = () => stringKeys;
  getObjects = () => objectKeys;
  getId = () => this.id;
}

export default Troop;