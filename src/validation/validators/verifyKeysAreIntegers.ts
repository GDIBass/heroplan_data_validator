import InvalidConfig from "../../error/InvalidConfig";
import ohp from "../../util/ohp";
import HasIntegers from "../interfaces/HasIntegers";

const verifyKeysAreIntegers = (config: HasIntegers, source: Object) => {
  const keys: Array<string> = config.getIntegers();
  for (let key of keys) {
    // @ts-ignore
    if (!source[key] instanceof String || isNaN(parseInt(source[key]))) {
      if (!ohp(source, key)) {
        continue;
      }
      throw new InvalidConfig(
        config,
        `key is not a integer: ${key}`
      );
    }
  }
}

export default verifyKeysAreIntegers;