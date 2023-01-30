import Type from "./Type";
import ClassesConfig from "../ClassesConfig";
import {
  Config,
  HasObjects,
  HasRequiredKeys,
  validate,
  validateKeysMatch,
  validateNoDuplicateIds
} from "../../validation";

const requiredKeys = ['key', 'types'];
const objectKeys = ['types'];

interface RawTypeSet {
  key: string,
  types: {[key: string]: object},
}

class TypeSet implements Config, HasRequiredKeys, HasObjects {
  private readonly _key: string;
  private readonly _types: {[key: string]: Type} = {};

  // Validate no duplicate types.type
  constructor(typesetKey: string, rawYaml: object, classesConfig: ClassesConfig) {
    validate(this, rawYaml);
    const key = (rawYaml as RawTypeSet).key;
    validateKeysMatch(this, typesetKey, key);
    this._key = (rawYaml as RawTypeSet).key;
    const types = (rawYaml as RawTypeSet).types;
    for (let type in types) {
      this._types[type] = new Type(type, types[type], classesConfig);
    }
    validateNoDuplicateIds(this, 'types', Object.values(this._types));
  }

  getClassName = (): string => TypeSet.name;
  getObjects = (): string[] => objectKeys;
  getRequiredKeys = (): string[] => requiredKeys;

  get key(): string {
    return this._key;
  }

  get types(): { [p: string]: Type } {
    return this._types;
  }
}

export default TypeSet;