import { Config, HasRequiredKeys, validate } from "../validation";


const requiredKeys = ['ascension'];

class MaterialsConfig implements Config, HasRequiredKeys {

  constructor(rawYaml: object) {
    validate(this, rawYaml);
  }

  getClassName = () => MaterialsConfig.name;
  getRequiredKeys = () => requiredKeys;
}

export default MaterialsConfig;