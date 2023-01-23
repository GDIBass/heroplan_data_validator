import InvalidConfig from "../../error/InvalidConfig";
import HasObjects from "../interfaces/HasObjects";

const verifyKeysAreObjects = (config: HasObjects, source: Object) => {
  const keys: Array<string> = config.getObjects();
  for (let key of keys) {
    // @ts-ignore
    if (!source[key] instanceof Object) {
      throw new InvalidConfig(
        config,
        `key is not an object: ${key}`
      );
    }
  }
}

export default verifyKeysAreObjects;