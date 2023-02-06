import InvalidConfig from '../../error/InvalidConfig';
import HasStrings from '../interfaces/HasStrings';
import ohp from '../../util/ohp';

const verifyKeysAreStrings = (config: HasStrings, source: Object) => {
  const keys: string[] = config.getStrings();
  for (const key of keys) {
    if (!ohp(source, key)) {
      continue;
    }
    // @ts-ignore
    if (!source[key] instanceof String) {
      throw new InvalidConfig(config, `key is not a string: ${key}`);
    }
  }
};

export default verifyKeysAreStrings;
