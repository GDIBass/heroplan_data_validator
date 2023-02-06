import {Config, HasObjects, HasRequiredKeys, validate} from '../validation';
import Filter from './filters/Filter';

interface RawFiltersConfig {
  filters: {[key: string]: object};
}

const requiredKeys = ['filters'];
const objectKeys = ['filters'];

type Filters = {[key: string]: Filter};

class FiltersConfig implements Config, HasRequiredKeys, HasObjects {
  private readonly _filters: Filters = {};

  constructor(rawYaml: object) {
    validate(this, rawYaml);
    const filters = (rawYaml as RawFiltersConfig).filters;
    for (const filter in filters) {
      this._filters[filter] = new Filter(filter, filters[filter]);
    }
  }

  getClassName = (): string => FiltersConfig.name;
  getRequiredKeys = (): string[] => requiredKeys;
  getObjects = (): string[] => objectKeys;

  get filters(): Filters {
    return this._filters;
  }
}

export default FiltersConfig;
