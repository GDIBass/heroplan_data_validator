import { Config, HasRequiredKeys, validate } from "../validation";


const requiredKeys = ['troops', 'max_level_by_stars'];

class TroopsConfig implements Config, HasRequiredKeys {

  constructor(rawYaml: object) {
    validate(this, rawYaml);
  }

  getClassName = () => TroopsConfig.name;
  getRequiredKeys = () => requiredKeys;
}

export default TroopsConfig;