import TypeSet from "./TypeSet";
import ColorsConfig from "../ColorsConfig";
import {
  Config, HasArrays,
  HasBooleans,
  HasId,
  HasIntegers,
  HasRequiredKeys,
  HasStrings,
  validate,
} from "../../validation";
import ohp from "../../util/ohp";
import InvalidConfig from "../../error/InvalidConfig";

interface RawCategory {
  category: string,
  description: string,
  typeset: string,
  distinct: string,
  stars: Array<string>,
  colors: Array<string>,
}

const requiredKeys = ['category', 'description', 'typeset'];
const stringKeys = ['description', 'typeset'];
const booleanKeys = ['distinct'];
const integerKeys = ['category'];
const arrayKeys = ['stars', 'colors'];

class Category implements Config, HasId, HasRequiredKeys, HasStrings, HasBooleans, HasIntegers, HasArrays {
  public readonly description: string;
  public readonly category: number;
  public readonly distinct: boolean = false;
  public readonly typeset: string;
  public readonly colors: Set<string> = new Set<string>();
  public readonly stars: Set<number> = new Set<number>();

  constructor (categoryKey: string, rawYaml: object, typesets: {[key: string]: TypeSet}, colorsConfig: ColorsConfig) {
    validate(this, rawYaml);
    this.description = (rawYaml as RawCategory).description;
    this.category = parseInt((rawYaml as RawCategory).category);
    const typeset = (rawYaml as RawCategory).typeset;
    if (!ohp(typesets, typeset)) {
      throw new InvalidConfig(
        this,
        `invalid typeset set for ${categoryKey}, category: ${typeset}`
      );
    }
    this.typeset = typeset;
    const colors = (rawYaml as RawCategory).colors || [];
    for (let color of colors) {
      if (!ohp(colorsConfig.colors, color)) {
        throw new InvalidConfig(
          this,
          `Color for team category ${this.category} is invalid: ${color}`
        );
      }
      this.colors.add(color);
    }
    const stars = (rawYaml as RawCategory).stars || [];
    for (let star of stars) {
      let starVal = parseInt(star);
      if (isNaN(starVal) || starVal < 1 || starVal > 5) {
        throw new InvalidConfig(
          this,
          `Invalid stars for team category ${this.category} is invalid: ${star}`
        );
      }
      this.stars.add(starVal);
    }
  }

  getClassName = () => Category.name;
  getId = () => this.category;
  getIntegers = () => integerKeys;
  getBooleans = () => booleanKeys;
  getRequiredKeys = () => requiredKeys;
  getStrings = () => stringKeys;
  getArrays = () => arrayKeys;
}

export default Category;