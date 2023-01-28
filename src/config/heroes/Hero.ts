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


const requiredKeys = ['name', 'class', 'source', 'speed', 'power', 'attack', 'defense', 'health', 'skill', 'effects', 'types', 'image'];
const integerKeys = ['power', 'attack', 'defense', 'health'];
const stringKeys = ['name', 'class', 'source', 'speed', 'skill', 'family'];
const objectKeys = ['costume', 'costume2'];
const arrayKeys = ['effects', 'types', 'passives'];

interface RawHero {
  name: string,
  image: string,
}

class Hero implements Config, HasRequiredKeys, HasIntegers, HasStrings, HasObjects, HasArrays {
  public readonly stars: number;
  public readonly color: string;
  public readonly name: string;
  public readonly source: string;
  public readonly class: string;
  public readonly speed: string;
  public readonly family: string|null = null;
  public readonly power: string;
  public readonly attack: string;
  public readonly defense: string;
  public readonly health: string;
  public readonly skill: string;
  public readonly effects: Array<string> = [];
  public readonly types: Array<string> = [];
  public readonly image: string;
  public readonly passives: Array<string> = [];
  public readonly costume: Costume|null = null;
  public readonly costume2: Costume|null = null;

  constructor(stars: number, color: string, rawYaml: object, classesConfig: ClassesConfig, familiesConfig: FamiliesConfig, sourcesConfig: SourcesConfig, costumesConfig: CostumesConfig) {
    validate(this, rawYaml);

    // TODO: Set everything

    validateHeroImage(this.name, this.image, this.color, this.stars);

    // Validate class is valid
    if (!ohp(classesConfig.classes, this.class)) {
      throw new InvalidConfig(
        this,
        `${this.name} has an invalid class ${this.class}`
      );
    }
    // Validate source is valid
    if (!ohp(sourcesConfig.classes, this.source)) {
      throw new InvalidConfig(
        this,
        `${this.name} has an invalid source ${this.source}`
      );
    }

    // Validate family is valid (if set)
    if (this.family && !ohp(familiesConfig.families, this.family)) {
      throw new InvalidConfig(
        this,
        `${this.name} has an invalid family ${this.family}`
      );
    }
  }

  getClassName = () => Hero.name;
  getRequiredKeys = () => requiredKeys;
  getIntegers = () => integerKeys;
  getObjects = () => objectKeys;
  getStrings = () => stringKeys;
  getArrays = () => arrayKeys;
}

export default Hero;