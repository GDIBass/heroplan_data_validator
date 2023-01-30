import { Config, HasObjects, HasRequiredKeys, validate, validateNoDuplicateIds } from "../validation";
import Speed from "./speeds/Speed";

interface RawSpeedsConfig {
  speeds: {[key: string]: object};
}

const requiredKeys = ['speeds'];
const objectKeys = ['speeds'];

type Speeds = { [key: string]: Speed };

type ValidSpeeds = Set<string>;

class SpeedsConfig implements Config, HasRequiredKeys, HasObjects {
  private readonly _speeds: Speeds = {};
  private readonly _validSpeeds: ValidSpeeds = new Set();

  constructor(rawYaml: object) {
    validate(this, rawYaml);
    const speeds = (rawYaml as RawSpeedsConfig).speeds;
    for (let speed in speeds) {
      this._speeds[speed] = new Speed(speed, speeds[speed]);
      this._validSpeeds.add(this._speeds[speed].description);
    }
    validateNoDuplicateIds(this, 'speeds', Object.values(this._speeds));
  }

  isValidSpeed = (speed: string) => this._validSpeeds.has(speed);

  getClassName = (): string => SpeedsConfig.name;
  getRequiredKeys = (): string[] => requiredKeys;
  getObjects = (): string[] => objectKeys;

  get speeds(): Speeds {
    return this._speeds;
  }

  get validSpeeds(): ValidSpeeds {
    return this._validSpeeds;
  }
}

export default SpeedsConfig;