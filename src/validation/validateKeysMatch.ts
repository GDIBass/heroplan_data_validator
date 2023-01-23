import InvalidConfig from "../error/InvalidConfig";
import Config from "./interfaces/Config";

const validateKeysMatch = (config: Config, inputKey: string, setKey: string): void => {
  if (inputKey !== setKey) {
    throw new InvalidConfig(
      config,
      `keys do not match: ${inputKey}:${setKey}`
    );
  }
};

export default validateKeysMatch;