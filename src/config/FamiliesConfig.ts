import { Config, HasObjects, HasRequiredKeys, validate, validateNoDuplicateIds } from "../validation";
import Family from "./families/Family";

const requiredKeys = ['families'];
const objectKeys = ['families'];

interface RawFamiliesConfig {
  families: {[key: string]: object};
}

class FamiliesConfig implements Config, HasRequiredKeys, HasObjects {

  private readonly families: {[key: string]: Family} = {};

  constructor(rawYaml: object) {
    validate(this, rawYaml);
    // Populate families object
    const families = (rawYaml as RawFamiliesConfig).families;
    for (let family in families) {
      this.families[family] = new Family(family, families[family]);
    }
    // verify no duplicate codes
    validateNoDuplicateIds(this, 'families', Object.values(this.families));
  }

  getClassName = () => FamiliesConfig.name;
  getRequiredKeys = () => requiredKeys;
  getObjects = () => objectKeys;
}

export default FamiliesConfig;