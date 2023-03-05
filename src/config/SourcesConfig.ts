import {validateNoDuplicateIds} from '../validation';
import Source from './sources/Source';
import getIdAndNameFromFilename, {
  IdAndName
} from '../util/getIdAndNameFromFilename';

const requiredKeys = ['sources'];
const objectKeys = ['sources'];

type Sources = {[key: string]: Source};

class SourcesConfig {
  private readonly _sources: Sources = {};

  constructor(sources: {[key: string]: object}) {
    for (const source in sources) {
      const idAndName: IdAndName = getIdAndNameFromFilename(source);
      this._sources[idAndName.name] = new Source(idAndName, sources[source]);
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
