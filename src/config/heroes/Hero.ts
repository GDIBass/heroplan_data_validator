import {
  Config,
  HasArrays,
  HasIntegers,
  HasObjects,
  HasRequiredKeys,
  HasStrings,
  validate,
} from "../../validation";
import Costume from "./Costume";
import ClassesConfig from "../ClassesConfig";
import FamiliesConfig from "../FamiliesConfig";
import SourcesConfig from "../SourcesConfig";
import CostumesConfig from "../CostumesConfig";
import ohp from "../../util/ohp";
import InvalidConfig from "../../error/InvalidConfig";
import validateHeroImage from "../../validation/validateHeroImage";
import SpeedsConfig from "../SpeedsConfig";

const requiredKeys = ['name', 'class', 'source', 'speed', 'power', 'attack', 'defense', 'health', 'skill', 'effects', 'types', 'image'];
const integerKeys = ['power', 'attack', 'defense', 'health'];
const stringKeys = ['name', 'class', 'source', 'speed', 'skill', 'family'];
const objectKeys = ['costume', 'costume2'];
const arrayKeys = ['effects', 'types', 'passives'];

interface RawHero {
  name: string,
  image: string,
  source: string,
  class: string,
  speed: string,
  power: string,
  attack: string,
  defense: string,
  health: string,
  skill: string,
  family: string|null,
  effects: Array<string>,
  types: Array<string>,
  passives: Array<string>|null,
  costume: object|null,
  costume2: object|null,
}

class Hero implements Config, HasRequiredKeys, HasIntegers, HasStrings, HasObjects, HasArrays {
  public readonly stars: number;
  public readonly color: string;
  public readonly name: string;
  public readonly source: string;
  public readonly class: string;
  public readonly speed: string;
  public readonly power: string;
  public readonly attack: string;
  public readonly defense: string;
  public readonly health: string;
  public readonly skill: string;
  public readonly family: string|null = null;
  public readonly image: string;
  public readonly effects: Array<string> = [];
  public readonly types: Array<string> = [];
  public readonly passives: Array<string>|null;
  public readonly costume: Costume|null = null;
  public readonly costume2: Costume|null = null;

  private constructor(
    stars: number,
    color: string,
    rawYaml: object,
    costume: Costume|null,
    costume2: Costume|null,
    classesConfig: ClassesConfig,
    familiesConfig: FamiliesConfig,
    sourcesConfig: SourcesConfig,
    speedsConfig: SpeedsConfig
  ) {
    validate(this, rawYaml);

    this.stars = stars;
    this.color = color;
    this.name = (rawYaml as RawHero).name;
    this.source = (rawYaml as RawHero).source;
    this.class = (rawYaml as RawHero).class;
    this.speed = (rawYaml as RawHero).speed;
    this.power = (rawYaml as RawHero).power;
    this.attack = (rawYaml as RawHero).attack;
    this.defense = (rawYaml as RawHero).defense;
    this.health = (rawYaml as RawHero).health;
    this.skill = (rawYaml as RawHero).skill;
    this.image = (rawYaml as RawHero).image;
    this.effects = (rawYaml as RawHero).effects;
    this.types = (rawYaml as RawHero).types;
    this.passives = (rawYaml as RawHero).passives;
    this.costume = costume;
    this.costume2 = costume2;

    // Validate effects & types have values
    if (this.types.length === 0) {
      throw new InvalidConfig(
        this,
        `${this.name} has no types`
      );
    }
    if (this.effects.length === 0) {
      throw new InvalidConfig(
        this,
        `${this.name} has no effects`
      );
    }
    // Validate class is valid
    if (!ohp(classesConfig.classes, this.class.toLowerCase())) {
      throw new InvalidConfig(
        this,
        `${this.name} has an invalid class ${this.class}`
      );
    }
    // Validate speeds is valid
    if (!speedsConfig.isValidSpeed(this.speed)) {
      throw new InvalidConfig(
        this,
        `${this.name} has an invalid speed ${this.speed}`
      );
    }
    // Validate source is valid
    if (!ohp(sourcesConfig.sources, this.source.toLowerCase())) {
      throw new InvalidConfig(
        this,
        `${this.name} has an invalid source ${this.source}`
      );
    }

    // Validate family is valid (if set)
    if (this.family && !ohp(familiesConfig.families, this.family.toLowerCase())) {
      throw new InvalidConfig(
        this,
        `${this.name} has an invalid family ${this.family}`
      );
    }
  }

  public static build = async (
    stars: number,
    color: string,
    rawYaml: object,
    classesConfig: ClassesConfig,
    familiesConfig: FamiliesConfig,
    sourcesConfig: SourcesConfig,
    costumesConfig: CostumesConfig,
    speedsConfig: SpeedsConfig,
    heroImagesDirectory: string
  ) => {
    const name = (rawYaml as RawHero).name;
    const costumeRaw = (rawYaml as RawHero).costume || null;
    const costume = costumeRaw
      ? await Costume.build(stars, color, name, costumeRaw, classesConfig, costumesConfig, 1, heroImagesDirectory)
      : null;
    const costume2Raw = (rawYaml as RawHero).costume2 || null;
    const costume2 = costume2Raw
      ? await Costume.build(stars, color, name, costume2Raw, classesConfig, costumesConfig, 1, heroImagesDirectory)
      : null;

    const hero: Hero = new Hero(
      stars,
      color,
      rawYaml,
      costume,
      costume2,
      classesConfig,
      familiesConfig,
      sourcesConfig,
      speedsConfig
    );
    const image = hero.image;
    await validateHeroImage(hero, name, image, color, stars, heroImagesDirectory, 0);

    return hero;
  }

  getClassName = () => Hero.name;
  getRequiredKeys = () => requiredKeys;
  getIntegers = () => integerKeys;
  getObjects = () => objectKeys;
  getStrings = () => stringKeys;
  getArrays = () => arrayKeys;
}

export default Hero;