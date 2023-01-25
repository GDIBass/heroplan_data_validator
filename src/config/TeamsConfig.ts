import { Config, HasRequiredKeys, validate } from "../validation";


const requiredKeys = ['types', 'categories', 'positions'];

class TeamsConfig implements Config, HasRequiredKeys {

  constructor(rawYaml: object) {
    validate(this, rawYaml);
  }

  getClassName = () => TeamsConfig.name;
  getRequiredKeys = () => requiredKeys;
}

export default TeamsConfig;