import * as core from '@actions/core';
import {loadYamlFile} from './yaml';
import AscensionsConfig from './config/AscensionsConfig';

const loadAscensionsConfig = async (
  filePath = './data/ascensions.yml'
): Promise<AscensionsConfig> => {
  core.info('Loading Ascensions Config');
  const config = await loadYamlFile(filePath);

  return new AscensionsConfig(config);
};

export default loadAscensionsConfig;
