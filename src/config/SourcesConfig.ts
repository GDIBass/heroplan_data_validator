import {
  Config,
  HasObjects,
  HasRequiredKeys,
  validate,
  validateNoDuplicateIds
} from '../validation';
import Source from './sources/Source';

interface RawSourceConfig {
  sources: {[Key: string]: object};
}

const requiredKeys = ['sources'];
const objectKeys = ['sources'];

type Sources = {[key: string]: Source};

class SourcesConfig implements Config, HasRequiredKeys, HasObjects {
  private readonly _sources: Sources = {};

  constructor(rawYaml: object) {
    validate(this, rawYaml);
    const sources = (rawYaml as RawSourceConfig).sources;
    for (const source in sources) {
      this._sources[source] = new Source(source, sources[source]);
    }
    validateNoDuplicateIds(this, 'sources', Object.values(this._sources));
  }

  getClassName = (): string => SourcesConfig.name;
  getRequiredKeys = (): string[] => requiredKeys;
  getObjects = (): string[] => objectKeys;

  get sources(): Sources {
    return this._sources;
  }
}

export default SourcesConfig;
