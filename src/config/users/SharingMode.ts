import { Config, HasId, HasIntegers, HasRequiredKeys, HasStrings, validate, validateKeysMatch } from "../../validation";

const requiredKeys = ['key', 'id', 'description'];
const stringKeys = ['key', 'description'];
const integerKeys = ['id'];

interface RawSharingMode {
  key: string,
  id: string,
  description: string,
}

class SharingMode implements Config, HasRequiredKeys, HasStrings, HasIntegers, HasId {
  public readonly key: string;
  public readonly id: number;
  public readonly description: string;

  constructor(sharingModeKey: string, rawYaml: object) {
    validate(this, rawYaml);
    validateKeysMatch(this, sharingModeKey, (rawYaml as RawSharingMode).key);
    this.key = (rawYaml as RawSharingMode).key;
    this.id = parseInt((rawYaml as RawSharingMode).id);
    this.description = (rawYaml as RawSharingMode).description;
  }

  getClassName = () => SharingMode.name;
  getRequiredKeys = () => requiredKeys;
  getStrings = () => stringKeys;
  getIntegers = () => integerKeys;
  getId = () => this.id;
}

export default SharingMode;