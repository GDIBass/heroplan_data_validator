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
  private readonly _purple:string;
  private readonly _yellow:string;
  private readonly _blue:string;
  private readonly _green:string;
  private readonly _red:string;

  constructor(rawYaml: object) {
    validate(this, rawYaml);
    this._purple = (rawYaml as RawImageSet).purple;
    this._yellow = (rawYaml as RawImageSet).yellow;
    this._blue = (rawYaml as RawImageSet).blue;
    this._green = (rawYaml as RawImageSet).green;
    this._red = (rawYaml as RawImageSet).red;
    validateImageType(this, 'purple', this._purple, ImageType.JPG);
    validateImageType(this, 'yellow', this._yellow, ImageType.JPG);
    validateImageType(this, 'blue', this._blue, ImageType.JPG);
    validateImageType(this, 'green', this._green, ImageType.JPG);
    validateImageType(this, 'red', this._red, ImageType.JPG);
  }

  getClassName = (): string => ImageSet.name;
  getRequiredKeys = (): string[] => requiredKeys;
  getImages = (): string[] => imageKeys;

  get purple(): string {
    return this._purple;
  }

  get yellow(): string {
    return this._yellow;
  }

  get blue(): string {
    return this._blue;
  }

  get green(): string {
    return this._green;
  }

  get red(): string {
    return this._red;
  }
}

export default ImageSet;