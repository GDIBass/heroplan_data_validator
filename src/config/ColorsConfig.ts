import { Config, HasObjects, HasRequiredKeys, validate } from "../validation";
import Color from "./colors/Color";


const requiredKeys = ['colors', 'open_color'];
const objectKeys = ['colors', 'open_color'];

class ColorsConfig implements Config, HasRequiredKeys, HasObjects {

  public readonly colors: {[key: string]: Color} = {};
  public readonly open_color: {[key: string]: string} = {};

  constructor(rawYaml: object) {
    validate(this, rawYaml);

    // @ts-ignore
    const colors: {[key: string]: object} = rawYaml.colors;
    for (let colorKey in colors) {
      this.colors[colorKey] = new Color(colorKey, colors[colorKey]);
    }

    // @ts-ignore
    const openColors: {[key: string]: string} = rawYaml.openColors;
    for (let openColorKey in openColors) {
      this.open_color[openColorKey] = openColors[openColorKey];
    }
  }

  getClassName = () => ColorsConfig.name;
  getRequiredKeys = () => requiredKeys;
  getObjects = () => objectKeys;
}

export default ColorsConfig;