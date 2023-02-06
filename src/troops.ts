import * as core from '@actions/core';
import {loadYamlFile} from './yaml';
import TroopsConfig from './config/TroopsConfig';

const loadTroopsConfig = async (
  filePath = './data/troops.yml'
): Promise<TroopsConfig> => {
  core.info('Loading Troops Config');
  const config = await loadYamlFile(filePath);
  // TODO: Validate image was uploaded and is correct dimensions

  return new TroopsConfig(config);
};

export default loadTroopsConfig;
