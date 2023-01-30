import { Config, HasObjects, HasRequiredKeys, validate } from "../validation";
import Images from "./costumes/Images";
import Bonus from "./costumes/Bonus";


const requiredKeys = ['images', 'bonuses'];
const objectKeys = ['images', 'bonuses'];

interface RawCostumesConfig {
  images: object,
  bonuses: {[key: string]: object},
}

type Bonuses = { [key: string]: Bonus };

class CostumesConfig implements Config, HasRequiredKeys, HasObjects {

  private readonly _images: Images;
  private readonly _bonuses: Bonuses = {};

  constructor(rawYaml: object) {
    validate(this, rawYaml);

    this._images = new Images((rawYaml as RawCostumesConfig).images);

    const bonuses: {[key: string]: object} = (rawYaml as RawCostumesConfig).bonuses;
    for (let bonusKey in bonuses) {
      this._bonuses[bonusKey] = new Bonus(bonusKey, bonuses[bonusKey]);
    }
  }

  getClassName = (): string => CostumesConfig.name;
  getRequiredKeys = (): string[] => requiredKeys;
  getObjects = (): string[] => objectKeys;

  get images(): Images {
    return this._images;
  }

  get bonuses(): Bonuses {
    return this._bonuses;
  }
}

export default CostumesConfig;