import { Config, HasObjects, HasRequiredKeys, validate, validateNoDuplicateIds } from "../validation";
import SharingMode from "./users/SharingMode";
import SocialNetwork from "./users/SocialNetwork";

const requiredKeys = ['sharing_modes', 'social_networks'];
const objectKeys = ['sharing_modes', 'social_networks'];

interface RawUsersConfig {
  sharing_modes: {[key: string]: object},
  social_networks: {[key: string]: object},
}

type SharingModes = { [key: string]: SharingMode };

type SocialNetworks = { [key: string]: SocialNetwork };

class UsersConfig implements Config, HasRequiredKeys, HasObjects {
  private readonly _sharingModes: SharingModes = {};
  private readonly _socialNetworks: SocialNetworks = {};

  constructor(rawYaml: object) {
    validate(this, rawYaml);
    const sharingModes = (rawYaml as RawUsersConfig).sharing_modes;
    for (let sharingMode in sharingModes) {
      this._sharingModes[sharingMode] = new SharingMode(sharingMode, sharingModes[sharingMode]);
    }
    const socialNetworks = (rawYaml as RawUsersConfig).sharing_modes;
    for (let socialNetwork in socialNetworks) {
      this._socialNetworks[socialNetwork] = new SocialNetwork(socialNetwork, socialNetworks[socialNetwork]);
    }
    validateNoDuplicateIds(this, 'sharingModes', Object.values(this._sharingModes));
  }

  getClassName = (): string => UsersConfig.name;
  getRequiredKeys = (): string[] => requiredKeys;
  getObjects = (): string[] => objectKeys;


  get sharingModes(): SharingModes {
    return this._sharingModes;
  }

  get socialNetworks(): SocialNetworks {
    return this._socialNetworks;
  }
}

export default UsersConfig;