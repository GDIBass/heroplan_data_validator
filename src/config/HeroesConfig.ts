import { Config } from "../validation";
import ClassesConfig from "./ClassesConfig";
import FamiliesConfig from "./FamiliesConfig";
import SourcesConfig from "./SourcesConfig";
import CostumesConfig from "./CostumesConfig";
import ColorsConfig from "./ColorsConfig";
import Hero from "./heroes/Hero";
import ohp from "../util/ohp";
import InvalidConfig from "../error/InvalidConfig";

class HeroesConfig implements Config {
  public readonly heroes: {[key: string]: Hero} = {};
  private readonly classesConfig: ClassesConfig;
  private readonly familiesConfig: FamiliesConfig;
  private readonly sourcesConfig: SourcesConfig;
  private readonly costumesConfig: CostumesConfig;
  private readonly colorsConfig: ColorsConfig;
  private readonly heroImagesDirectory: string;

  constructor(classesConfig: ClassesConfig, familiesConfig: FamiliesConfig, sourcesConfig: SourcesConfig, costumesConfig: CostumesConfig, colorsConfig: ColorsConfig, heroImagesDirectory: string) {
    this.classesConfig = classesConfig;
    this.familiesConfig = familiesConfig;
    this.sourcesConfig = sourcesConfig;
    this.costumesConfig = costumesConfig;
    this.colorsConfig = colorsConfig;
    this.heroImagesDirectory = heroImagesDirectory;
  }

  addHeroes = (color: string, stars: number, rawYaml: object[]) => {
    const hero = new Hero(stars, color, rawYaml, this.classesConfig, this.familiesConfig, this.sourcesConfig, this.costumesConfig, this.heroImagesDirectory);
    if (ohp(this.heroes, hero.name)) {
      throw new InvalidConfig(
        this,
        `Hero with name ${hero.name} already exists`
      );
    }
  }

  getClassName = () => HeroesConfig.name;
}

export default HeroesConfig;