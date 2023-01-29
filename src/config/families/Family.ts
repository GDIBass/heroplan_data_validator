import {
  Config,
  HasArrays,
  HasId,
  HasImages,
  HasIntegers,
  HasRequiredKeys,
  HasStrings,
  ImageType,
  validate,
  validateImageType,
  validateKeysMatch
} from "../../validation";

interface RawFamily {
  key: string;
  code: string;
  description: string;
  image: string;
  bonus: Array<string>,
}

const requiredKeys = [
  'key',
  'code',
  'description',
  'image',
  'bonus',
];

const stringKeys = [
  'key',
  'description',
];

const integerKeys = [
  'code',
];

const imageKeys = ['image'];

const arrayKeys = ['bonus'];

class Family implements Config, HasRequiredKeys, HasStrings, HasIntegers, HasImages, HasArrays, HasId {
  public readonly key:string;
  public readonly code:number;
  public readonly description:string;
  public readonly image:string;
  public readonly bonus:Array<string> = [];

  constructor(familyKey: string, rawYaml: object) {
    validate(this, rawYaml);
    validateKeysMatch(this, familyKey as string, (rawYaml as RawFamily).key as string);
    this.key = (rawYaml as RawFamily).key;
    this.code = parseInt((rawYaml as RawFamily).code);
    this.description = (rawYaml as RawFamily).description;
    this.image = (rawYaml as RawFamily).image;
    for (let bonusItem of (rawYaml as RawFamily).bonus) {
      this.bonus.push(bonusItem);
    }
    validateImageType(this, 'image', this.image, ImageType.PNG);
  }

  getClassName = () => Family.name;
  getRequiredKeys = () => requiredKeys;
  getArrays = () => arrayKeys;
  getIntegers = () => integerKeys;
  getImages = () => imageKeys;
  getStrings = () => stringKeys;
  getId = () => this.code;
}

export default Family;
