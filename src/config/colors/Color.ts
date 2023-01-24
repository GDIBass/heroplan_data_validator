import Config from "../../validation/interfaces/Config";
import HasRequiredKeys from "../../validation/interfaces/HasRequiredKeys";
import { HasImages, HasIntegers, HasStrings, validate, validateKeysMatch } from "../../validation";
import validateImageType, { ImageType } from "../../validation/validateImageType";


const requiredKeys = ['code', 'key', 'description', 'avatarImage', 'badgeImage'];
const integerKeys = ['code'];
const stringKeys = ['key', 'description'];
const imageKeys = ['avatarImage', 'badgeImage'];

interface RawColor {
  code: string;
  key: string;
  description: string;
  avatarImage: string;
  badgeImage: string;
}

class Color implements Config, HasRequiredKeys, HasIntegers, HasStrings, HasImages {

  public readonly code: number;
  public readonly key: string;
  public readonly description: string;
  public readonly avatarImage: string;
  public readonly badgeImage: string;

  constructor(colorKey: string, rawYaml: object) {
    validate(this, rawYaml);
    validateKeysMatch(this, colorKey, (rawYaml as RawColor).key);
    this.code = parseInt((rawYaml as RawColor).code);
    this.key = (rawYaml as RawColor).key;
    this.description = (rawYaml as RawColor).description;
    this.avatarImage = (rawYaml as RawColor).avatarImage;
    this.badgeImage = (rawYaml as RawColor).badgeImage;
    validateImageType(this, 'avatarImage', this.avatarImage, ImageType.PNG);
    validateImageType(this, 'badgeImage', this.badgeImage, ImageType.PNG);
  }

  getClassName = () => Color.name;
  getRequiredKeys = () => requiredKeys;
  getIntegers = () => integerKeys;
  getStrings = () => stringKeys;
  getImages = () => imageKeys;
}

export default Color;