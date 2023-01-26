import {
  Config,
  HasImages,
  HasRequiredKeys,
  HasStrings,
  ImageType,
  validate,
  validateImageType,
  validateKeysMatch
} from "../../validation";


interface RawAscension {
  key: string,
  image: string,
}

const requiredKeys = ['key', 'image'];
const stringKeys = ['key'];
const imageKeys = ['image'];

class Ascension implements Config, HasRequiredKeys, HasStrings, HasImages {
  public readonly key: string;
  public readonly image: string;

  constructor(ascensionKey: string, rawYaml: object) {
    validate(this, rawYaml);
    validateKeysMatch(this, ascensionKey, (rawYaml as RawAscension).key);
    this.key = (rawYaml as RawAscension).key;
    this.image = (rawYaml as RawAscension).image;
    validateImageType(this, 'image', this.image, ImageType.PNG);
  }

  getClassName = () => Ascension.name;
  getRequiredKeys = () => requiredKeys;
  getStrings = () => stringKeys;
  getImages = () => imageKeys;
}