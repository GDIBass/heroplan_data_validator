import * as core from '@actions/core';
import {loadYamlFile} from './yaml';
import SourcesConfig from './config/SourcesConfig';
import fs from 'fs';
import path from 'path';
import getIdAndNameFromFilename, {
  IdAndName
} from './util/getIdAndNameFromFilename';

const loadSourcesConfig = async (
  folderPath = './data/sources/'
): Promise<SourcesConfig> => {
  core.info('Loading Sources Config');
  const sources: {[key: string]: object} = {};
  const files = await fs.promises.readdir(folderPath);
  for (const file of files) {
    if (file.endsWith('.yml')) {
      sources[file] = await loadYamlFile(path.join(folderPath, file));
    }
  }
  // TODO: Validate image was uploaded and is correct dimensions

  return new SourcesConfig(sources);
};

export default loadSourcesConfig;
