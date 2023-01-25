import { Config, HasRequiredKeys, validate } from "../validation";


const requiredKeys = ['speeds'];

class SpeedsConfig implements Config, HasRequiredKeys {

  constructor(rawYaml: object) {
    validate(this, rawYaml);
  }

  getClassName = () => SpeedsConfig.name;
  getRequiredKeys = () => requiredKeys;
}

export default SpeedsConfig;