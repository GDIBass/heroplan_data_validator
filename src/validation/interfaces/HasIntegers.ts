import Config from './Config';

interface HasIntegers extends Config {
  getIntegers(): string[];
}

export const hasIntegers = (arg: any): arg is HasIntegers =>
  typeof arg?.getIntegers === 'function';

export default HasIntegers;
