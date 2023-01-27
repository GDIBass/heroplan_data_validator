import { Config, HasId, HasIntegers, HasRequiredKeys, HasStrings, validate, validateKeysMatch } from "../../validation";

interface RawPosition {
  key: string,
  id: string,
  description: string,
}

const requiredKeys = ['key', 'id', 'description'];
const stringKeys = ['key', 'description'];
const integerKeys = ['id'];

class Position implements Config, HasId, HasRequiredKeys, HasStrings, HasIntegers {
  public readonly key: string;
  public readonly id: number;
  public readonly description: string;

  constructor(positionKey: string, rawYaml: object) {
    validate(this, rawYaml);
    validateKeysMatch(this, positionKey, (rawYaml as RawPosition).key);
    this.key = (rawYaml as RawPosition).key;
    this.id = parseInt((rawYaml as RawPosition).id);
    this.description = (rawYaml as RawPosition).description;
  }

  getClassName = () => Position.name;
  getId = () => this.id;
  getIntegers = () => integerKeys;
  getRequiredKeys = () => requiredKeys;
  getStrings = () => stringKeys;
}

export default Position;