import {hasRequiredKeys} from './interfaces/HasRequiredKeys';
import Config from './interfaces/Config';
import verifyRequiredKeys from './validators/verifyRequiredKeys';
import {hasObjects} from './interfaces/HasObjects';
import verifyKeysAreObjects from './validators/verifyKeysAreObjects';
import {hasStrings} from './interfaces/HasStrings';
import verifyKeysAreStrings from './validators/verifyKeysAreStrings';
import {hasIntegers} from './interfaces/HasIntegers';
import verifyKeysAreIntegers from './validators/verifyKeysAreIntegers';
import {hasImages} from './interfaces/HasImages';
import verifyKeysAreImages from './validators/verifyKeysAreImages';
import {hasFloats} from './interfaces/HasFloats';
import verifyKeysAreFloats from './validators/verifyKeysAreFloats';
import {hasBooleans} from './interfaces/HasBooleans';
import verifyKeysAreBooleans from './validators/verifyKeysAreBooleans';
import {hasArrays} from './interfaces/HasArrays';
import verifyKeysAreArrays from './validators/verifyKeysAreArrays';

const validate = (config: Config, rawObject: object): void => {
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
  if (hasImages(config)) {
    verifyKeysAreImages(config, rawObject);
  }
  if (hasFloats(config)) {
    verifyKeysAreFloats(config, rawObject);
  }
  if (hasBooleans(config)) {
    verifyKeysAreBooleans(config, rawObject);
  }

  if (hasArrays(config)) {
    verifyKeysAreArrays(config, rawObject);
  }
};

export default validate;
