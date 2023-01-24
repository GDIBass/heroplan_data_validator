import Config from "./interfaces/Config";
import InvalidConfig from "../error/InvalidConfig";

export enum ImageType {
  PNG = 'png',
  JPG = 'jpg',
}

const validateImageType = (config: Config, key: string, value: string, type: ImageType) => {
  if (!value.endsWith(`.${type}`)) {
    throw new InvalidConfig(
      config,
      `${key} must be a ${type}: ${value}`
    );
  }
}

export default validateImageType;