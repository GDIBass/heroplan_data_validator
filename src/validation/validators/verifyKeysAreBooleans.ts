import InvalidConfig from "../../error/InvalidConfig";
import ohp from "../../util/ohp";
import HasBooleans from "../interfaces/HasBooleans";

const verifyKeysAreBooleans = (config: HasBooleans, source: Object) => {
  const keys: Array<string> = config.getBooleans();
  for (let key of keys) {
    // @ts-ignore
    const item = (source[key] || '').toString().toLowerCase();
    if (!ohp(source, key)) {
      continue;
    }
    switch (item) {
      case 'true':
      case 'false':
        break;
      default:
        throw new InvalidConfig(
          config,
          `key is not a integer: ${key}`
        );
    }
  }
}

export default verifyKeysAreBooleans;