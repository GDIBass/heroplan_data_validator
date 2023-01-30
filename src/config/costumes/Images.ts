import { Config, HasImages, HasRequiredKeys, validate, validateImageType, ImageType } from "../../validation";


const requiredKeys = ["costume", "maxcostume"];
const imageKeys = ["costume", "maxcostume"];

interface RawImages {
  costume: string;
  maxcostume: string;
}

class Images implements Config, HasRequiredKeys, HasImages {
  private readonly _costume: string;
  private readonly _maxcostume: string;

  constructor(rawYaml: object) {
    validate(this, rawYaml);
    this._costume = (rawYaml as RawImages).costume;
    this._maxcostume = (rawYaml as RawImages).maxcostume;
    validateImageType(this, "costume", this._costume, ImageType.PNG);
    validateImageType(this, "maxcostume", this._maxcostume, ImageType.PNG);
  }

  getClassName = (): string => Images.name;
  getRequiredKeys = (): string[] => requiredKeys;
  getImages = (): string[] => imageKeys;

  get costume(): string {
    return this._costume;
  }

  get maxcostume(): string {
    return this._maxcostume;
  }
}

export default Images;