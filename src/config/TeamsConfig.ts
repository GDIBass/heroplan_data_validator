import { Config, HasObjects, HasRequiredKeys, validate, validateNoDuplicateIds } from "../validation";
import ClassesConfig from "./ClassesConfig";
import ColorsConfig from "./ColorsConfig";
import TypeSet from "./teams/TypeSet";
import Category from "./teams/Category";
import Position from "./teams/Position";

interface RawTeamsConfig {
  typesets: {[key: string]: object},
  categories: {[key: string]: object},
  positions: {[key: string]: object},
}

const requiredKeys = ['types', 'categories', 'positions'];
const objectKeys = ['types', 'categories', 'positions'];

class TeamsConfig implements Config, HasRequiredKeys, HasObjects {
  public readonly typesets: {[key: string]: TypeSet} = {};
  public readonly categories: {[key: string]: Category} = {};
  public readonly positions: {[key: string]: Position} = {};

  constructor(rawYaml: object, classes: ClassesConfig, colors: ColorsConfig) {
    validate(this, rawYaml);
    // typesets
    const typesets = (rawYaml as RawTeamsConfig).typesets;
    for (let typeset in typesets) {
      this.typesets[typeset] = new TypeSet(typeset, typesets[typeset], classes);
    }

    // categories
    const categories = (rawYaml as RawTeamsConfig).categories;
    for (let category in categories) {
      this.categories[category] = new Category(category, categories[category], this.typesets, colors);
    }
    validateNoDuplicateIds(this, 'categories', Object.values(this.categories));

    // Positions
    const positions = (rawYaml as RawTeamsConfig).positions;
    for (let position in positions) {
      this.positions[position] = new Position(position, positions[position]);
    }
    validateNoDuplicateIds(this, 'positions', Object.values(this.positions));
  }

  getClassName = () => TeamsConfig.name;
  getRequiredKeys = () => requiredKeys;
  getObjects = () => objectKeys;
}

export default TeamsConfig;