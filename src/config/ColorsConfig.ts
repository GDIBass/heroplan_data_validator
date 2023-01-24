import { Config, HasObjects, HasRequiredKeys, validate } from "../validation";
import Color from "./colors/Color";


const requiredKeys = ['colors', 'open_color'];
const objectKeys = ['colors', 'open_color'];

class ColorsConfig implements Config, HasRequiredKeys, HasObjects {

  public colors: {[key: string]: Color} = {};
  public open_color: {[key: string]: string} = {};

  constructor(rawYaml: object) {
    validate(this, rawYaml);

  }

  getClassName = () => ColorsConfig.name;
  getRequiredKeys = () => requiredKeys;
  getObjects = () => objectKeys;
}