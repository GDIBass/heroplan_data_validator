import * as core from '@actions/core';
import {loadYamlFile} from './yaml';
import TeamsConfig from './config/TeamsConfig';
import ClassesConfig from './config/ClassesConfig';
import ColorsConfig from './config/ColorsConfig';

const loadTeamsConfig = async (
  classes: ClassesConfig,
  colors: ColorsConfig,
  filePath = './data/teams.yml'
): Promise<TeamsConfig> => {
  core.info('Loading Teams Config');
  const config = await loadYamlFile(filePath);
  // TODO: Validate image was uploaded and is correct dimensions

  return new TeamsConfig(config, classes, colors);
};

export default loadTeamsConfig;
