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
import Mode from "./Mode";
import ohp from "../../util/ohp";
import InvalidConfig from "../../error/InvalidConfig";


const requiredKeys = ['key', 'description', 'effect', 'mode', 'image'];
const stringKeys = ['key', 'description', 'effect', 'mode'];
const imageKeys = ['image'];

interface RawEffect {
  key: string,
  description: string,
  effect: string,
  mode: string,
  image: string,
}

class Effect implements Config, HasRequiredKeys, HasStrings, HasImages {
  private readonly _key: string;
  private readonly _description: string;
  private readonly _effect: string;
  private readonly _mode: string;
  private readonly _image: string;

  constructor(effectKey: string, rawYaml: object, modes: {[key: string]: Mode}) {
    validate(this, rawYaml);
    validateKeysMatch(this, effectKey, (rawYaml as RawEffect).key);
    this._key = (rawYaml as RawEffect).key;
    this._description = (rawYaml as RawEffect).description;
    this._effect = (rawYaml as RawEffect).effect;
    this._mode = (rawYaml as RawEffect).mode;
    this._image = (rawYaml as RawEffect).image;
    validateImageType(this, 'image', this._image, ImageType.PNG);
    if (!ohp(modes, this._mode)) {
      throw new InvalidConfig(
        this,
        `modes does not exist for key ${this._key} and mode ${this._mode}`
      );
    }
  }

  getClassName = (): string => Effect.name;
  getRequiredKeys = (): string[] => requiredKeys;
  getStrings = (): string[] => stringKeys;
  getImages = (): string[] => imageKeys;


  get key(): string {
    return this._key;
  }

  get description(): string {
    return this._description;
  }

  get effect(): string {
    return this._effect;
  }

  get mode(): string {
    return this._mode;
  }

  get image(): string {
    return this._image;
  }
}

export default Effect;