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
  public readonly key: number;
  public readonly description: string;
  public readonly star_max: {[key: number]: number} = {};
  public readonly limit_break: {[key: number]: number} = {};

  constructor(statusKey: string, rawYaml: object) {
    validate(this, rawYaml);
    validateKeysMatch(this, statusKey, (rawYaml as RawAscension).key);
    this.key = parseInt((rawYaml as RawAscension).key);
    this.description = (rawYaml as RawAscension).description;

    if (ohp(rawYaml, 'star_max')) {
      const starMax: { [key: string]: string } = (rawYaml as RawAscension).star_max;
      validateAllIntegers(this, 'star_max<keys>', Object.keys(starMax));
      validateAllIntegers(this, 'star_max<values>', Object.values(starMax));

      for (let key in starMax) {
        this.star_max[parseInt(key)] = parseInt(starMax[key]);
      }
    }

    if (ohp(rawYaml, 'limit_break')) {
      const limitBreak: { [key: string]: string } = (rawYaml as RawAscension).limit_break;
      validateAllIntegers(this, 'limit_break<keys>', Object.keys(limitBreak));
      validateAllIntegers(this, 'limit_break<values>', Object.values(limitBreak));

      for (let key in limitBreak) {
        this.limit_break[parseInt(key)] = parseInt(limitBreak[key]);
      }
    }
  }

  getClassName = () => Ascension.name;
  getRequiredKeys = () => requiredKeys;
  getStrings = () => stringKeys;
  getIntegers = () => integerKeys;
  getObjects = () => objectKeys;
}

export default Ascension;