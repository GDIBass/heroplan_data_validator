import {
  HasImages,
  HasRequiredKeys,
  ImageType,
  validate,
  validateImageType
} from '../../validation';

const requiredKeys = ['image'];
const imageKeys = ['image'];

interface RawReset {
  image: string;
}

class Reset implements HasRequiredKeys, HasImages {
  private readonly _image: string;

  constructor(rawYaml: object) {
    validate(this, rawYaml);
    this._image = (rawYaml as RawReset).image;
    validateImageType(this, 'image', this._image, ImageType.PNG);
  }

  getClassName = (): string => Reset.name;
  getRequiredKeys = (): string[] => requiredKeys;
  getImages = (): string[] => imageKeys;

  get image(): string {
    return this._image;
  }
}

export default Reset;
