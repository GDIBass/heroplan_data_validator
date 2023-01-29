import { Config, HasObjects, HasRequiredKeys, validate } from "../validation";
import Ascension from "./materials/Ascension";



const requiredKeys = ['ascension'];
const objectKeys = ['ascension'];

interface RawMaterialsConfig {
  ascension: {[key: string]: object},
}

class MaterialsConfig implements Config, HasRequiredKeys, HasObjects {

  private readonly ascension: {[key: string]: Ascension} = {};

  constructor(rawYaml: object) {
    validate(this, rawYaml);
    const ascension = (rawYaml as RawMaterialsConfig).ascension;
    for (let ascensionKey in ascension) {
      this.ascension[ascensionKey] = new Ascension(ascensionKey, ascension[ascensionKey]);
    }
  }

  getClassName = () => MaterialsConfig.name;
  getRequiredKeys = () => requiredKeys;
  getObjects = () => objectKeys;
}

export default MaterialsConfig;