import InvalidConfig from '../error/InvalidConfig';
import Config from './interfaces/Config';

const validateKeysMatch = (
  config: Config,
  inputKey: string | number,
  setKey: string | number
): void => {
  if ((!setKey && setKey !== 0) || inputKey.toString() !== setKey.toString()) {
    throw new InvalidConfig(config, `keys do not match: ${inputKey}:${setKey}`);
  }
};

export const validateNamesMatch = (
  config: Config,
  inputKey: string,
  setKey: string
): void => {
  if (!setKey || inputKey.toString() !== setKey.toString()) {
    throw new InvalidConfig(
      config,
      `Names do not match: ${inputKey}:${setKey}`
    );
  }
};

export default validateKeysMatch;
