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
  public readonly key: string;
  public readonly types: {[key: string]: Type} = {};

  // Validate no duplicate types.type
  constructor(typesetKey: string, rawYaml: object, classesConfig: ClassesConfig) {
    validate(this, rawYaml);
    const key = (rawYaml as RawTypeSet).key;
    validateKeysMatch(this, typesetKey, key);
    this.key = (rawYaml as RawTypeSet).key;
    const types = (rawYaml as RawTypeSet).types;
    for (let type in types) {
      this.types[type] = new Type(type, types[type], classesConfig);
    }
    validateNoDuplicateIds(this, 'types', Object.values(this.types));
  }

  getClassName = () => TypeSet.name;
  getObjects = () => objectKeys;
  getRequiredKeys = () => requiredKeys;
}

export default TypeSet;