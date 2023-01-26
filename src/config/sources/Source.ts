import { Config, HasId, HasIntegers, HasRequiredKeys, HasStrings, validate, validateKeysMatch } from "../../validation";

interface RawSource {
  key: string,
  code: string,
  description: string,
}

const requiredKeys = ['key', 'code', 'description'];
const stringKeys = ['key', 'description'];
const integerKey = ['code'];


class Source implements Config, HasRequiredKeys, HasStrings, HasIntegers, HasId {
  public readonly key: string;
  public readonly code: number;
  public readonly description: string;

  constructor(sourceKey: string, rawYaml: object) {
    validate(this, rawYaml);
    validateKeysMatch(this, sourceKey, (rawYaml as RawSource).key);
    this.key = (rawYaml as RawSource).key;
    this.code = parseInt((rawYaml as RawSource).code);
    this.description = (rawYaml as RawSource).description;
  }

  getClassName = () => Source.name;
  getRequiredKeys = () => requiredKeys;
  getStrings = () => stringKeys;
  getIntegers = () => integerKey;
  getId = () => this.code;
}

export default Source;