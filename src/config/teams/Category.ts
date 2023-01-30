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
  private readonly _description: string;
  private readonly _category: number;
  private readonly _distinct: boolean = false;
  private readonly _typeset: string;
  private readonly _colors: Set<string> = new Set<string>();
  private readonly _stars: Set<number> = new Set<number>();

  constructor (categoryKey: string, rawYaml: object, typesets: {[key: string]: TypeSet}, colorsConfig: ColorsConfig) {
    validate(this, rawYaml);
    this._description = (rawYaml as RawCategory).description;
    this._category = parseInt((rawYaml as RawCategory).category);
    const typeset = (rawYaml as RawCategory).typeset;
    if (!ohp(typesets, typeset)) {
      throw new InvalidConfig(
        this,
        `invalid typeset set for ${categoryKey}, category: ${typeset}`
      );
    }
    this._typeset = typeset;
    const colors = (rawYaml as RawCategory).colors || [];
    for (let color of colors) {
      if (!ohp(colorsConfig.colors, color)) {
        throw new InvalidConfig(
          this,
          `Color for team category ${this._category} is invalid: ${color}`
        );
      }
      this._colors.add(color);
    }
    const stars = (rawYaml as RawCategory).stars || [];
    for (let star of stars) {
      let starVal = parseInt(star);
      if (isNaN(starVal) || starVal < 1 || starVal > 5) {
        throw new InvalidConfig(
          this,
          `Invalid stars for team category ${this._category} is invalid: ${star}`
        );
      }
      this._stars.add(starVal);
    }
  }

  getClassName = (): string => Category.name;
  getId = (): number => this._category;
  getIntegers = (): string[] => integerKeys;
  getBooleans = (): string[] => booleanKeys;
  getRequiredKeys = (): string[] => requiredKeys;
  getStrings = (): string[] => stringKeys;
  getArrays = (): string[] => arrayKeys;


  get description(): string {
    return this._description;
  }

  get category(): number {
    return this._category;
  }

  get distinct(): boolean {
    return this._distinct;
  }

  get typeset(): string {
    return this._typeset;
  }

  get colors(): Set<string> {
    return this._colors;
  }

  get stars(): Set<number> {
    return this._stars;
  }
}

export default Category;