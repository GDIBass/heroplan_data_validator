import { HasImages, HasRequiredKeys, ImageType, validate, validateImageType } from "../../validation";

const requiredKeys = ['image'];
const imageKeys = ['image'];

interface RawReset {
  image: string;
}

class Reset implements HasRequiredKeys, HasImages {

  public readonly image: string;

  constructor(rawYaml: object) {
    validate(this, rawYaml);
    this.image = (rawYaml as RawReset).image;
    validateImageType(this, 'image', this.image, ImageType.PNG);
  }

  getClassName = () => Reset.name;
  getRequiredKeys = () => requiredKeys;
  getImages = () => imageKeys;
}

export default Reset;