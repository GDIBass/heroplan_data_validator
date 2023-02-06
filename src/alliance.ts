import * as core from '@actions/core';
import {loadYamlFile} from './yaml';
import AllianceConfig from './config/AllianceConfig';

const loadAllianceConfig = async (
  filePath = './data/alliance.yml'
): Promise<AllianceConfig> => {
  core.info('Loading Alliance Config');
  const config = await loadYamlFile(filePath);

  return new AllianceConfig(config);
};

export default loadAllianceConfig;
