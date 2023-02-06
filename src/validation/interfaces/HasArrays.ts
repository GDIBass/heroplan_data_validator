import Config from './Config';

interface HasArrays extends Config {
  getArrays(): string[];
}

export const hasArrays = (arg: any): arg is HasArrays =>
  typeof arg?.getArrays === 'function';

export default HasArrays;
