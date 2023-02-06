import Config from './Config';

interface HasImages extends Config {
  getImages(): string[];
}

export const hasImages = (arg: any): arg is HasImages =>
  typeof arg?.getImages === 'function';

export default HasImages;
