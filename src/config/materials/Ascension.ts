import {
  Config,
  HasImages,
  HasRequiredKeys,
  HasStrings,
  ImageType,
  validate,
  validateImageType,
  validateKeysMatch
} from '../../validation';

interface RawAscension {
  key: string;
  image: string;
}

const requiredKeys = ['key', 'image'];
const stringKeys = ['key'];
const imageKeys = ['image'];

class Ascension implements Config, HasRequiredKeys, HasStrings, HasImages {
  private readonly _key: string;
  private readonly _image: string;

  constructor(ascensionKey: string, rawYaml: object) {
    validate(this, rawYaml);
    validateKeysMatch(this, ascensionKey, (rawYaml as RawAscension).key);
    this._key = (rawYaml as RawAscension).key;
    this._image = (rawYaml as RawAscension).image;
    validateImageType(this, 'image', this._image, ImageType.PNG);
  }

  getClassName = (): string => Ascension.name;
  getRequiredKeys = (): string[] => requiredKeys;
  getStrings = (): string[] => stringKeys;
  getImages = (): string[] => imageKeys;

  get key(): string {
    return this._key;
  }

  get image(): string {
    return this._image;
  }
}

export default Ascension;
