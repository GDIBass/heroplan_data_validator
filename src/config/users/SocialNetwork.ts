import {
  Config,
  HasRequiredKeys,
  HasStrings,
  validate,
  validateKeysMatch
} from '../../validation';

const requiredKeys = ['key', 'description'];
const stringKeys = ['key', 'description'];

interface RawSocialNetwork {
  key: string;
  description: string;
}

class SocialNetwork implements Config, HasRequiredKeys, HasStrings {
  private readonly _key: string;
  private readonly _description: string;

  constructor(socialNetworkKey: string, rawYaml: object) {
    validate(this, rawYaml);
    validateKeysMatch(
      this,
      socialNetworkKey,
      (rawYaml as RawSocialNetwork).key
    );
    this._key = (rawYaml as RawSocialNetwork).key;
    this._description = (rawYaml as RawSocialNetwork).description;
  }

  getClassName = (): string => SocialNetwork.name;
  getRequiredKeys = (): string[] => requiredKeys;
  getStrings = (): string[] => stringKeys;

  get key(): string {
    return this._key;
  }

  get description(): string {
    return this._description;
  }
}

export default SocialNetwork;
