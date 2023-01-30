import { Config, HasObjects, HasRequiredKeys, validate } from "../validation";
import Class from './classes/Class';

const requiredKeys = ['classes'];
const objectKeys = ['classes'];

interface RawClassesConfig {
  classes: {[key: string]: object},
}

class ClassesConfig implements Config, HasRequiredKeys, HasObjects {

  public readonly classes: {[key: string]: Class} = {};

  constructor(rawYaml: object) {
    validate(this, rawYaml);

    const classes: {[key: string]: object} = (rawYaml as RawClassesConfig).classes;
    for (let classKey in classes) {
      this.classes[classKey] = new Class(classKey, classes[classKey]);
    }
  }

  getClassName = () => ClassesConfig.name;
  getRequiredKeys = () => requiredKeys;
  getObjects = () => objectKeys;
}

export default ClassesConfig;