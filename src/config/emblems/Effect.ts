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
  public readonly key: string;
  public readonly description: string;
  public readonly effect: string;
  public readonly mode: string;
  public readonly image: string;

  constructor(effectKey: string, rawYaml: object, modes: {[key: string]: Mode}) {
    validate(this, rawYaml);
    validateKeysMatch(this, effectKey, (rawYaml as RawEffect).key);
    this.key = (rawYaml as RawEffect).key;
    this.description = (rawYaml as RawEffect).description;
    this.effect = (rawYaml as RawEffect).effect;
    this.mode = (rawYaml as RawEffect).mode;
    this.image = (rawYaml as RawEffect).image;
    validateImageType(this, 'image', this.image, ImageType.PNG);
    if (!ohp(modes, this.mode)) {
      throw new InvalidConfig(
        this,
        `modes does not exist for key ${this.key} and mode ${this.mode}`
      );
    }
  }

  getClassName = () => Effect.name;
  getRequiredKeys = () => requiredKeys;
  getStrings = () => stringKeys;
  getImages = () => imageKeys;
}

export default Effect;