import * as core from '@actions/core';
import {loadYamlFile} from './yaml';
import MaterialsConfig from './config/MaterialsConfig';

const loadMaterialsConfig = async (
  filePath = './data/materials.yml'
): Promise<MaterialsConfig> => {
  core.info('Loading Materials Config');
  const config = await loadYamlFile(filePath);
  // TODO: Validate image was uploaded and is correct dimensions

  return new MaterialsConfig(config);
};

export default loadMaterialsConfig;
