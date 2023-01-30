import { Config, HasObjects, HasRequiredKeys, HasStrings, validate, validateKeysMatch } from "../../validation";
import ohp from "../../util/ohp";


interface RawFilter {
  description: string,
  key: string,
  type: string,
  ascensions: {[key: string]: string},
}

const requiredKeys = ['description', 'type'];
const stringKeys = ['description', 'type'];
const objectKeys = ['ascensions'];

class Filter implements Config, HasRequiredKeys, HasStrings, HasObjects {
  private readonly _description: string;
  private readonly _type: string;
  private readonly _ascensions: {[key: number]: number} = {};

  constructor (filter: string, rawYaml: object) {
    validate(this, rawYaml);
    validateKeysMatch(this, filter, (rawYaml as RawFilter).key);
    this._description = (rawYaml as RawFilter).description;
    this._type = (rawYaml as RawFilter).type;
    if (ohp(rawYaml, 'ascensions')) {
      // this.ascensions = {};
      const ascensions = (rawYaml as RawFilter).ascensions;
      for (let ascension in ascensions) {
        this._ascensions[parseInt(ascension)] = parseInt(ascensions[ascension]);
      }
    }
  }

  getClassName = (): string => Filter.name;
  getRequiredKeys = (): string[] => requiredKeys;
  getObjects = (): string[] => objectKeys;
  getStrings = (): string[] => stringKeys;

  get description(): string {
    return this._description;
  }

  get type(): string {
    return this._type;
  }

  get ascensions(): { [p: number]: number } {
    return this._ascensions;
  }
}

export default Filter;