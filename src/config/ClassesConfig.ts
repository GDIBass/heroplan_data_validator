import { Config, HasObjects, HasRequiredKeys, validate } from "../validation";
import Class from './classes/Class';

const requiredKeys = ['classes'];
const objectKeys = ['classes'];

interface RawClassesConfig {
  classes: {[key: string]: object},
}

type ClassesType = {[key: string]: Class};

class ClassesConfig implements Config, HasRequiredKeys, HasObjects {

  private readonly _classes: ClassesType = {};

  constructor(rawYaml: object) {
    validate(this, rawYaml);

    const classes: {[key: string]: object} = (rawYaml as RawClassesConfig).classes;
    for (let classKey in classes) {
      this._classes[classKey] = new Class(classKey, classes[classKey]);
    }
  }

  getClassName = (): string => ClassesConfig.name;
  getRequiredKeys = (): string[] => requiredKeys;
  getObjects = (): string[] => objectKeys;

  get classes(): ClassesType {
    return this._classes;
  }
}

export default ClassesConfig;