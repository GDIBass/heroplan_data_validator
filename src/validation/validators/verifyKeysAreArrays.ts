import InvalidConfig from '../../error/InvalidConfig';
import HasArrays from '../interfaces/HasArrays';
import ohp from '../../util/ohp';

const verifyKeysAreArrays = (config: HasArrays, source: Object): void => {
  const keys: string[] = config.getArrays();
  for (const key of keys) {
    if (!ohp(source, key)) {
      continue;
    }
    // @ts-ignore
    if (!(source[key] instanceof Array)) {
      throw new InvalidConfig(config, `key is not an array: ${key}`);
    }
  }
};

export default verifyKeysAreArrays;
