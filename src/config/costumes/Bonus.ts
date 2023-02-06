import Config from '../../validation/interfaces/Config';
import HasRequiredKeys from '../../validation/interfaces/HasRequiredKeys';
import HasStrings from '../../validation/interfaces/HasStrings';
import HasObjects from '../../validation/interfaces/HasObjects';
import {validate, validateKeysMatch} from '../../validation';
import StatBonuses from './StatBonuses';

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
  private readonly _key: string;
  private readonly _max: StatBonuses;
  private readonly '_4': StatBonuses;
  private readonly '_3': StatBonuses;
  private readonly '_2': StatBonuses;

  constructor(bonusKey: string, rawYaml: object) {
    validate(this, rawYaml);
    validateKeysMatch(this, bonusKey, (rawYaml as RawBonus).key);
    this._key = (rawYaml as RawBonus).key;
    this._max = new StatBonuses((rawYaml as RawBonus).max);
    this._4 = new StatBonuses((rawYaml as RawBonus)[4]);
    this._3 = new StatBonuses((rawYaml as RawBonus)[3]);
    this._2 = new StatBonuses((rawYaml as RawBonus)[2]);
  }

  getClassName = (): string => Bonus.name;
  getRequiredKeys = (): string[] => requiredKeys;
  getStrings = (): string[] => stringKeys;
  getObjects = (): string[] => objectKeys;

  get key(): string {
    return this._key;
  }

  get max(): StatBonuses {
    return this._max;
  }

  get 4(): StatBonuses {
    return this._4;
  }

  get 3(): StatBonuses {
    return this._3;
  }

  get 2(): StatBonuses {
    return this._2;
  }
}

export default Bonus;
