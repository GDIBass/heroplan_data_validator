import Config from "./Config";

interface HasRequiredKeys extends Config {
  getRequiredKeys(): Array<string>;
}

export const hasRequiredKeys = (arg: any): arg is HasRequiredKeys =>
  typeof(arg?.getRequiredKeys) === 'function';

export default HasRequiredKeys;