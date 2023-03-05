import {
  Config,
  HasObjects,
  HasRequiredKeys,
  validate,
  validateNoDuplicateIds
} from '../validation';
import Family from './families/Family';

const requiredKeys = ['families'];
const objectKeys = ['families'];

type Families = {[key: string]: Family};

class FamiliesConfig {
  private readonly _families: Families = {};

  constructor(families: {[key: string]: object}) {
    // Populate families object
    for (const family in families) {
      this._families[family] = new Family(family, families[family]);
    }
    // verify no duplicate codes
    validateNoDuplicateIds(this, 'families', Object.values(this._families));
  }

  getClassName = (): string => FamiliesConfig.name;
  getRequiredKeys = (): string[] => requiredKeys;
  getObjects = (): string[] => objectKeys;

  get families(): Families {
    return this._families;
  }
}

export default FamiliesConfig;
