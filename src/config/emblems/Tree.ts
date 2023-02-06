import {
  Config,
  HasObjects,
  HasRequiredKeys,
  HasStrings,
  validate,
  validateKeysMatch
} from '../../validation';
import Node from './Node';
import validateNode from './validateNode';
import SplitNode from './SplitNode';
import ClassesConfig from '../ClassesConfig';
import ohp from '../../util/ohp';
import InvalidConfig from '../../error/InvalidConfig';

const requiredKeys = [
  'key',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20'
];

interface RawTree {
  key: string;
  '1': string;
  '2': object;
  '3': object;
  '4': string;
  '5': object;
  '6': object;
  '7': string;
  '8': object;
  '9': object;
  '10': string;
  '11': object;
  '12': string;
  '13': object;
  '14': object;
  '15': string;
  '16': object;
  '17': object;
  '18': string;
  '19': object;
  '20': string;
}

const stringKeys = ['key', '1', '4', '7', '10', '12', '15', '18', '20'];

const objectKeys = [
  '2',
  '3',
  '5',
  '6',
  '8',
  '9',
  '11',
  '13',
  '14',
  '16',
  '17',
  '19'
];

class Tree implements Config, HasRequiredKeys, HasStrings, HasObjects {
  private readonly _key: string;
  private readonly '_1': string;
  private readonly '_2': object;
  private readonly '_3': object;
  private readonly '_4': string;
  private readonly '_5': object;
  private readonly '_6': object;
  private readonly '_7': string;
  private readonly '_8': object;
  private readonly '_9': object;
  private readonly '_10': string;
  private readonly '_11': object;
  private readonly '_12': string;
  private readonly '_13': object;
  private readonly '_14': object;
  private readonly '_15': string;
  private readonly '_16': object;
  private readonly '_17': object;
  private readonly '_18': string;
  private readonly '_19': object;
  private readonly '_20': string;

  constructor(
    effectKey: string,
    rawYaml: object,
    nodes: {[key: string]: Node},
    classesConfig: ClassesConfig
  ) {
    validate(this, rawYaml);
    validateKeysMatch(this, effectKey, (rawYaml as RawTree).key);
    this['_key'] = (rawYaml as RawTree)['key'];
    if (!ohp(classesConfig.classes, this['_key'])) {
      throw new InvalidConfig(
        this,
        `${this['_key']} is not a valid class, did you enter a valid class?`
      );
    }
    this._1 = validateNode(this, '1', (rawYaml as RawTree)[1], nodes);
    this._2 = new SplitNode((rawYaml as RawTree)[2], nodes);
    this._3 = new SplitNode((rawYaml as RawTree)[3], nodes);
    this._4 = validateNode(this, '4', (rawYaml as RawTree)[4], nodes);
    this._5 = new SplitNode((rawYaml as RawTree)[5], nodes);
    this._6 = new SplitNode((rawYaml as RawTree)[6], nodes);
    this._7 = validateNode(this, '7', (rawYaml as RawTree)[7], nodes);
    this._8 = new SplitNode((rawYaml as RawTree)[8], nodes);
    this._9 = new SplitNode((rawYaml as RawTree)[9], nodes);
    this._10 = validateNode(this, '10', (rawYaml as RawTree)[10], nodes);
    this._11 = new SplitNode((rawYaml as RawTree)[11], nodes);
    this._12 = validateNode(this, '12', (rawYaml as RawTree)[12], nodes);
    this._13 = new SplitNode((rawYaml as RawTree)[13], nodes);
    this._14 = new SplitNode((rawYaml as RawTree)[14], nodes);
    this._15 = validateNode(this, '15', (rawYaml as RawTree)[15], nodes);
    this._16 = new SplitNode((rawYaml as RawTree)[16], nodes);
    this._17 = new SplitNode((rawYaml as RawTree)[17], nodes);
    this._18 = validateNode(this, '18', (rawYaml as RawTree)[18], nodes);
    this._19 = new SplitNode((rawYaml as RawTree)[19], nodes);
    this._20 = validateNode(this, '20', (rawYaml as RawTree)[20], nodes);
  }

  getClassName = (): string => Tree.name;
  getRequiredKeys = (): string[] => requiredKeys;
  getStrings = (): string[] => stringKeys;
  getObjects = (): string[] => objectKeys;

  get key(): string {
    return this._key;
  }

  get 1(): string {
    return this._1;
  }

  get 2(): object {
    return this._2;
  }

  get 3(): object {
    return this._3;
  }

  get 4(): string {
    return this._4;
  }

  get 5(): object {
    return this._5;
  }

  get 6(): object {
    return this._6;
  }

  get 7(): string {
    return this._7;
  }

  get 8(): object {
    return this._8;
  }

  get 9(): object {
    return this._9;
  }

  get 10(): string {
    return this._10;
  }

  get 11(): object {
    return this._11;
  }

  get 12(): string {
    return this._12;
  }

  get 13(): object {
    return this._13;
  }

  get 14(): object {
    return this._14;
  }

  get 15(): string {
    return this._15;
  }

  get 16(): object {
    return this._16;
  }

  get 17(): object {
    return this._17;
  }

  get 18(): string {
    return this._18;
  }

  get 19(): object {
    return this._19;
  }

  get 20(): string {
    return this._20;
  }
}

export default Tree;
