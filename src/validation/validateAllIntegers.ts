import Config from './interfaces/Config';
import InvalidConfig from '../error/InvalidConfig';

const validateAllIntegers = (
  config: Config,
  key: string,
  elements: string[]
): void => {
  for (const element of elements) {
    if (isNaN(parseInt(element))) {
      throw new InvalidConfig(
        config,
        `One of value in ${key} is not an integer: ${element}`
      );
    }
  }
};

export default validateAllIntegers;
