import * as core from "@actions/core";
import { loadYamlFile } from "./yaml";
import SourcesConfig from "./config/SourcesConfig";


const loadSourcesConfig = async (filePath = './data/sources.yml'): Promise<SourcesConfig> => {
  core.info('Loading Sources Config');
  const config = await loadYamlFile(filePath);
  // TODO: Validate image was uploaded and is correct dimensions

  return new SourcesConfig(config);
}

export default loadSourcesConfig;