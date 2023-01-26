import { Config, HasObjects, HasRequiredKeys, HasStrings, validate, validateKeysMatch } from "../../validation";
import ohp from "../../util/ohp";


interface RawFilter {
  description: string,
  type: string,
  ascensions: {[key: string]: string},
}

const requiredKeys = ['description', 'type', 'ascensions'];
const stringKeys = ['description', 'type'];
const objectKeys = ['ascensions'];

class Filter implements Config, HasRequiredKeys, HasStrings, HasObjects {
  private readonly description: string;
  private readonly type: string;
  private readonly ascensions: {[key: number]: number} = null;

  constructor (filter: string, rawYaml: object) {
    validate(this);
    validateKeysMatch(this, filter, (rawYaml as RawFilter).type);
    this.description = (rawYaml as RawFilter).description;
    this.type = (rawYaml as RawFilter).type;
    if (ohp(rawYaml, 'ascensions')) {
      this.ascensions = {};
      const ascensions = (rawYaml as RawFilter).ascensions;
      for (let ascension of ascensions) {
        this.ascensions[parseInt(ascension)] = ascensions[ascension];
      }
    }
  }

  getClassName = () => Filter.name;
  getRequiredKeys = () => requiredKeys;
  getObjects = () => objectKeys;
  getStrings = () => stringKeys;
}

export default Filter;