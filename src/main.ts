import * as core from '@actions/core'
import loadAllianceConfig from "./alliance";
import FileLoadFailed from "./error/FileLoadFailed";
import InvalidConfig from "./error/InvalidConfig";
import YamlParseFailed from "./error/YamlParseFailed";
import MissingRequiredKey from "./error/MissingRequiredKey";
import loadAscensionsConfig from "./ascensions";
import loadClassesConfig from "./classes";
import loadCostumesConfig from "./costumes";
import loadEmblemsConfig from "./emblems";
import loadFamiliesConfig from "./families";
import loadFiltersConfig from "./filters";
import loadMaterialsConfig from "./materials";
import loadSourcesConfig from "./sources";
import loadSpeedsConfig from "./speeds";
import loadTeamsConfig from "./teams";
import loadTroopsConfig from "./troops";
import loadUsersConfig from "./users";
import loadHeroConfigs from "./heroes";


async function run(): Promise<void> {
  core.info('Running config validation');
  try {
    const allianceConfig = await loadAllianceConfig();
    const ascensionsConfig = await loadAscensionsConfig();
    const classesConfig = await loadClassesConfig();
    const costumesConfig = await loadCostumesConfig();
    const emblemsConfig = await loadEmblemsConfig(classesConfig);
    const familiesConfig = await loadFamiliesConfig();
    const filtersConfig = await loadFiltersConfig();
    const materialsConfig = await loadMaterialsConfig();
    const sourcesConfig = await loadSourcesConfig();
    const speedsConfig = await loadSpeedsConfig();
    const teamsConfig = await loadTeamsConfig();
    const troopsConfig = await loadTroopsConfig();
    const usersConfig = await loadUsersConfig();
    const heroesConfig = await loadHeroConfigs();
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
