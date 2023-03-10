import Config from './Config';

interface HasBooleans extends Config {
  getBooleans(): string[];
}

export const hasBooleans = (arg: any): arg is HasBooleans =>
  typeof arg?.getBooleans === 'function';

export default HasBooleans;
