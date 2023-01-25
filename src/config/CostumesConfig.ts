import { Config, HasObjects, HasRequiredKeys, validate } from "../validation";
import Images from "./costumes/Images";
import Bonus from "./costumes/Bonus";


const requiredKeys = ['images', 'bonuses'];
const objectKeys = ['images', 'bonuses'];

class CostumesConfig implements Config, HasRequiredKeys, HasObjects {

  public readonly images: Images;
  public readonly bonuses: {[key: string]: Bonus} = {};

  constructor(rawYaml: object) {
    validate(this, rawYaml);

    // @ts-ignore
    this.images = new Images(rawYaml.images);

    // @ts-ignore
    const bonuses: {[key: string]: object} = rawYaml.bonuses;
    for (let bonusKey in bonuses) {
      this.bonuses[bonusKey] = new Bonus(bonusKey, bonuses[bonusKey]);
    }
  }

  getClassName = () => CostumesConfig.name;
  getRequiredKeys = () => requiredKeys;
  getObjects = () => objectKeys;
}

export default CostumesConfig;