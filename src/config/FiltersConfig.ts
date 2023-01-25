import { Config, HasRequiredKeys, validate } from "../validation";


const requiredKeys = ['filters'];

class FiltersConfig implements Config, HasRequiredKeys {

  constructor(rawYaml: object) {
    validate(this, rawYaml);
  }

  getClassName = () => FiltersConfig.name;
  getRequiredKeys = () => requiredKeys;
}

export default FiltersConfig;