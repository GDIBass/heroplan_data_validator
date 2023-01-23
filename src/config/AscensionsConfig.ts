import { Config, HasObjects, HasRequiredKeys, validate } from "../validation";
import validateAllIntegers from "../validation/validateAllIntegers";
import Ascension from "./ascensions/Ascension";

const requiredKeys = ['max_ascension', 'ascensions'];
const requiredObjects = ['max_ascension', 'ascensions'];

class AscensionsConfig implements Config, HasObjects, HasRequiredKeys {

  public max_ascension: {[key: number]: number} = {};
  public ascensions: {[key: number]: Ascension} = {};

  constructor(rawYaml: object) {
    validate(this, rawYaml);

    // @ts-ignore
    const maxAscension: {[key: string]: string} = rawYaml.max_ascension;
    validateAllIntegers(this, 'max_ascension<keys>', Object.keys(maxAscension));
    validateAllIntegers(this, 'max_ascension<values>', Object.values(maxAscension));
    for (let maxKey in maxAscension) {
      this.max_ascension[parseInt(maxKey)] = parseInt(maxAscension[maxKey]);
    }

    // @ts-ignore
    const ascensions: {[key: string]: object} = rawYaml.ascensions;
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