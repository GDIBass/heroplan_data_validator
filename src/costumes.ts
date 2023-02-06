import CostumesConfig from './config/CostumesConfig';
import * as core from '@actions/core';
import {loadYamlFile} from './yaml';

const loadCostumesConfig = async (
  filePath = './data/costumes.yml',
  imagePath = './img/'
): Promise<CostumesConfig> => {
  core.info('Loading Costumes Config');
  const config = await loadYamlFile(filePath);
  // TODO: Validate image was uploaded and is correct dimensions

  return new CostumesConfig(config);
};

export default loadCostumesConfig;
