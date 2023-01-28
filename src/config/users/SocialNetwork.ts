import { Config, HasRequiredKeys, HasStrings, validate, validateKeysMatch } from "../../validation";

const requiredKeys = ['key', 'description'];
const stringKeys = ['key', 'description'];

interface RawSocialNetwork {
  key: string,
  description: string,
}

class SocialNetwork implements Config, HasRequiredKeys, HasStrings {
  public readonly key: string;
  public readonly description: string;

  constructor(socialNetworkKey: string, rawYaml: object) {
    validate(this, rawYaml);
    validateKeysMatch(this, socialNetworkKey, (rawYaml as RawSocialNetwork).key);
    this.key = (rawYaml as RawSocialNetwork).key;
    this.description = (rawYaml as RawSocialNetwork).description;
  }

  getClassName = () => SocialNetwork.name;
  getRequiredKeys = () => requiredKeys;
  getStrings = () => stringKeys;
}

export default SocialNetwork;