import { Config, HasRequiredKeys, validate } from "../validation";


const requiredKeys = ['types', 'categories', 'positions'];

class TeamsConfig implements Config, HasRequiredKeys {

  constructor(rawYaml: object) {
    validate(this, rawYaml);
    // TODO: Build TypeSets w/ classes for validation
    // TODO: Build Categories w/ Typesets, colors for validation
    // TODO: Build Positions
  }

  getClassName = () => TeamsConfig.name;
  getRequiredKeys = () => requiredKeys;
}

export default TeamsConfig;