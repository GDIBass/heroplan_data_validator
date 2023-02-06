import Config from './Config';

interface HasId extends Config {
  getId(): number;
}

export const hasId = (arg: any): arg is HasId =>
  typeof arg?.getId === 'function';

export default HasId;
