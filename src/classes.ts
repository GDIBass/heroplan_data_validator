import * as core from '@actions/core';
import {loadYamlFile} from './yaml';
import ClassesConfig from './config/ClassesConfig';

const loadClassesConfig = async (
  filePath = './data/classes.yml',
  imagePath = './img/emblems'
): Promise<ClassesConfig> => {
  core.info('Loading Classes Config');
  const config = await loadYamlFile(filePath);
  // TODO: Validate image was uploaded and is correct dimensions

  return new ClassesConfig(config);
};

export default loadClassesConfig;
