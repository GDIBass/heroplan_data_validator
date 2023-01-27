import {
  Config,
  HasArrays,
  HasId,
  HasObjects,
  HasRequiredKeys,
  HasStrings,
  validate,
  validateKeysMatch,
  HasIntegers
} from "../../validation";

const requiredKeys = [
  'key',
  'code',
  'shortName',
  'description',
  'tiles',
  'breakpoints',
];

interface RawSpeed {
  key: string,
  code: string,
  shortName: string,
  description: string,
  tiles: Array<string>,
  breakpoints: {[key: string]: Array<string>},
}

const stringKeys = ['key', 'shortName', 'description'];
const intKeys = ['code'];
const arrayKeys = ['tiles'];
const objectKeys = ['breakpoints'];

class Speed implements Config, HasRequiredKeys, HasId, HasStrings, HasIntegers, HasArrays, HasObjects {
  public readonly key: string;
  public readonly code: number;
  public readonly shortName: string;
  public readonly description: string;
  public readonly tiles: Array<number> = [];
  public readonly breakpoints: {[key: number]: Array<number>} = {}

  constructor(speedKey: string, rawYaml: object) {
    validate(this, rawYaml);
    validateKeysMatch(this, speedKey, (rawYaml as RawSpeed).key);
    this.key = (rawYaml as RawSpeed).key;
    this.code = parseInt((rawYaml as RawSpeed).code);
    this.shortName = (rawYaml as RawSpeed).shortName;
    this.description = (rawYaml as RawSpeed).description;
    for (let tile of (rawYaml as RawSpeed).tiles) {
      this.tiles.push(parseFloat(tile));
    }
    const breakpoints = (rawYaml as RawSpeed).breakpoints;
    for (let breakpointRaw in breakpoints) {
      const breakpoint = parseInt(breakpointRaw);
      this.breakpoints[breakpoint] = [];
      for (let breakpointItem of breakpoints[breakpoint]) {
        this.breakpoints[breakpoint].push(parseFloat(breakpointItem));
      }
    }
  }

  getClassName = () => Speed.name;
  getRequiredKeys = () => requiredKeys;
  getObjects = () => objectKeys;
  getIntegers = () => intKeys;
  getStrings = () => stringKeys;
  getArrays = () => arrayKeys;
  getId = () => this.code;
}

export default Speed;