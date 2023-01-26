import { Config, HasRequiredKeys, validate } from "../validation";
import Filter from "./filters/Filter";

interface RawFiltersConfig {
  filters: object,
}

const requiredKeys = ['filters'];

class FiltersConfig implements Config, HasRequiredKeys {
  public readonly filters: {[key: string]: Filter} = {};

  constructor(rawYaml: object) {
    validate(this, rawYaml);
    const filters = (rawYaml as RawFiltersConfig).filters;
    for(let filter of filters) {
      this.filters[filter] = new Filter(filters[filter]);
    }
  }

  getClassName = () => FiltersConfig.name;
  getRequiredKeys = () => requiredKeys;
}

export default FiltersConfig;