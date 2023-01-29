import {
  HasArrays,
  HasIntegers,
  HasRequiredKeys,
  HasStrings,
  validate,
} from "../../validation";
import ClassesConfig from "../ClassesConfig";
import CostumesConfig from "../CostumesConfig";
import ohp from "../../util/ohp";
import InvalidConfig from "../../error/InvalidConfig";
import validateHeroImage from "../../validation/validateHeroImage";

const requiredKeys = ['class', 'power', 'attack', 'defense', 'health', 'skill', 'effects', 'types', 'image'];
const stringKeys = ['class', 'skill', 'family', 'image', 'bonuses'];
const integerKeys = ['power', 'attack', 'defense', 'health'];
const arrayKeys = ['effets', 'types'];

interface RawCostume {
  class: string,
  power: string,
  attack: string,
  defense: string,
  health: string,
  skill: string,
  effects: Array<string>,
  types: Array<string>,
  image: string,
  bonuses: string,
}

class Costume implements HasRequiredKeys, HasStrings, HasIntegers, HasArrays {
  public readonly class: string;
  public readonly power: string;
  public readonly attack: string;
  public readonly defense: string;
  public readonly health: string;
  public readonly skill: string;
  public readonly effects: Array<string> = [];
  public readonly types: Array<string> = [];
  public readonly image: string;
  public readonly bonuses: string;

  constructor(stars: number, color: string, name: string, rawYaml: object, classesConfig: ClassesConfig, costumesConfig: CostumesConfig, costumeVariant: number, heroImagesDirectory: string) {
    validate(this, rawYaml);

    this.class = (rawYaml as RawCostume).class;
    this.power = (rawYaml as RawCostume).power;
    this.attack = (rawYaml as RawCostume).attack;
    this.defense = (rawYaml as RawCostume).defense;
    this.health = (rawYaml as RawCostume).health;
    this.skill = (rawYaml as RawCostume).skill;
    this.image = (rawYaml as RawCostume).image;
    this.bonuses = (rawYaml as RawCostume).bonuses;
    const effects = (rawYaml as RawCostume).effects;
    for (let effect of effects) {
      this.effects.push(effect);
    }
    const types = (rawYaml as RawCostume).types;
    for (let type of types) {
      this.types.push(type);
    }

    validateHeroImage(this, name, this.image, color, stars, heroImagesDirectory, costumeVariant);

    // validate class is valid
    if (!ohp(classesConfig.classes, this.class.toLowerCase())) {
      throw new InvalidConfig(
        this,
        `${name}'s costume (${costumeVariant}) has an invalid class ${this.class}`
      );
    }
    // validate bonuses are valid
    if (this.bonuses && !ohp(costumesConfig.bonuses, this.bonuses)) {
      throw new InvalidConfig(
        this,
        `${name}'s costume (${costumeVariant}) has an invalid bonus ${this.bonuses}`
      );
    }
    // TODO: Populate default variant if bonuses isn't set
  }

  getClassName = () => Costume.name;
  getRequiredKeys = () => requiredKeys;
  getIntegers = () => integerKeys;
  getStrings = () => stringKeys;
  getArrays = () => arrayKeys;
}

export default Costume;