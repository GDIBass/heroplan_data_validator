import Config from "./interfaces/Config";
import InvalidConfig from "../error/InvalidConfig";

export enum ImageType {
  PNG = 'png',
  JPG = 'jpg',
}

export const checkImageType = (config: Config, errorString: string, value: string, type: ImageType) => {
  if (!value.endsWith(`.${type}`)) {
    throw new InvalidConfig(
      config,
      errorString
    );
  }
}

const validateImageType = (config: Config, key: string, value: string, type: ImageType) => {
  checkImageType(
    config,
    `${key} must be a ${type}: ${value}`,
    value,
    type
  );
}

export default validateImageType;