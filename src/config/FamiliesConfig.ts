import { Config, HasRequiredKeys, validate } from "../validation";


const requiredKeys = ['families'];

class FamiliesConfig implements Config, HasRequiredKeys {

  constructor(rawYaml: object) {
    validate(this, rawYaml);
  }

  getClassName = () => FamiliesConfig.name;
  getRequiredKeys = () => requiredKeys;
}

export default FamiliesConfig;