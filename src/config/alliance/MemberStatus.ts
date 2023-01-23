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
  public id: number;
  public key: string;
  public description: string;

  constructor(statusKey: string, rawYaml: object) {
    validate(this, rawYaml);
    // @ts-ignore
    validateKeysMatch(this, statusKey, rawYaml.key);
    // @ts-ignore
    this.id = parseInt(rawYaml.id);
    // @ts-ignore
    this.key = rawYaml.key;
    // @ts-ignore
    this.description = rawYaml.description;
  }

  getRequiredKeys = () => requiredKeys;
  getClassName = () => MemberStatus.name;
  getStrings = () => requiredStrings;
  getIntegers = () => requiredIntegers;
  getId = () => this.id;
}

export default MemberStatus;