import {
  Config,
  HasArrays,
  HasId,
  HasIntegers,
  HasRequiredKeys,
  HasStrings,
  validate,
  validateKeysMatch
} from "../../validation";
import ClassesConfig from "../ClassesConfig";
import ohp from "../../util/ohp";
import InvalidConfig from "../../error/InvalidConfig";

const requiredKeys = ['key', 'type', 'description'];
const stringKeys = ['key', 'description'];
const integerKeys = ['type'];
const arrayKeys = ['classes'];

interface RawType {
  key: string,
  type: string,
  description: string,
  classes: Array<string>,
}

class Type implements Config, HasId, HasRequiredKeys, HasStrings, HasIntegers, HasArrays {
  private readonly _key: string;
  private readonly _type: number;
  private readonly _description: string;
  private readonly _classes: Set<string> = new Set<string>();

  constructor(typeKey: string, rawYaml: object, classesConfig: ClassesConfig) {
    validate(this, rawYaml);
    validateKeysMatch(this, typeKey, (rawYaml as RawType).key);
    this._key = (rawYaml as RawType).key;
    this._type = parseInt((rawYaml as RawType).type);
    this._description = (rawYaml as RawType).description;
    const classes = (rawYaml as RawType).classes || [];
    for (let className of classes) {
      if (!ohp(classesConfig.classes, className)) {
        throw new InvalidConfig(
          this,
          `Class for team type ${this._description} is invalid: ${className}`
        );
      }
      this._classes.add(className);
    }
  }

  getClassName = (): string => Type.name;
  getId = (): number => this._type;
  getIntegers = (): string[] => integerKeys;
  getRequiredKeys = (): string[] => requiredKeys;
  getStrings = (): string[] => stringKeys;
  getArrays = (): string[] => arrayKeys;

  get key(): string {
    return this._key;
  }

  get type(): number {
    return this._type;
  }

  get description(): string {
    return this._description;
  }

  get classes(): Set<string> {
    return this._classes;
  }
}

export default Type;