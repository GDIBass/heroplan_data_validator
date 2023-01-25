import Config from "../../validation/interfaces/Config";
import HasRequiredKeys from "../../validation/interfaces/HasRequiredKeys";
import HasStrings from "../../validation/interfaces/HasStrings";
import HasObjects from "../../validation/interfaces/HasObjects";
import { validate, validateKeysMatch } from "../../validation";
import StatBonuses from "./StatBonuses";


const requiredKeys = ['key', 'max', '4', '3', '2'];
const stringKeys = ['key'];
const objectKeys = ['max', '4', '3', '2'];

interface RawBonus {
  key: string;
  max: object;
  4: object;
  3: object;
  2: object;
}

class Bonus implements Config, HasRequiredKeys, HasStrings, HasObjects {

  public readonly key: string;
  public readonly max: StatBonuses;
  public readonly 4: StatBonuses;
  public readonly 3: StatBonuses;
  public readonly 2: StatBonuses;

  constructor(bonusKey: string, rawYaml: object) {
    validate(this, rawYaml);
    validateKeysMatch(this, bonusKey, (rawYaml as RawBonus).key);
    this.key = (rawYaml as RawBonus).key;
    this.max = new StatBonuses((rawYaml as RawBonus).max);
    this[4] = new StatBonuses((rawYaml as RawBonus)[4]);
    this[3] = new StatBonuses((rawYaml as RawBonus)[3]);
    this[2] = new StatBonuses((rawYaml as RawBonus)[2]);
  }

  getClassName = () => Bonus.name;
  getRequiredKeys = () => requiredKeys;
  getStrings = () => stringKeys;
  getObjects = () => objectKeys;
}

export default Bonus;