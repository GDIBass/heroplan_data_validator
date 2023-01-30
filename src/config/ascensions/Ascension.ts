import {
  Config,
  HasIntegers,
  HasObjects,
  HasRequiredKeys,
  HasStrings,
  validate,
  validateKeysMatch
} from "../../validation";
import validateAllIntegers from "../../validation/validateAllIntegers";
import ohp from "../../util/ohp";

const requiredKeys = [
  'key',
  'description',
];

const integerKeys = [
  'key',
];

const stringKeys = [
  'description',
];

const objectKeys = [
  'star_max',
  'limit_break',
];

interface RawAscension {
  key: string;
  description: string;
  star_max: {[key: string]: string};
  limit_break: {[key: string]: string};
}

class Ascension implements Config, HasRequiredKeys, HasIntegers, HasStrings, HasObjects {
  private readonly _key: number;
  private readonly _description: string;
  private readonly _star_max: {[key: number]: number} = {};
  private readonly _limit_break: {[key: number]: number} = {};

  constructor(statusKey: string, rawYaml: object) {
    validate(this, rawYaml);
    validateKeysMatch(this, statusKey, (rawYaml as RawAscension).key);
    this._key = parseInt((rawYaml as RawAscension).key);
    this._description = (rawYaml as RawAscension).description;

    if (ohp(rawYaml, 'star_max')) {
      const starMax: { [key: string]: string } = (rawYaml as RawAscension).star_max;
      validateAllIntegers(this, 'star_max<keys>', Object.keys(starMax));
      validateAllIntegers(this, 'star_max<values>', Object.values(starMax));

      for (let key in starMax) {
        this._star_max[parseInt(key)] = parseInt(starMax[key]);
      }
    }

    if (ohp(rawYaml, 'limit_break')) {
      const limitBreak: { [key: string]: string } = (rawYaml as RawAscension).limit_break;
      validateAllIntegers(this, 'limit_break<keys>', Object.keys(limitBreak));
      validateAllIntegers(this, 'limit_break<values>', Object.values(limitBreak));

      for (let key in limitBreak) {
        this._limit_break[parseInt(key)] = parseInt(limitBreak[key]);
      }
    }
  }

  getClassName = (): string => Ascension.name;
  getRequiredKeys = (): string[] => requiredKeys;
  getStrings = (): string[] => stringKeys;
  getIntegers = (): string[] => integerKeys;
  getObjects = (): string[] => objectKeys;


  get key(): number {
    return this._key;
  }

  get description(): string {
    return this._description;
  }

  get star_max(): { [p: number]: number } {
    return this._star_max;
  }

  get limit_break(): { [p: number]: number } {
    return this._limit_break;
  }
}

export default Ascension;