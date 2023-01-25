import { Config, HasRequiredKeys, validate } from "../validation";


const requiredKeys = ['sharing_modes', 'social_networks'];

class UsersConfig implements Config, HasRequiredKeys {

  constructor(rawYaml: object) {
    validate(this, rawYaml);
  }

  getClassName = () => UsersConfig.name;
  getRequiredKeys = () => requiredKeys;
}

export default UsersConfig;