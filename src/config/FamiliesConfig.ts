import {validateNoDuplicateIds} from '../validation';
import Family from './families/Family';
import getIdAndNameFromFilename, {
  IdAndName
} from '../util/getIdAndNameFromFilename';

const requiredKeys = ['families'];
const objectKeys = ['families'];

type Families = {[key: string]: Family};

class FamiliesConfig {
  private readonly _families: Families = {};

  constructor(families: {[key: string]: object}) {
    // Populate families object
    for (const family in families) {
      const idAndName: IdAndName = getIdAndNameFromFilename(family);
      this._families[idAndName.name] = new Family(idAndName, families[family]);
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
