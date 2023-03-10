import {Config} from '../validation';
import ClassesConfig from './ClassesConfig';
import FamiliesConfig from './FamiliesConfig';
import SourcesConfig from './SourcesConfig';
import CostumesConfig from './CostumesConfig';
import ColorsConfig from './ColorsConfig';
import Hero from './heroes/Hero';
import ohp from '../util/ohp';
import InvalidConfig from '../error/InvalidConfig';
import SpeedsConfig from './SpeedsConfig';
import getIdAndNameFromFilename, {
  IdAndName
} from '../util/getIdAndNameFromFilename';

type Heroes = {[key: string]: Hero};

class HeroesConfig implements Config {
  private readonly _heroes: Heroes = {};
  private readonly classesConfig: ClassesConfig;
  private readonly familiesConfig: FamiliesConfig;
  private readonly sourcesConfig: SourcesConfig;
  private readonly costumesConfig: CostumesConfig;
  private readonly colorsConfig: ColorsConfig;
  private readonly speedsConfig: SpeedsConfig;
  private readonly heroImagesDirectory: string;

  constructor(
    classesConfig: ClassesConfig,
    familiesConfig: FamiliesConfig,
    sourcesConfig: SourcesConfig,
    costumesConfig: CostumesConfig,
    colorsConfig: ColorsConfig,
    speedsConfig: SpeedsConfig,
    heroImagesDirectory: string
  ) {
    this.classesConfig = classesConfig;
    this.familiesConfig = familiesConfig;
    this.sourcesConfig = sourcesConfig;
    this.costumesConfig = costumesConfig;
    this.colorsConfig = colorsConfig;
    this.speedsConfig = speedsConfig;
    this.heroImagesDirectory = heroImagesDirectory;
  }

  addHeroes = async (
    color: string,
    stars: number,
    heroesToAdd: {[key: string]: object}
  ): Promise<void> => {
    for (const heroFile in heroesToAdd) {
      const hero = await Hero.build(
        stars,
        color,
        heroFile,
        heroesToAdd[heroFile],
        this.classesConfig,
        this.familiesConfig,
        this.sourcesConfig,
        this.costumesConfig,
        this.speedsConfig,
        this.heroImagesDirectory
      );
      if (ohp(this._heroes, hero.name)) {
        throw new InvalidConfig(
          this,
          `Hero with name ${hero.name} already exists`
        );
      }
    }
  };

  getClassName = (): string => HeroesConfig.name;

  get heroes(): Heroes {
    return this._heroes;
  }
}

export default HeroesConfig;
