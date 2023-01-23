import {
  Config,
  HasImages,
  HasIntegers,
  HasRequiredKeys,
  HasStrings,
  validate,
  validateKeysMatch
} from "../../validation";
import InvalidConfig from "../../error/InvalidConfig";

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
  public code: number;
  public key: string;
  public description: string;
  public image: string;

  constructor(classKey: string, rawYaml: object) {
    validate(this, rawYaml);
    validateKeysMatch(this, classKey, (rawYaml as RawClass).key);
    this.code = parseInt((rawYaml as RawClass).code);
    this.key = (rawYaml as RawClass).key;
    this.description = (rawYaml as RawClass).description;
    this.image = (rawYaml as RawClass).image;

    if (!this.image.endsWith(".png")) {
      throw new InvalidConfig(
        this,
        `image must be a png ${this.image}`
      );
    }

    // TODO: Load image file and verify dimensions
  }

  getClassName = () => Class.name;
  getRequiredKeys = () => requiredKeys;
  getIntegers = () => integerKeys;
  getStrings = () => stringKeys;
  getImages = () => imageKeys;
}

export default Class;