import {hasRequiredKeys} from "./interfaces/HasRequiredKeys";
import Config from "./interfaces/Config";
import verifyRequiredKeys from "./validators/verifyRequiredKeys";
import { hasObjects } from "./interfaces/HasObjects";
import verifyKeysAreObjects from "./validators/verifyKeysAreObjects";
import { hasStrings } from "./interfaces/HasStrings";
import verifyKeysAreStrings from "./validators/verifyKeysAreStrings";
import { hasIntegers } from "./interfaces/HasIntegers";
import verifyKeysAreIntegers from "./validators/verifyKeysAreIntegers";

const validate = (config: Config, rawObject: object) => {
  if (hasRequiredKeys(config)) {
    verifyRequiredKeys(config, rawObject);
  }
  if (hasObjects(config)) {
    verifyKeysAreObjects(config, rawObject);
  }
  if (hasStrings(config)) {
    verifyKeysAreStrings(config, rawObject);
  }
  if (hasIntegers(config)) {
    verifyKeysAreIntegers(config, rawObject);
  }
}

export default validate;