import { Config, HasObjects, HasRequiredKeys, validate, validateNoDuplicateIds } from "../validation";
import SharingMode from "./users/SharingMode";
import SocialNetwork from "./users/SocialNetwork";

const requiredKeys = ['sharing_modes', 'social_networks'];
const objectKeys = ['sharing_modes', 'social_networks'];

interface RawUsersConfig {
  sharing_modes: {[key: string]: object},
  social_networks: {[key: string]: object},
}

class UsersConfig implements Config, HasRequiredKeys, HasObjects {
  public readonly sharingModes: {[key: string]: SharingMode} = {};
  public readonly socialNetworks: {[key: string]: SocialNetwork} = {};

  constructor(rawYaml: object) {
    validate(this, rawYaml);
    const sharingModes = (rawYaml as RawUsersConfig).sharing_modes;
    for (let sharingMode in sharingModes) {
      this.sharingModes[sharingMode] = new SharingMode(sharingMode, sharingModes[sharingMode]);
    }
    const socialNetworks = (rawYaml as RawUsersConfig).sharing_modes;
    for (let socialNetwork in socialNetworks) {
      this.socialNetworks[socialNetwork] = new SocialNetwork(socialNetwork, socialNetworks[socialNetwork]);
    }
    validateNoDuplicateIds(this, 'sharingModes', Object.values(this.sharingModes));
  }

  getClassName = () => UsersConfig.name;
  getRequiredKeys = () => requiredKeys;
  getObjects = () => objectKeys;
}

export default UsersConfig;