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
  private readonly _key:string;
  private readonly _type:string;
  private readonly _amount:number;

  constructor(effectKey: string, rawYaml: object, effects: {[key: string]: Effect}) {
    validate(this, rawYaml);
    validateKeysMatch(this, effectKey, (rawYaml as RawNode).key);
    this._key = (rawYaml as RawNode).key;
    this._type = (rawYaml as RawNode).type;
    this._amount = parseInt((rawYaml as RawNode).amount);
    if (!ohp(effects, this._type)) {
      throw new InvalidConfig(
        this,
        `types does not exist for key ${this._key} and effect ${this._type}`
      );
    }
  }

  getClassName = (): string => Node.name;
  getRequiredKeys = (): string[] => requiredKeys;
  getStrings = (): string[] => stringKeys;
  getIntegers = (): string[] => integerKeys;

  get key(): string {
    return this._key;
  }

  get type(): string {
    return this._type;
  }

  get amount(): number {
    return this._amount;
  }
}

export default Node;