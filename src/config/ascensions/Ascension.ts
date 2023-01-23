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

class Ascension implements Config, HasRequiredKeys, HasIntegers, HasStrings, HasObjects {
  public key: number;
  public description: string;
  public star_max: {[key: number]: number} = {};
  public limit_break: {[key: number]: number} = {};

  constructor(statusKey: string, rawYaml: object) {
    validate(this, rawYaml);
    // @ts-ignore
    validateKeysMatch(statusKey, rawYaml.key);
    // @ts-ignore
    this.key = rawYaml.key;
    // @ts-ignore
    this.description = rawYaml.description;

    if (ohp(rawYaml, 'star_max')) {
      // @ts-ignore
      const starMax: { [key: string]: string } = rawYaml.star_max;
      validateAllIntegers(this, 'star_max<keys>', Object.keys(starMax));
      validateAllIntegers(this, 'star_max<values>', Object.values(starMax));

      for (let key in starMax) {
        this.star_max[parseInt(key)] = parseInt(starMax[key]);
      }
    }

    if (ohp(rawYaml, 'limit_break')) {
      // @ts-ignore
      const limitBreak: { [key: string]: string } = rawYaml.limit_break;
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