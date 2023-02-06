import Config from './Config';

interface HasObjects extends Config {
  getObjects(): string[];
}

export const hasObjects = (arg: any): arg is HasObjects =>
  typeof arg?.getObjects === 'function';

export default HasObjects;
