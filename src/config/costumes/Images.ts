import { Config, HasImages, HasRequiredKeys, validate, validateImageType, ImageType } from "../../validation";


const requiredKeys = ["costume", "maxcostume"];
const imageKeys = ["costume", "maxcostume"];

interface RawImages {
  costume: string;
  maxcostume: string;
}

class Images implements Config, HasRequiredKeys, HasImages {
  public readonly costume: string;
  public readonly maxcostume: string;

  constructor(rawYaml: object) {
    validate(this, rawYaml);
    this.costume = (rawYaml as RawImages).costume;
    this.maxcostume = (rawYaml as RawImages).maxcostume;
    validateImageType(this, "costume", this.costume, ImageType.PNG);
    validateImageType(this, "maxcostume", this.maxcostume, ImageType.PNG);
  }

  getClassName = () => Images.name;
  getRequiredKeys = () => requiredKeys;
  getImages = () => imageKeys;
}

export default Images;