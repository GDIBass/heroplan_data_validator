import { Config, HasImages, HasRequiredKeys, ImageType, validate, validateImageType } from "../../validation";

const requiredKeys = ['purple', 'yellow', 'blue', 'green', 'red'];
const imageKeys = ['purple', 'yellow', 'blue', 'green', 'red'];

interface RawImageSet {
  purple: string,
  yellow: string,
  blue: string,
  green: string,
  red: string,
}

class ImageSet implements Config, HasRequiredKeys, HasImages {
  public readonly purple:string;
  public readonly yellow:string;
  public readonly blue:string;
  public readonly green:string;
  public readonly red:string;

  constructor(rawYaml: object) {
    validate(this, rawYaml);
    this.purple = (rawYaml as RawImageSet).purple;
    this.yellow = (rawYaml as RawImageSet).yellow;
    this.blue = (rawYaml as RawImageSet).blue;
    this.green = (rawYaml as RawImageSet).green;
    this.red = (rawYaml as RawImageSet).red;
    validateImageType(this, 'purple', this.purple, ImageType.JPG);
    validateImageType(this, 'yellow', this.yellow, ImageType.JPG);
    validateImageType(this, 'blue', this.blue, ImageType.JPG);
    validateImageType(this, 'green', this.green, ImageType.JPG);
    validateImageType(this, 'red', this.red, ImageType.JPG);
  }

  getClassName = () => ImageSet.name;
  getRequiredKeys = () => requiredKeys;
  getImages = () => imageKeys;
}

export default ImageSet;