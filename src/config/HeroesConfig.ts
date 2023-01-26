import { Config } from "../validation";

class HeroesConfig implements Config {

  constructor() {
    // TODO: Go through all hero files and validate each hero
    // TODO: Ensure no duplicate names
  }

  getClassName = () => HeroesConfig.name;
}

export default HeroesConfig;