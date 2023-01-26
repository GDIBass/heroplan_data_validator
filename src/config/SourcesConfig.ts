import { Config, HasRequiredKeys, validate } from "../validation";


const requiredKeys = ['sources'];

class SourcesConfig implements Config, HasRequiredKeys {

  constructor(rawYaml: object) {
    validate(this, rawYaml);
    // TODO: Build sources
  }

  getClassName = () => SourcesConfig.name;
  getRequiredKeys = () => requiredKeys;
}

export default SourcesConfig;