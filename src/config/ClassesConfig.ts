import { Config, HasObjects, HasRequiredKeys, validate } from "../validation";
import Class from './classes/Class';

const requiredKeys = ['classes'];
const objectKeys = ['classes'];

class ClassesConfig implements Config, HasRequiredKeys, HasObjects {

  public readonly classes: {[key: string]: Class} = {};

  constructor(rawYaml: object) {
    validate(this, rawYaml);

    // @ts-ignore
    const classes: {[key: string]: object} = rawYaml.classes;
    for (let classKey in classes) {
      this.classes[classKey] = new Class(classKey, classes[classKey]);
    }
  }

  getClassName = () => ClassesConfig.name;
  getRequiredKeys = () => requiredKeys;
  getObjects = () => objectKeys;
}

export default ClassesConfig;