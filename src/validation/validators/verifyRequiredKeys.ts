import ohp from "../../util/ohp";
import MissingRequiredKey from "../../error/MissingRequiredKey";
import HasRequiredKeys from "../interfaces/HasRequiredKeys";

const verifyRequiredKeys = (config: HasRequiredKeys, source: object): void => {
  const requiredKeys: Array<string> = config.getRequiredKeys();

  for (let key of requiredKeys) {
    if (!ohp(source, key)) {
      throw new MissingRequiredKey(
        config,
        key,
        source
      );
    }
  }
}

export default verifyRequiredKeys;