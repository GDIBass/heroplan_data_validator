import * as core from '@actions/core';
import fs from 'fs';
import path from 'path';
import {loadYamlFile} from './yaml';
import FamiliesConfig from './config/FamiliesConfig';

const loadFamiliesConfig = async (
  folderPath = './data/families/'
): Promise<FamiliesConfig> => {
  core.info('Loading Families Config');
  const families: {[key: string]: object} = {};
  const files = await fs.promises.readdir(folderPath);
  for (const file of files) {
    if (file.endsWith('.yml')) {
      families[file] = await loadYamlFile(path.join(folderPath, file));
    }
  }
  // TODO: Validate image was uploaded and is correct dimensions

  return new FamiliesConfig(families);
};

export default loadFamiliesConfig;
