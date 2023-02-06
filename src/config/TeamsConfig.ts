import {
  Config,
  HasObjects,
  HasRequiredKeys,
  validate,
  validateNoDuplicateIds
} from '../validation';
import ClassesConfig from './ClassesConfig';
import ColorsConfig from './ColorsConfig';
import TypeSet from './teams/TypeSet';
import Category from './teams/Category';
import Position from './teams/Position';

interface RawTeamsConfig {
  typesets: {[key: string]: object};
  categories: {[key: string]: object};
  positions: {[key: string]: object};
}

const requiredKeys = ['typesets', 'categories', 'positions'];
const objectKeys = ['typesets', 'categories', 'positions'];

type TypeSets = {[key: string]: TypeSet};

type Categories = {[key: string]: Category};

type Positions = {[key: string]: Position};

class TeamsConfig implements Config, HasRequiredKeys, HasObjects {
  private readonly _typesets: TypeSets = {};
  private readonly _categories: Categories = {};
  private readonly _positions: Positions = {};

  constructor(rawYaml: object, classes: ClassesConfig, colors: ColorsConfig) {
    validate(this, rawYaml);
    // typesets
    const typesets = (rawYaml as RawTeamsConfig).typesets;
    for (const typeset in typesets) {
      this._typesets[typeset] = new TypeSet(
        typeset,
        typesets[typeset],
        classes
      );
    }

    // categories
    const categories = (rawYaml as RawTeamsConfig).categories;
    for (const category in categories) {
      this._categories[category] = new Category(
        category,
        categories[category],
        this._typesets,
        colors
      );
    }
    validateNoDuplicateIds(this, 'categories', Object.values(this._categories));

    // Positions
    const positions = (rawYaml as RawTeamsConfig).positions;
    for (const position in positions) {
      this._positions[position] = new Position(position, positions[position]);
    }
    validateNoDuplicateIds(this, 'positions', Object.values(this._positions));
  }

  getClassName = (): string => TeamsConfig.name;
  getRequiredKeys = (): string[] => requiredKeys;
  getObjects = (): string[] => objectKeys;

  get typesets(): TypeSets {
    return this._typesets;
  }

  get categories(): Categories {
    return this._categories;
  }

  get positions(): Positions {
    return this._positions;
  }
}

export default TeamsConfig;
