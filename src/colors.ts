import * as core from '@actions/core';
import {loadYamlFile} from './yaml';
import ColorsConfig from './config/ColorsConfig';

const loadColorsConfig = async (
  filePath = './data/colors.yml'
): Promise<ColorsConfig> => {
  core.info('Loading Classes Config');
  const config = await loadYamlFile(filePath);
  // TODO: Check image validation?
  return new ColorsConfig(config);
};

export default loadColorsConfig;
