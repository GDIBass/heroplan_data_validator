import * as core from '@actions/core';
import HeroesConfig from './config/HeroesConfig';
import ClassesConfig from './config/ClassesConfig';
import FamiliesConfig from './config/FamiliesConfig';
import SourcesConfig from './config/SourcesConfig';
import CostumesConfig from './config/CostumesConfig';
import ColorsConfig from './config/ColorsConfig';
import {loadYamlFile, loadYamlFileArray} from './yaml';
import SpeedsConfig from './config/SpeedsConfig';
import fs from 'fs';
import path from 'path';

const loadHeroConfigs = async (
  classesConfig: ClassesConfig,
  familiesConfig: FamiliesConfig,
  sourcesConfig: SourcesConfig,
  costumesConfig: CostumesConfig,
  colorsConfig: ColorsConfig,
  speedsConfig: SpeedsConfig,
  heroesDirectory = './data/heroes/',
  heroImagesDirectory = './img/heroes/'
): Promise<HeroesConfig> => {
  core.info('Loading Heroes Config');
  const heroesConfig: HeroesConfig = new HeroesConfig(
    classesConfig,
    familiesConfig,
    sourcesConfig,
    costumesConfig,
    colorsConfig,
    speedsConfig,
    heroImagesDirectory
  );
  for (const color in colorsConfig.colors) {
    for (const star of [1, 2, 3, 4, 5]) {
      core.info(`Loading ${star} star ${color} Heroes`);
      const folder = `${heroesDirectory}${color}/${star}`;
      const heroesToLoad: {[key: string]: object} = {};
      const files = await fs.promises.readdir(folder);
      for (const file of files) {
        if (file.endsWith('.yml')) {
          heroesToLoad[file] = await loadYamlFile(path.join(folder, file));
        }
      }
      await heroesConfig.addHeroes(color, star, heroesToLoad);
    }
  }
  return heroesConfig;
};

export default loadHeroConfigs;
