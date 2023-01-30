import { Config, HasObjects, HasRequiredKeys, validate } from "../validation";
import Color from "./colors/Color";


const requiredKeys = ['colors', 'open_color'];
const objectKeys = ['colors', 'open_color'];

type StringKeyAndValueObject = { [key: string]: string };

interface RawColorsConfig {
  colors: {[key: string]: object},
  open_color: StringKeyAndValueObject,
}

type Colors = { [key: string]: Color };

class ColorsConfig implements Config, HasRequiredKeys, HasObjects {

  private readonly _colors: Colors = {};
  private readonly _open_color: StringKeyAndValueObject = {};

  constructor(rawYaml: object) {
    validate(this, rawYaml);

    const colors: {[key: string]: object} = (rawYaml as RawColorsConfig).colors;
    for (const colorKey in colors) {
      this._colors[colorKey] = new Color(colorKey, colors[colorKey]);
    }

    const openColors: StringKeyAndValueObject = (rawYaml as RawColorsConfig).open_color;
    for (const openColorKey in openColors) {
      this._open_color[openColorKey] = openColors[openColorKey];
    }
  }

  getClassName = (): string => ColorsConfig.name;
  getRequiredKeys = (): string[] => requiredKeys;
  getObjects = (): string[] => objectKeys;

  get colors(): Colors {
    return this._colors;
  }

  get open_color(): StringKeyAndValueObject {
    return this._open_color;
  }
}

export default ColorsConfig;