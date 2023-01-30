import { Config, HasRequiredKeys, HasStrings, validate, validateKeysMatch } from "../../validation";

const requiredKeys = ['key', 'display'];
const stringKeys = ['key', 'display'];

interface RawMode {
  key: string;
  display: string;
}

class Mode implements Config, HasRequiredKeys, HasStrings {
  private readonly _key: string;
  private readonly _display: string;

  constructor(modeKey: string, rawYaml: object) {
    validate(this, rawYaml);
    validateKeysMatch(this, modeKey, (rawYaml as RawMode).key);
    this._key = (rawYaml as RawMode).key;
    this._display = (rawYaml as RawMode).display;
  }

  getClassName = (): string => Mode.name;
  getRequiredKeys = (): string[] => requiredKeys;
  getStrings = (): string[] => stringKeys;

  get key(): string {
    return this._key;
  }

  get display(): string {
    return this._display;
  }
}

export default Mode;