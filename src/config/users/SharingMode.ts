import {
  Config,
  HasId,
  HasIntegers,
  HasRequiredKeys,
  HasStrings,
  validate,
  validateKeysMatch
} from '../../validation';

const requiredKeys = ['key', 'id', 'description'];
const stringKeys = ['key', 'description'];
const integerKeys = ['id'];

interface RawSharingMode {
  key: string;
  id: string;
  description: string;
}

class SharingMode
  implements Config, HasRequiredKeys, HasStrings, HasIntegers, HasId
{
  private readonly _key: string;
  private readonly _id: number;
  private readonly _description: string;

  constructor(sharingModeKey: string, rawYaml: object) {
    validate(this, rawYaml);
    validateKeysMatch(this, sharingModeKey, (rawYaml as RawSharingMode).key);
    this._key = (rawYaml as RawSharingMode).key;
    this._id = parseInt((rawYaml as RawSharingMode).id);
    this._description = (rawYaml as RawSharingMode).description;
  }

  getClassName = (): string => SharingMode.name;
  getRequiredKeys = (): string[] => requiredKeys;
  getStrings = (): string[] => stringKeys;
  getIntegers = (): string[] => integerKeys;
  getId = (): number => this._id;

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

export default SharingMode;
