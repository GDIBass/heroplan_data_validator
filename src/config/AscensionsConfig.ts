import { Config, HasObjects, HasRequiredKeys, validate } from "../validation";
import validateAllIntegers from "../validation/validateAllIntegers";
import Ascension from "./ascensions/Ascension";

const requiredKeys = ['max_ascension', 'ascensions'];
const requiredObjects = ['max_ascension', 'ascensions'];

interface RawAscensionsConfig {
  max_ascension: {[key: string]: string},
  ascensions: {[key: string]: object},
}

class AscensionsConfig implements Config, HasObjects, HasRequiredKeys {

  public readonly max_ascension: {[key: number]: number} = {};
  public readonly ascensions: {[key: number]: Ascension} = {};

  constructor(rawYaml: object) {
    validate(this, rawYaml);

    const maxAscension: {[key: string]: string} = (rawYaml as RawAscensionsConfig).max_ascension;
    validateAllIntegers(this, 'max_ascension<keys>', Object.keys(maxAscension));
    validateAllIntegers(this, 'max_ascension<values>', Object.values(maxAscension));
    for (let maxKey in maxAscension) {
      this.max_ascension[parseInt(maxKey)] = parseInt(maxAscension[maxKey]);
    }

    const ascensions: {[key: string]: object} = (rawYaml as RawAscensionsConfig).ascensions;
    validateAllIntegers(this, 'ascensions<keys>', Object.keys(ascensions));
    for (let key in ascensions) {
      const intKey = parseInt(key);
      this.ascensions[intKey] = new Ascension(key, ascensions[key]);
    }
  }

  getClassName = () => AscensionsConfig.name;
  getRequiredKeys = () => requiredKeys;
  getObjects = () => requiredObjects;
}

export default AscensionsConfig;