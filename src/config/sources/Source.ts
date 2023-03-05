import {
  Config,
  HasId,
  HasIntegers,
  HasRequiredKeys,
  HasStrings,
  validate,
  validateKeysMatch
} from '../../validation';
import getIdAndNameFromFilename, {
  IdAndName
} from '../../util/getIdAndNameFromFilename';
import {validateNamesMatch} from '../../validation/validateKeysMatch';

interface RawSource {
  key: string;
  code: string;
  description: string;
}

const requiredKeys = ['key', 'code', 'description'];
const stringKeys = ['key', 'description'];
const integerKey = ['code'];

class Source
  implements Config, HasRequiredKeys, HasStrings, HasIntegers, HasId
{
  private readonly _key: string;
  private readonly _code: number;
  private readonly _description: string;

  constructor(idAndName: IdAndName, rawYaml: object) {
    validate(this, rawYaml);
    validateKeysMatch(this, idAndName.id, (rawYaml as RawSource).code);
    validateNamesMatch(this, idAndName.name, (rawYaml as RawSource).key);
    this._key = (rawYaml as RawSource).key;
    this._code = parseInt((rawYaml as RawSource).code);
    this._description = (rawYaml as RawSource).description;
  }

  getClassName = (): string => Source.name;
  getRequiredKeys = (): string[] => requiredKeys;
  getStrings = (): string[] => stringKeys;
  getIntegers = (): string[] => integerKey;
  getId = (): number => this._code;

  get key(): string {
    return this._key;
  }

  get code(): number {
    return this._code;
  }

  get description(): string {
    return this._description;
  }
}

export default Source;
