import { Config, HasIntegers, HasRequiredKeys, HasStrings, validate, validateKeysMatch } from "../../validation";
import Effect from "./Effect";
import ohp from "../../util/ohp";
import InvalidConfig from "../../error/InvalidConfig";

const requiredKeys = [
  'key',
  'type',
  'amount',
];

const stringKeys = [
  'key',
  'type',
];

const integerKeys = [
  'amount'
];

interface RawNode {
  key: string,
  type: string,
  amount: string,
}

class Node implements Config, HasRequiredKeys, HasStrings, HasIntegers {
  public readonly key:string;
  public readonly type:string;
  public readonly amount:number;

  constructor(effectKey: string, rawYaml: object, effects: {[key: string]: Effect}) {
    validate(this, rawYaml);
    validateKeysMatch(this, effectKey, (rawYaml as RawNode).key);
    this.key = (rawYaml as RawNode).key;
    this.type = (rawYaml as RawNode).type;
    this.amount = parseInt((rawYaml as RawNode).amount);
    if (!ohp(effects, this.type)) {
      throw new InvalidConfig(
        this,
        `types does not exist for key ${this.key} and effect ${this.type}`
      );
    }
  }

  getClassName = () => Node.name;
  getRequiredKeys = () => requiredKeys;
  getStrings = () => stringKeys;
  getIntegers = () => integerKeys;
}

export default Node;