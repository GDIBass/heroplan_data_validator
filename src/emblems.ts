import * as core from "@actions/core";
import { loadYamlFile } from "./yaml";
import EmblemsConfig from "./config/EmblemsConfig";
import ClassesConfig from "./config/ClassesConfig";


const loadEmblemsConfig = async (classesConfig: ClassesConfig, filePath = './data/emblems.yml'): Promise<EmblemsConfig> => {
  core.info('Loading Emblems Config');
  const config = await loadYamlFile(filePath);
  // TODO: Validate image was uploaded and is correct dimensions

  return new EmblemsConfig(classesConfig, config);
}

export default loadEmblemsConfig;