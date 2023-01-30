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
  'breakPoints',
];

interface RawSpeed {
  key: string,
  code: string,
  shortName: string,
  description: string,
  tiles: Array<string>,
  breakPoints: {[key: string]: Array<string>},
}

const stringKeys = ['key', 'shortName', 'description', 'breakPoints'];
const intKeys = ['code'];
const arrayKeys = ['tiles'];
const objectKeys = ['breakPoints'];

class Speed implements Config, HasRequiredKeys, HasId, HasStrings, HasIntegers, HasArrays, HasObjects {
  private readonly _key: string;
  private readonly _code: number;
  private readonly _shortName: string;
  private readonly _description: string;
  private readonly _tiles: Array<number> = [];
  private readonly _breakPoints: {[key: number]: Array<number>} = {}

  constructor(speedKey: string, rawYaml: object) {
    validate(this, rawYaml);
    validateKeysMatch(this, speedKey, (rawYaml as RawSpeed).key);
    this._key = (rawYaml as RawSpeed).key;
    this._code = parseInt((rawYaml as RawSpeed).code);
    this._shortName = (rawYaml as RawSpeed).shortName;
    this._description = (rawYaml as RawSpeed).description;
    for (let tile of (rawYaml as RawSpeed).tiles) {
      this._tiles.push(parseFloat(tile));
    }
    const breakpoints = (rawYaml as RawSpeed).breakPoints;
    for (let breakpointRaw in breakpoints) {
      const breakpoint = parseInt(breakpointRaw);
      this._breakPoints[breakpoint] = [];
      for (let breakpointItem of breakpoints[breakpoint]) {
        this._breakPoints[breakpoint].push(parseFloat(breakpointItem));
      }
    }
  }

  getClassName = (): string => Speed.name;
  getRequiredKeys = (): string[] => requiredKeys;
  getObjects = (): string[] => objectKeys;
  getIntegers = (): string[] => intKeys;
  getStrings = (): string[] => stringKeys;
  getArrays = (): string[] => arrayKeys;
  getId = (): number => this._code;

  get key(): string {
    return this._key;
  }

  get code(): number {
    return this._code;
  }

  get shortName(): string {
    return this._shortName;
  }

  get description(): string {
    return this._description;
  }

  get tiles(): Array<number> {
    return this._tiles;
  }

  get breakPoints(): { [p: number]: Array<number> } {
    return this._breakPoints;
  }
}

export default Speed;