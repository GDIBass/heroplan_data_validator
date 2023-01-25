import * as core from "@actions/core";
import { loadYamlFile } from "./yaml";
import TeamsConfig from "./config/TeamsConfig";


const loadTeamsConfig = async (filePath = './data/teams.yml'): Promise<TeamsConfig> => {
  core.info('Loading Teams Config');
  const config = await loadYamlFile(filePath);
  // TODO: Validate image was uploaded and is correct dimensions

  return new TeamsConfig(config);
}

export default loadTeamsConfig;