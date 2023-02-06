import {Config, HasObjects, HasRequiredKeys, validate} from '../validation';
import Ascension from './materials/Ascension';

const requiredKeys = ['ascension'];
const objectKeys = ['ascension'];

interface RawMaterialsConfig {
  ascension: {[key: string]: object};
}

type Ascensions = {[key: string]: Ascension};

class MaterialsConfig implements Config, HasRequiredKeys, HasObjects {
  private readonly _ascension: Ascensions = {};

  constructor(rawYaml: object) {
    validate(this, rawYaml);
    const ascension = (rawYaml as RawMaterialsConfig).ascension;
    for (const ascensionKey in ascension) {
      this._ascension[ascensionKey] = new Ascension(
        ascensionKey,
        ascension[ascensionKey]
      );
    }
  }

  getClassName = (): string => MaterialsConfig.name;
  getRequiredKeys = (): string[] => requiredKeys;
  getObjects = (): string[] => objectKeys;

  get ascension(): Ascensions {
    return this._ascension;
  }
}

export default MaterialsConfig;
