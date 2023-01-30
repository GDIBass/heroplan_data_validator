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
  private readonly _key: string;
  private readonly _id: number;
  private readonly _stars: number;
  private readonly _name: string;
  private readonly _description: string;
  private readonly _images: Images;
  private readonly _manaBonus: {[key: number]: number} = {};

  constructor(troopKey: string, rawYaml: object) {
    validate(this, rawYaml);
    validateKeysMatch(this, troopKey, (rawYaml as RawTroop).key);
    this._key = (rawYaml as RawTroop).key;
    this._id = parseInt((rawYaml as RawTroop).id);
    this._stars = parseInt((rawYaml as RawTroop).stars);
    this._name = (rawYaml as RawTroop).name;
    this._description = (rawYaml as RawTroop).description;
    this._images = new Images((rawYaml as RawTroop).images);
    const manaBonus = (rawYaml as RawTroop).mana_bonus || {};
    for (let breakpoint in manaBonus) {
      this._manaBonus[parseInt(breakpoint)] = parseInt(manaBonus[breakpoint]);
    }
  }

  getClassName = (): string => Troop.name;
  getIntegers = (): string[] => integerKeys;
  getRequiredKeys = (): string[] => requiredKeys;
  getStrings = (): string[] => stringKeys;
  getObjects = (): string[] => objectKeys;
  getId = (): number => this._id;


  get key(): string {
    return this._key;
  }

  get id(): number {
    return this._id;
  }

  get stars(): number {
    return this._stars;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get images(): Images {
    return this._images;
  }

  get manaBonus(): { [p: number]: number } {
    return this._manaBonus;
  }
}

export default Troop;