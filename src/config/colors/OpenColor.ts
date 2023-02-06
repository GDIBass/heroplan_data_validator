import {Config, HasImages, HasRequiredKeys, validate} from '../../validation';
import validateImageType, {
  ImageTypes as ImageType
} from '../../validation/validateImageType';

const requiredKeys = ['avatarImage', 'troopImage'];
const imageKeys = ['avatarImage', 'troopImage'];

interface RawOpenColor {
  avatarImage: string;
  troopImage: string;
}

class OpenColor implements Config, HasRequiredKeys, HasImages {
  private readonly _avatarImage: string;
  private readonly _troopImage: string;

  constructor(rawYaml: object) {
    validate(this, rawYaml);
    this._avatarImage = (rawYaml as RawOpenColor).avatarImage;
    this._troopImage = (rawYaml as RawOpenColor).troopImage;
    validateImageType(this, 'avatarImage', this._avatarImage, ImageType.JPG);
    validateImageType(this, 'troopImage', this._troopImage, ImageType.JPG);
  }

  getClassName = (): string => OpenColor.name;
  getRequiredKeys = (): string[] => requiredKeys;
  getImages = (): string[] => imageKeys;

  get avatarImage(): string {
    return this._avatarImage;
  }

  get troopImage(): string {
    return this._troopImage;
  }
}

export default OpenColor;
