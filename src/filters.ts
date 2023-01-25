import * as core from "@actions/core";
import { loadYamlFile } from "./yaml";
import FiltersConfig from "./config/FiltersConfig";


const loadFiltersConfig = async (filePath = './data/filters.yml'): Promise<FiltersConfig> => {
  core.info('Loading Filters Config');
  const config = await loadYamlFile(filePath);
  // TODO: Validate image was uploaded and is correct dimensions

  return new FiltersConfig(config);
}

export default loadFiltersConfig;