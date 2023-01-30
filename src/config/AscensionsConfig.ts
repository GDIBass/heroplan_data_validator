import { Config, HasObjects, HasRequiredKeys, validate } from "../validation";
import validateAllIntegers from "../validation/validateAllIntegers";
import Ascension from "./ascensions/Ascension";

const requiredKeys = ['max_ascension', 'ascensions'];
const requiredObjects = ['max_ascension', 'ascensions'];

interface RawAscensionsConfig {
  max_ascension: {[key: string]: string},
  ascensions: {[key: string]: object},
}

type MaxAscension = { [key: number]: number };

type Ascensions = { [key: number]: Ascension };

class AscensionsConfig implements Config, HasObjects, HasRequiredKeys {

  private readonly _max_ascension: MaxAscension = {};
  private readonly _ascensions: Ascensions = {};

  constructor(rawYaml: object) {
    validate(this, rawYaml);

    const maxAscension: {[key: string]: string} = (rawYaml as RawAscensionsConfig).max_ascension;
    validateAllIntegers(this, 'max_ascension<keys>', Object.keys(maxAscension));
    validateAllIntegers(this, 'max_ascension<values>', Object.values(maxAscension));
    for (const maxKey in maxAscension) {
      this._max_ascension[parseInt(maxKey)] = parseInt(maxAscension[maxKey]);
    }

    const ascensions: {[key: string]: object} = (rawYaml as RawAscensionsConfig).ascensions;
    validateAllIntegers(this, 'ascensions<keys>', Object.keys(ascensions));
    for (const key in ascensions) {
      const intKey = parseInt(key);
      this._ascensions[intKey] = new Ascension(key, ascensions[key]);
    }
  }

  getClassName = (): string => AscensionsConfig.name;
  getRequiredKeys = (): string[] => requiredKeys;
  getObjects = (): string[] => requiredObjects;

  get max_ascension(): MaxAscension {
    return this._max_ascension;
  }

  get ascensions(): Ascensions {
    return this._ascensions;
  }
}

export default AscensionsConfig;