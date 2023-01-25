import { Config } from "../validation";

class HeroesConfig implements Config {

  constructor() {

  }

  getClassName = () => HeroesConfig.name;
}

export default HeroesConfig;