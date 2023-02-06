import Config from './Config';

interface HasFloats extends Config {
  getFloats(): string[];
}

export const hasFloats = (arg: any): arg is HasFloats =>
  typeof arg?.getFloats === 'function';

export default HasFloats;
