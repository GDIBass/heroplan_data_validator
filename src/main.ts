import * as core from '@actions/core'
import loadAllianceConfig from "./alliance";
import FileLoadFailed from "./error/FileLoadFailed";
import InvalidConfig from "./error/InvalidConfig";
import YamlParseFailed from "./error/YamlParseFailed";
import MissingRequiredKey from "./error/MissingRequiredKey";
import loadAscensionsConfig from "./ascensions";


async function run(): Promise<void> {
  core.info('Running config validation');
  try {
    const allianceConfig = await loadAllianceConfig();
    const ascensionsConfig = await loadAscensionsConfig();
  } catch (error) {
    if (error instanceof FileLoadFailed) {
      core.setFailed(error.message);
    } else if (error instanceof InvalidConfig) {
      core.setFailed(error.message);
    } else if (error instanceof YamlParseFailed) {
      core.setFailed(error.message);
    } else if (error instanceof MissingRequiredKey) {
      core.setFailed(error.message);
    } else {
      core.setFailed("Encountered an unknown error");
    }
  }

}

run()
