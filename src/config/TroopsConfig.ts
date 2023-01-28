import { Config, HasObjects, HasRequiredKeys, validate, validateNoDuplicateIds } from "../validation";
import Troop from "./troops/Troop";


const requiredKeys = ['troops', 'max_level_by_stars'];
const objectKeys = ['troops', 'max_level_by_stars'];

interface RawTroopsConfig {
  troops: {[key: string]: object},
  max_level_by_stars: {[key: string]: string},
}

class TroopsConfig implements Config, HasRequiredKeys, HasObjects {
  public readonly troops: {[key: string]: Troop} = {};
  public readonly maxLevelByStars: {[key: number]: number} = {};

  constructor(rawYaml: object) {
    validate(this, rawYaml);

    // troops
    const troops = (rawYaml as RawTroopsConfig).troops;
    for (let troop in troops) {
      this.troops[troop] = new Troop(troop, troops[troop]);
    }
    // max_level_by_stars
    const maxLevelByStars = (rawYaml as RawTroopsConfig).max_level_by_stars;
    for (let star in maxLevelByStars) {
      this.maxLevelByStars[parseInt(star)] = parseInt(maxLevelByStars[star]);
    }
    validateNoDuplicateIds(this, 'troops', Object.values(this.troops));
  }

  getClassName = () => TroopsConfig.name;
  getRequiredKeys = () => requiredKeys;
  getObjects = () => objectKeys;
}

export default TroopsConfig;