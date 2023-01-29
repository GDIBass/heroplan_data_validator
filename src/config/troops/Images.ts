import { Config, HasObjects, HasRequiredKeys, validate } from "../../validation";
import ImageSet from "./ImageSet";

const requiredKeys = ['full', 'half'];
const objectKeys = ['full', 'half'];

interface RawImages {
  full: object,
  half: object,
}

class Images implements Config, HasRequiredKeys, HasObjects {
  public readonly full: ImageSet;
  public readonly half: ImageSet;

  constructor (rawYaml: object) {
    validate(this, rawYaml);
    this.full = new ImageSet((rawYaml as RawImages).full);
    this.half = new ImageSet((rawYaml as RawImages).half);
  }

  getClassName = () => Images.name;
  getRequiredKeys = () => requiredKeys;
  getObjects = () => objectKeys;
}

export default Images;