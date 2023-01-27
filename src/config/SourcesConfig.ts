import { Config, HasObjects, HasRequiredKeys, validate, validateNoDuplicateIds } from "../validation";
import Source from "./sources/Source";

interface RawSourceConfig {
  sources: {[Key: string]: object};
}

const requiredKeys = ['sources'];
const objectKeys = ['sources'];

class SourcesConfig implements Config, HasRequiredKeys, HasObjects {
  private readonly sources: {[key: string]: Source} = {};

  constructor(rawYaml: object) {
    validate(this, rawYaml);
    const sources = (rawYaml as RawSourceConfig).sources;
    for (let source in sources) {
      this.sources[source] = new Source(source, sources[source]);
    }
    validateNoDuplicateIds(this, 'sources', Object.values(this.sources));
  }

  getClassName = () => SourcesConfig.name;
  getRequiredKeys = () => requiredKeys;
  getObjects = () => objectKeys;
}

export default SourcesConfig;