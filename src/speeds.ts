import * as core from '@actions/core';
import {loadYamlFile} from './yaml';
import SpeedsConfig from './config/SpeedsConfig';

const loadSpeedsConfig = async (
  filePath = './data/speeds.yml'
): Promise<SpeedsConfig> => {
  core.info('Loading Speeds Config');
  const config = await loadYamlFile(filePath);
  // TODO: Validate image was uploaded and is correct dimensions

  return new SpeedsConfig(config);
};

export default loadSpeedsConfig;
