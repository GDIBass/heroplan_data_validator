import {
  HasArrays,
  HasIntegers,
  HasRequiredKeys,
  HasStrings,
  validate
} from '../../validation';
import ClassesConfig from '../ClassesConfig';
import CostumesConfig from '../CostumesConfig';
import ohp from '../../util/ohp';
import InvalidConfig from '../../error/InvalidConfig';
import validateHeroImage from '../../validation/validateHeroImage';

const requiredKeys = [
  'class',
  'power',
  'attack',
  'defense',
  'health',
  'skill',
  'effects',
  'types',
  'image'
];
const stringKeys = ['class', 'skill', 'family', 'image', 'bonuses'];
const integerKeys = ['power', 'attack', 'defense', 'health'];
const arrayKeys = ['effets', 'types'];

interface RawCostume {
  class: string;
  power: string;
  attack: string;
  defense: string;
  health: string;
  skill: string;
  effects: string[];
  types: string[];
  image: string;
  bonuses: string;
}

class Costume implements HasRequiredKeys, HasStrings, HasIntegers, HasArrays {
  private readonly _class: string;
  private readonly _power: string;
  private readonly _attack: string;
  private readonly _defense: string;
  private readonly _health: string;
  private readonly _skill: string;
  private readonly _effects: string[] = [];
  private readonly _types: string[] = [];
  private readonly _image: string;
  private readonly _bonuses: string;

  private constructor(
    name: string,
    rawYaml: object,
    classesConfig: ClassesConfig,
    costumesConfig: CostumesConfig,
    costumeVariant: number
  ) {
    validate(this, rawYaml);

    this._class = (rawYaml as RawCostume).class;
    this._power = (rawYaml as RawCostume).power;
    this._attack = (rawYaml as RawCostume).attack;
    this._defense = (rawYaml as RawCostume).defense;
    this._health = (rawYaml as RawCostume).health;
    this._skill = (rawYaml as RawCostume).skill;
    this._image = (rawYaml as RawCostume).image;
    this._bonuses = (rawYaml as RawCostume).bonuses;
    const effects = (rawYaml as RawCostume).effects;
    for (const effect of effects) {
      this._effects.push(effect);
    }
    const types = (rawYaml as RawCostume).types;
    for (const type of types) {
      this._types.push(type);
    }

    // validate class is valid
    if (!ohp(classesConfig.classes, this._class.toLowerCase())) {
      throw new InvalidConfig(
        this,
        `${name}'s costume (${costumeVariant}) has an invalid class ${this._class}`
      );
    }
    // validate bonuses are valid
    if (this._bonuses && !ohp(costumesConfig.bonuses, this._bonuses)) {
      throw new InvalidConfig(
        this,
        `${name}'s costume (${costumeVariant}) has an invalid bonus ${this._bonuses}`
      );
    }
    // TODO: Populate default variant if bonuses isn't set
  }

  static build = async (
    stars: number,
    color: string,
    name: string,
    rawYaml: object,
    classesConfig: ClassesConfig,
    costumesConfig: CostumesConfig,
    costumeVariant: number,
    heroImagesDirectory: string
  ) => {
    const costume = new Costume(
      name,
      rawYaml,
      classesConfig,
      costumesConfig,
      costumeVariant
    );
    await validateHeroImage(
      costume,
      name,
      costume._image,
      color,
      stars,
      heroImagesDirectory,
      costumeVariant
    );
    return costume;
  };

  getClassName = (): string => Costume.name;
  getRequiredKeys = (): string[] => requiredKeys;
  getIntegers = (): string[] => integerKeys;
  getStrings = (): string[] => stringKeys;
  getArrays = (): string[] => arrayKeys;

  get class(): string {
    return this._class;
  }

  get power(): string {
    return this._power;
  }

  get attack(): string {
    return this._attack;
  }

  get defense(): string {
    return this._defense;
  }

  get health(): string {
    return this._health;
  }

  get skill(): string {
    return this._skill;
  }

  get effects(): string[] {
    return this._effects;
  }

  get types(): string[] {
    return this._types;
  }

  get image(): string {
    return this._image;
  }

  get bonuses(): string {
    return this._bonuses;
  }
}

export default Costume;
