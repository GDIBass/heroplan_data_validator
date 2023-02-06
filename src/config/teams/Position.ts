import {
  Config,
  HasId,
  HasIntegers,
  HasRequiredKeys,
  HasStrings,
  validate,
  validateKeysMatch
} from '../../validation';

interface RawPosition {
  key: string;
  id: string;
  description: string;
}

const requiredKeys = ['key', 'id', 'description'];
const stringKeys = ['key', 'description'];
const integerKeys = ['id'];

class Position
  implements Config, HasId, HasRequiredKeys, HasStrings, HasIntegers
{
  private readonly _key: string;
  private readonly _id: number;
  private readonly _description: string;

  constructor(positionKey: string, rawYaml: object) {
    validate(this, rawYaml);
    validateKeysMatch(this, positionKey, (rawYaml as RawPosition).key);
    this._key = (rawYaml as RawPosition).key;
    this._id = parseInt((rawYaml as RawPosition).id);
    this._description = (rawYaml as RawPosition).description;
  }

  getClassName = (): string => Position.name;
  getId = (): number => this._id;
  getIntegers = (): string[] => integerKeys;
  getRequiredKeys = (): string[] => requiredKeys;
  getStrings = (): string[] => stringKeys;

  get key(): string {
    return this._key;
  }

  get id(): number {
    return this._id;
  }

  get description(): string {
    return this._description;
  }
}

export default Position;
