import {
  Config,
  HasArrays,
  HasIntegers,
  HasObjects,
  HasRequiredKeys,
  HasStrings,
  validate
} from '../../validation';
import Costume from './Costume';
import ClassesConfig from '../ClassesConfig';
import FamiliesConfig from '../FamiliesConfig';
import SourcesConfig from '../SourcesConfig';
import CostumesConfig from '../CostumesConfig';
import ohp from '../../util/ohp';
import InvalidConfig from '../../error/InvalidConfig';
import validateHeroImage from '../../validation/validateHeroImage';
import SpeedsConfig from '../SpeedsConfig';
import {IdAndName} from '../../util/getIdAndNameFromFilename';

const requiredKeys = [
  'name',
  'class',
  'source',
  'speed',
  'power',
  'attack',
  'defense',
  'health',
  'skill',
  'effects',
  'types',
  'image'
];
const integerKeys = ['power', 'attack', 'defense', 'health'];
const stringKeys = ['name', 'class', 'source', 'speed', 'skill', 'family'];
const objectKeys = ['costume', 'costume2'];
const arrayKeys = ['effects', 'types', 'passives'];

interface RawHero {
  name: string;
  image: string;
  source: string;
  class: string;
  speed: string;
  power: string;
  attack: string;
  defense: string;
  health: string;
  skill: string;
  family: string | null;
  effects: string[];
  types: string[];
  passives: string[] | null;
  costume: object | null;
  costume2: object | null;
}

class Hero
  implements
    Config,
    HasRequiredKeys,
    HasIntegers,
    HasStrings,
    HasObjects,
    HasArrays
{
  private readonly _stars: number;
  private readonly _color: string;
  private readonly _name: string;
  private readonly _source: string;
  private readonly _class: string;
  private readonly _speed: string;
  private readonly _power: string;
  private readonly _attack: string;
  private readonly _defense: string;
  private readonly _health: string;
  private readonly _skill: string;
  private readonly _family: string | null = null;
  private readonly _image: string;
  private readonly _effects: string[] = [];
  private readonly _types: string[] = [];
  private readonly _passives: string[] | null;
  private readonly _costume: Costume | null = null;
  private readonly _costume2: Costume | null = null;

  private constructor(
    stars: number,
    color: string,
    rawYaml: object,
    costume: Costume | null,
    costume2: Costume | null,
    classesConfig: ClassesConfig,
    familiesConfig: FamiliesConfig,
    sourcesConfig: SourcesConfig,
    speedsConfig: SpeedsConfig
  ) {
    validate(this, rawYaml);

    this._stars = stars;
    this._color = color;
    this._name = (rawYaml as RawHero).name;
    this._source = (rawYaml as RawHero).source;
    this._class = (rawYaml as RawHero).class;
    this._speed = (rawYaml as RawHero).speed;
    this._power = (rawYaml as RawHero).power;
    this._attack = (rawYaml as RawHero).attack;
    this._defense = (rawYaml as RawHero).defense;
    this._health = (rawYaml as RawHero).health;
    this._skill = (rawYaml as RawHero).skill;
    this._image = (rawYaml as RawHero).image;
    this._effects = (rawYaml as RawHero).effects;
    this._types = (rawYaml as RawHero).types;
    this._passives = (rawYaml as RawHero).passives;
    this._costume = costume;
    this._costume2 = costume2;

    // Validate effects & types have values
    if (this._types.length === 0) {
      throw new InvalidConfig(this, `${this._name} has no types`);
    }
    if (this._effects.length === 0) {
      throw new InvalidConfig(this, `${this._name} has no effects`);
    }
    // Validate class is valid
    if (!ohp(classesConfig.classes, this._class.toLowerCase())) {
      throw new InvalidConfig(
        this,
        `${this._name} has an invalid class ${this._class}`
      );
    }
    // Validate speeds is valid
    if (!speedsConfig.isValidSpeed(this._speed)) {
      throw new InvalidConfig(
        this,
        `${this._name} has an invalid speed ${this._speed}`
      );
    }
    // Validate source is valid
    if (!ohp(sourcesConfig.sources, this._source.toLowerCase())) {
      throw new InvalidConfig(
        this,
        `${this._name} has an invalid source ${this._source}`
      );
    }

    // Validate family is valid (if set)
    if (
      this._family &&
      !ohp(familiesConfig.families, this._family.toLowerCase())
    ) {
      throw new InvalidConfig(
        this,
        `${this._name} has an invalid family ${this._family}`
      );
    }
  }

  static build = async (
    stars: number,
    color: string,
    heroFile: string,
    rawYaml: object,
    classesConfig: ClassesConfig,
    familiesConfig: FamiliesConfig,
    sourcesConfig: SourcesConfig,
    costumesConfig: CostumesConfig,
    speedsConfig: SpeedsConfig,
    heroImagesDirectory: string
  ): Promise<Hero> => {
    const name = (rawYaml as RawHero).name;
    if (heroFile.substring(0, heroFile.length - '.yml'.length) !== name) {
      throw new Error(
        `Hero name does not match filename | filename=${heroFile} | name=${name}`
      );
    }
    const costumeRaw = (rawYaml as RawHero).costume || null;
    const costume = costumeRaw
      ? await Costume.build(
          stars,
          color,
          name,
          costumeRaw,
          classesConfig,
          costumesConfig,
          1,
          heroImagesDirectory
        )
      : null;
    const costume2Raw = (rawYaml as RawHero).costume2 || null;
    const costume2 = costume2Raw
      ? await Costume.build(
          stars,
          color,
          name,
          costume2Raw,
          classesConfig,
          costumesConfig,
          1,
          heroImagesDirectory
        )
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
    const image = hero._image;
    await validateHeroImage(
      hero,
      name,
      image,
      color,
      stars,
      heroImagesDirectory,
      0
    );

    return hero;
  };

  getClassName = (): string => Hero.name;
  getRequiredKeys = (): string[] => requiredKeys;
  getIntegers = (): string[] => integerKeys;
  getObjects = (): string[] => objectKeys;
  getStrings = (): string[] => stringKeys;
  getArrays = (): string[] => arrayKeys;

  get stars(): number {
    return this._stars;
  }

  get color(): string {
    return this._color;
  }

  get name(): string {
    return this._name;
  }

  get source(): string {
    return this._source;
  }

  get class(): string {
    return this._class;
  }

  get speed(): string {
    return this._speed;
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

  get family(): string | null {
    return this._family;
  }

  get image(): string {
    return this._image;
  }

  get effects(): string[] {
    return this._effects;
  }

  get types(): string[] {
    return this._types;
  }

  get passives(): string[] | null {
    return this._passives;
  }

  get costume(): Costume | null {
    return this._costume;
  }

  get costume2(): Costume | null {
    return this._costume2;
  }
}

export default Hero;
