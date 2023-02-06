import * as core from '@actions/core';
import {loadYamlFile} from './yaml';
import UsersConfig from './config/UsersConfig';

const loadUsersConfig = async (
  filePath = './data/users.yml'
): Promise<UsersConfig> => {
  core.info('Loading Users Config');
  const config = await loadYamlFile(filePath);
  // TODO: Validate image was uploaded and is correct dimensions

  return new UsersConfig(config);
};

export default loadUsersConfig;
