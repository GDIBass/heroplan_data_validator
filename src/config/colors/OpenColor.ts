import { Config, HasImages, HasRequiredKeys, validate } from "../../validation";
import validateImageType, { ImageType } from "../../validation/validateImageType";


const requiredKeys = ['avatarImage', 'troopImage'];
const imageKeys = ['avatarImage', 'troopImage'];

interface RawOpenColor {
  avatarImage: string;
  troopImage: string;
}

class OpenColor implements Config, HasRequiredKeys, HasImages {

  public readonly avatarImage: string;
  public readonly troopImage: string;

  constructor(rawYaml: object) {
    validate(this, rawYaml);
    this.avatarImage = (rawYaml as RawOpenColor).avatarImage;
    this.troopImage = (rawYaml as RawOpenColor).troopImage;
    validateImageType(this, 'avatarImage', this.avatarImage, ImageType.JPG);
    validateImageType(this, 'troopImage', this.troopImage, ImageType.JPG);
  }

  getClassName = () => OpenColor.name;
  getRequiredKeys = () => requiredKeys;
  getImages = () => imageKeys;
}

export default OpenColor;