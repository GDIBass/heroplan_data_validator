import { HasStrings, HasIntegers, HasRequiredKeys, HasId, Config, validate, validateKeysMatch } from "../../validation";

const requiredKeys = [
  'key',
  'id',
  'description',
];

const requiredStrings = [
  'key',
  'description',
];

const requiredIntegers = [
  'id',
];

class MemberStatus implements Config, HasRequiredKeys, HasStrings, HasIntegers, HasId {
  private readonly _id: number;
  private readonly _key: string;
  private readonly _description: string;

  constructor(statusKey: string, rawYaml: object) {
    validate(this, rawYaml);
    // @ts-ignore
    validateKeysMatch(this, statusKey, rawYaml._key);
    // @ts-ignore
    this._id = parseInt(rawYaml._id);
    // @ts-ignore
    this._key = rawYaml._key;
    // @ts-ignore
    this._description = rawYaml._description;
  }

  getRequiredKeys = (): string[] => requiredKeys;
  getClassName = (): string => MemberStatus.name;
  getStrings = (): string[] => requiredStrings;
  getIntegers = (): string[] => requiredIntegers;
  getId = (): number => this._id;

  get id(): number {
    return this._id;
  }

  get key(): string {
    return this._key;
  }

  get description(): string {
    return this._description;
  }
}

export default MemberStatus;