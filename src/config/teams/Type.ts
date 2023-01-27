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
  public readonly key: string;
  public readonly type: number;
  public readonly description: string;
  public readonly classes: Set<string> = new Set<string>();

  constructor(typeKey: string, rawYaml: object, classesConfig: ClassesConfig) {
    validate(this, rawYaml);
    validateKeysMatch(this, typeKey, (rawYaml as RawType).key);
    this.key = (rawYaml as RawType).key;
    this.type = parseInt((rawYaml as RawType).type);
    this.description = (rawYaml as RawType).description;
    const classes = (rawYaml as RawType).classes || [];
    for (let className of classes) {
      if (!ohp(classesConfig.classes, className)) {
        throw new InvalidConfig(
          this,
          `Class for team type ${this.description} is invalid: ${className}`
        );
      }
      this.classes.add(className);
    }
  }

  getClassName = () => Type.name;
  getId = () => this.type;
  getIntegers = () => integerKeys;
  getRequiredKeys = () => requiredKeys;
  getStrings = () => stringKeys;
  getArrays = () => arrayKeys;
}

export default Type;