import InvalidConfig from '../../error/InvalidConfig';
import ohp from '../../util/ohp';
import HasFloats from '../interfaces/HasFloats';

const verifyKeysAreFloats = (config: HasFloats, source: Object) => {
  const keys: string[] = config.getFloats();
  for (const key of keys) {
    // @ts-ignore
    if (!source[key] instanceof String || isNaN(parseFloat(source[key]))) {
      if (!ohp(source, key)) {
        continue;
      }
      throw new InvalidConfig(config, `key is not a float: ${key}`);
    }
  }
};

export default verifyKeysAreFloats;
