import * as core from "@actions/core";
import HeroesConfig from "./config/HeroesConfig";


const loadHeroConfigs = async (heroesDirectory = './data/heroes/'): Promise<HeroesConfig> => {
  core.info('Loading Users Config');
  // TODO: Validate image was uploaded and is correct dimensions

  return new HeroesConfig();
}

export default loadHeroConfigs;