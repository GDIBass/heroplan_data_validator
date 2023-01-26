import { Config, HasRequiredKeys, HasStrings, validate, validateKeysMatch } from "../../validation";

const requiredKeys = ['key', 'display'];
const stringKeys = ['key', 'display'];

interface RawMode {
  key: string;
  display: string;
}

class Mode implements Config, HasRequiredKeys, HasStrings {
  public readonly key: string;
  public readonly display: string;

  constructor(modeKey: string, rawYaml: object) {
    validate(this, rawYaml);
    validateKeysMatch(this, modeKey, (rawYaml as RawMode).key);
    this.key = (rawYaml as RawMode).key;
    this.display = (rawYaml as RawMode).display;
  }

  getClassName = () => Mode.name;
  getRequiredKeys = () => requiredKeys;
  getStrings = () => stringKeys;
}

export default Mode;