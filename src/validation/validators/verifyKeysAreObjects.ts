import InvalidConfig from '../../error/InvalidConfig';
import HasObjects from '../interfaces/HasObjects';

const verifyKeysAreObjects = (config: HasObjects, source: Object) => {
  const keys: string[] = config.getObjects();
  for (const key of keys) {
    // @ts-ignore
    if (!source[key] instanceof Object) {
      throw new InvalidConfig(config, `key is not an object: ${key}`);
    }
  }
};

export default verifyKeysAreObjects;
