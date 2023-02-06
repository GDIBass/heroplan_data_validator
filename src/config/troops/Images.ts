import {Config, HasObjects, HasRequiredKeys, validate} from '../../validation';
import ImageSet from './ImageSet';

const requiredKeys = ['full', 'half'];
const objectKeys = ['full', 'half'];

interface RawImages {
  full: object;
  half: object;
}

class Images implements Config, HasRequiredKeys, HasObjects {
  private readonly _full: ImageSet;
  private readonly _half: ImageSet;

  constructor(rawYaml: object) {
    validate(this, rawYaml);
    this._full = new ImageSet((rawYaml as RawImages).full);
    this._half = new ImageSet((rawYaml as RawImages).half);
  }

  getClassName = (): string => Images.name;
  getRequiredKeys = (): string[] => requiredKeys;
  getObjects = (): string[] => objectKeys;

  get full(): ImageSet {
    return this._full;
  }

  get half(): ImageSet {
    return this._half;
  }
}

export default Images;
