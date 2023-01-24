import {
  Config,
  HasImages,
  HasIntegers,
  HasRequiredKeys,
  HasStrings,
  validate,
  validateKeysMatch
} from "../../validation";
import validateImageType, { ImageType } from "../../validation/validateImageType";

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

class Class implements Config, HasRequiredKeys, HasIntegers, HasStrings, HasImages {
  public readonly code: number;
  public readonly key: string;
  public readonly description: string;
  public readonly image: string;

  constructor(classKey: string, rawYaml: object) {
    validate(this, rawYaml);
    validateKeysMatch(this, classKey, (rawYaml as RawClass).key);
    this.code = parseInt((rawYaml as RawClass).code);
    this.key = (rawYaml as RawClass).key;
    this.description = (rawYaml as RawClass).description;
    this.image = (rawYaml as RawClass).image;

    validateImageType(this, 'image', this.image, ImageType.PNG);

    // TODO: Load image file and verify dimensions
  }

  getClassName = () => Class.name;
  getRequiredKeys = () => requiredKeys;
  getIntegers = () => integerKeys;
  getStrings = () => stringKeys;
  getImages = () => imageKeys;
}

export default Class;