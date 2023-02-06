import * as core from '@actions/core';
import {loadYamlFile} from './yaml';
import FamiliesConfig from './config/FamiliesConfig';

const loadFamiliesConfig = async (
  filePath = './data/families.yml'
): Promise<FamiliesConfig> => {
  core.info('Loading Families Config');
  const config = await loadYamlFile(filePath);
  // TODO: Validate image was uploaded and is correct dimensions

  return new FamiliesConfig(config);
};

export default loadFamiliesConfig;
