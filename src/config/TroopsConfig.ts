import {
  Config,
  HasObjects,
  HasRequiredKeys,
  validate,
  validateNoDuplicateIds
} from '../validation';
import Troop from './troops/Troop';

const requiredKeys = ['troops', 'max_level_by_stars'];
const objectKeys = ['troops', 'max_level_by_stars'];

interface RawTroopsConfig {
  troops: {[key: string]: object};
  max_level_by_stars: {[key: string]: string};
}

type Troops = {[key: string]: Troop};

type Numbers = {[key: number]: number};

class TroopsConfig implements Config, HasRequiredKeys, HasObjects {
  private readonly _troops: Troops = {};
  private readonly _maxLevelByStars: Numbers = {};

  constructor(rawYaml: object) {
    validate(this, rawYaml);

    // troops
    const troops = (rawYaml as RawTroopsConfig).troops;
    for (const troop in troops) {
      this._troops[troop] = new Troop(troop, troops[troop]);
    }
    // max_level_by_stars
    const maxLevelByStars = (rawYaml as RawTroopsConfig).max_level_by_stars;
    for (const star in maxLevelByStars) {
      this._maxLevelByStars[parseInt(star)] = parseInt(maxLevelByStars[star]);
    }
    validateNoDuplicateIds(this, 'troops', Object.values(this._troops));
  }

  getClassName = (): string => TroopsConfig.name;
  getRequiredKeys = (): string[] => requiredKeys;
  getObjects = (): string[] => objectKeys;

  get troops(): Troops {
    return this._troops;
  }

  get maxLevelByStars(): Numbers {
    return this._maxLevelByStars;
  }
}

export default TroopsConfig;
