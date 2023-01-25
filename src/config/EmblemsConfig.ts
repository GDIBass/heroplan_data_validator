import { Config, HasRequiredKeys, validate } from "../validation";
import Totals from "./emblems/Totals";
import ClassesConfig from "./ClassesConfig";


const requiredKeys = ['totals', 'modes', 'effects', 'nodes', 'trees', 'reset'];

interface RawEmblemsConfig {
  totals: object,
  modes: object,
  effects: object,
  nodes: object,
  trees: object,
  reset: object,
}

class EmblemsConfig implements Config, HasRequiredKeys {

  public readonly totals: Totals;

  constructor(classesConfig: ClassesConfig, rawYaml: object) {
    validate(this, rawYaml);

    this.totals = new Totals((rawYaml as RawEmblemsConfig).totals);
    // TODO: THIS
    // Load modes
    // Load Effects (w/ modes for verification)
    // Load trees w/ effects and classes for verification
    // Load Reset
  }

  getClassName = () => EmblemsConfig.name;
  getRequiredKeys = () => requiredKeys;
}

export default EmblemsConfig;