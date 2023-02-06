import fs from 'fs';
import FileLoadFailed from './error/FileLoadFailed';
import util from 'util';
import YamlParseFailed from './error/YamlParseFailed';
import * as yaml from 'js-yaml';
import * as core from '@actions/core';

export const loadFile = async (filename: string): Promise<unknown> => {
  let fileContents;
  const readFile = util.promisify(fs.readFile);
  try {
    fileContents = await readFile(filename);
  } catch (error) {
    core.setFailed(`Could not load yaml file at ${filename}`);
    throw new FileLoadFailed(filename, 'Could not load file');
  }

  try {
    return yaml.load(Buffer.from(fileContents).toString());
  } catch (error) {
    core.setFailed(`Could not parse yaml file at ${filename}`);
    throw new YamlParseFailed(filename, 'Could not parse yaml file');
  }
};

export const loadYamlFile = async (filename: string): Promise<Object> =>
  (await loadFile(filename)) as Object;

export const loadYamlFileArray = async (filename: string): Promise<object[]> =>
  (await loadFile(filename)) as object[];
