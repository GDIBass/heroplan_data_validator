import {
  Config,
  HasArrays,
  HasId,
  HasImages,
  HasIntegers,
  HasRequiredKeys,
  HasStrings,
  ImageType,
  validate,
  validateImageType,
  validateKeysMatch
} from '../../validation';
import getIdAndNameFromFilename, {
  IdAndName
} from '../../util/getIdAndNameFromFilename';
import {validateNamesMatch} from '../../validation/validateKeysMatch';

interface RawFamily {
  key: string;
  code: string;
  description: string;
  image: string;
  bonus: string[];
}

const requiredKeys = ['key', 'code', 'description', 'image', 'bonus'];

const stringKeys = ['key', 'description'];

const integerKeys = ['code'];

const imageKeys = ['image'];

const arrayKeys = ['bonus'];

class Family
  implements
    Config,
    HasRequiredKeys,
    HasStrings,
    HasIntegers,
    HasImages,
    HasArrays,
    HasId
{
  private readonly _key: string;
  private readonly _code: number;
  private readonly _description: string;
  private readonly _image: string;
  private readonly _bonus: string[] = [];

  constructor(idAndName: IdAndName, rawYaml: object) {
    validate(this, rawYaml);
    validateKeysMatch(this, idAndName.id, (rawYaml as RawFamily).code);
    validateNamesMatch(this, idAndName.name, (rawYaml as RawFamily).key);
    this._key = (rawYaml as RawFamily).key;
    this._code = parseInt((rawYaml as RawFamily).code);
    this._description = (rawYaml as RawFamily).description;
    this._image = (rawYaml as RawFamily).image;
    for (const bonusItem of (rawYaml as RawFamily).bonus) {
      this._bonus.push(bonusItem);
    }
    validateImageType(this, 'image', this._image, ImageType.PNG);
  }

  getClassName = (): string => Family.name;
  getRequiredKeys = (): string[] => requiredKeys;
  getArrays = (): string[] => arrayKeys;
  getIntegers = (): string[] => integerKeys;
  getImages = (): string[] => imageKeys;
  getStrings = (): string[] => stringKeys;
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

  get image(): string {
    return this._image;
  }

  get bonus(): string[] {
    return this._bonus;
  }
}

export default Family;
