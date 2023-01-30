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

  private readonly _code: number;
  private readonly _key: string;
  private readonly _description: string;
  private readonly _avatarImage: string;
  private readonly _badgeImage: string;

  constructor(colorKey: string, rawYaml: object) {
    validate(this, rawYaml);
    validateKeysMatch(this, colorKey, (rawYaml as RawColor).key);
    this._code = parseInt((rawYaml as RawColor).code);
    this._key = (rawYaml as RawColor).key;
    this._description = (rawYaml as RawColor).description;
    this._avatarImage = (rawYaml as RawColor).avatarImage;
    this._badgeImage = (rawYaml as RawColor).badgeImage;
    validateImageType(this, 'avatarImage', this._avatarImage, ImageType.PNG);
    validateImageType(this, 'badgeImage', this._badgeImage, ImageType.PNG);
  }

  getClassName = (): string => Color.name;
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

  get avatarImage(): string {
    return this._avatarImage;
  }

  get badgeImage(): string {
    return this._badgeImage;
  }
}

export default Color;