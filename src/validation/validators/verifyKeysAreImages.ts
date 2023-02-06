import InvalidConfig from '../../error/InvalidConfig';
import ohp from '../../util/ohp';
import HasImages from '../interfaces/HasImages';

const verifyKeysAreImages = (config: HasImages, source: Object) => {
  const keys: string[] = config.getImages();
  for (const key of keys) {
    if (!ohp(source, key)) {
      continue;
    }
    // @ts-ignore
    const value = source[key];
    // @ts-ignore
    if (!value instanceof String) {
      throw new InvalidConfig(
        config,
        `key is not an imgur link: ${key}:${value}`
      );
    }
    if (
      !value.startsWith('https://i.imgur.com/') &&
      !value.startsWith('https://i.imgur.io/')
    ) {
      throw new InvalidConfig(
        config,
        `key is not an imgur link: ${key}:${value}`
      );
    }
  }
};

export default verifyKeysAreImages;
