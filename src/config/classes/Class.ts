import {
  Config,
  HasImages,
  HasIntegers,
  HasRequiredKeys,
  HasStrings,
  validate,
  validateKeysMatch,
  validateImageType,
  ImageType
} from '../../validation';

const requiredKeys = ['code', 'key', 'description', 'image'];
const integerKeys = ['code'];
const stringKeys = ['key', 'description'];
const imageKeys = ['image'];

interface RawClass {
  code: string;
  key: string;
  description: string;
  image: string;
}

class Class
  implements Config, HasRequiredKeys, HasIntegers, HasStrings, HasImages
{
  private readonly _code: number;
  private readonly _key: string;
  private readonly _description: string;
  private readonly _image: string;

  constructor(classKey: string, rawYaml: object) {
    validate(this, rawYaml);
    validateKeysMatch(this, classKey, (rawYaml as RawClass).key);
    this._code = parseInt((rawYaml as RawClass).code);
    this._key = (rawYaml as RawClass).key;
    this._description = (rawYaml as RawClass).description;
    this._image = (rawYaml as RawClass).image;

    validateImageType(this, 'image', this._image, ImageType.PNG);

    // TODO: Load image file and verify dimensions
  }

  getClassName = (): string => Class.name;
  getRequiredKeys = (): string[] => requiredKeys;
  getIntegers = (): string[] => integerKeys;
  getStrings = (): string[] => stringKeys;
  getImages = (): string[] => imageKeys;

  get code(): number {
    return this._code;
  }

  get key(): string {
    return this._key;
  }

  get description(): string {
    return this._description;
  }

  get image(): string {
    return this._image;
  }
}

export default Class;
