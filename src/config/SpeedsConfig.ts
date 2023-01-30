import { Config, HasObjects, HasRequiredKeys, validate, validateNoDuplicateIds } from "../validation";
import Speed from "./speeds/Speed";

interface RawSpeedsConfig {
  speeds: {[key: string]: object};
}

const requiredKeys = ['speeds'];
const objectKeys = ['speeds'];

class SpeedsConfig implements Config, HasRequiredKeys, HasObjects {
  public readonly speeds: {[key: string]: Speed} = {};
  public readonly validSpeeds: Set<string> = new Set();

  constructor(rawYaml: object) {
    validate(this, rawYaml);
    const speeds = (rawYaml as RawSpeedsConfig).speeds;
    for (let speed in speeds) {
      this.speeds[speed] = new Speed(speed, speeds[speed]);
      this.validSpeeds.add(this.speeds[speed].description);
    }
    validateNoDuplicateIds(this, 'speeds', Object.values(this.speeds));
  }

  isValidSpeed = (speed: string) => this.validSpeeds.has(speed);

  getClassName = () => SpeedsConfig.name;
  getRequiredKeys = () => requiredKeys;
  getObjects = () => objectKeys;
}

export default SpeedsConfig;