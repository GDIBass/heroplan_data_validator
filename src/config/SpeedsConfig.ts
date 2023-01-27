import { Config, HasObjects, HasRequiredKeys, validate } from "../validation";
import Speed from "./speeds/Speed";

interface RawSpeedsConfig {
  speeds: {[key: string]: object};
}

const requiredKeys = ['speeds'];
const objectKeys = ['speeds'];

class SpeedsConfig implements Config, HasRequiredKeys, HasObjects {
  private readonly speeds: {[key: string]: Speed} = {};

  constructor(rawYaml: object) {
    validate(this, rawYaml);
    const speeds = (rawYaml as RawSpeedsConfig).speeds;
    for (let speed in speeds) {
      this.speeds[speed] = new Speed(speed, speeds[speed]);
    }
  }

  getClassName = () => SpeedsConfig.name;
  getRequiredKeys = () => requiredKeys;
  getObjects = () => objectKeys;
}

export default SpeedsConfig;