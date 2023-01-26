import { Config, HasObjects, HasRequiredKeys, validate } from "../validation";
import Filter from "./filters/Filter";

interface RawFiltersConfig {
  filters: {[key: string]: object},
}

const requiredKeys = ['filters'];
const objectKeys = ['filters'];

class FiltersConfig implements Config, HasRequiredKeys, HasObjects {
  public readonly filters: {[key: string]: Filter} = {};

  constructor(rawYaml: object) {
    validate(this, rawYaml);
    const filters = (rawYaml as RawFiltersConfig).filters;
    for (let filter in filters) {
      this.filters[filter] = new Filter(filter, filters[filter]);
    }
  }

  getClassName = () => FiltersConfig.name;
  getRequiredKeys = () => requiredKeys;
  getObjects = () => objectKeys;
}

export default FiltersConfig;