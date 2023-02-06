import * as core from '@actions/core';
import loadAllianceConfig from './alliance';
import FileLoadFailed from './error/FileLoadFailed';
import InvalidConfig from './error/InvalidConfig';
import YamlParseFailed from './error/YamlParseFailed';
import MissingRequiredKey from './error/MissingRequiredKey';
import loadAscensionsConfig from './ascensions';
import loadClassesConfig from './classes';
import loadCostumesConfig from './costumes';
import loadEmblemsConfig from './emblems';
import loadFamiliesConfig from './families';
import loadFiltersConfig from './filters';
import loadMaterialsConfig from './materials';
import loadSourcesConfig from './sources';
import loadSpeedsConfig from './speeds';
import loadTeamsConfig from './teams';
import loadTroopsConfig from './troops';
import loadUsersConfig from './users';
import loadHeroConfigs from './heroes';
import loadColorsConfig from './colors';
import ImageMissing from './error/ImageMissing';
import InvalidImage from './error/InvalidImage';

async function run(): Promise<void> {
  core.info('Running config validation');
  try {
    const [
      allianceConfig,
      ascensionsConfig,
      classesConfig,
      colorsConfig,
      costumesConfig,
      familiesConfig,
      filtersConfig,
      materialsConfig,
      sourcesConfig,
      speedsConfig
    ] = await Promise.all([
      loadAllianceConfig(),
      loadAscensionsConfig(),
      loadClassesConfig(),
      loadColorsConfig(),
      loadCostumesConfig(),
      loadFamiliesConfig(),
      loadFiltersConfig(),
      loadMaterialsConfig(),
      loadSourcesConfig(),
      loadSpeedsConfig()
    ]);
    const [
      troopsConfig,
      usersConfig,
      emblemsConfig,
      teamsConfig,
      heroesConfig
    ] = await Promise.all([
      loadTroopsConfig(),
      loadUsersConfig(),
      loadEmblemsConfig(classesConfig),
      loadTeamsConfig(classesConfig, colorsConfig),
      loadHeroConfigs(
        classesConfig,
        familiesConfig,
        sourcesConfig,
        costumesConfig,
        colorsConfig,
        speedsConfig
      )
    ]);
  } catch (error) {
    if (error instanceof FileLoadFailed) {
      core.setFailed(error.message);
    } else if (error instanceof InvalidConfig) {
      core.setFailed(error.message);
    } else if (error instanceof YamlParseFailed) {
      core.setFailed(error.message);
    } else if (error instanceof MissingRequiredKey) {
      core.setFailed(error.message);
    } else if (error instanceof ImageMissing) {
      core.setFailed(error.message);
    } else if (error instanceof InvalidImage) {
      core.setFailed(error.message);
    } else {
      console.log(error);
      core.setFailed('Encountered an unknown error');
    }
  }
  // TODO: Ensure classes are lower
  // TODO: Ensure families are lower
  // TODO: Ensure sources are lower
  // TODO: Ensure speeds are lower
}

run();
