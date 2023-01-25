import { Config, HasObjects, HasRequiredKeys, HasStrings, validate, validateKeysMatch } from "../../validation";
import Node from "./Node";
import validateNode from "./validateNode";
import SplitNode from "./SplitNode";

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
  '20',
];

interface RawTree {
  'key': string,
  '1': string,
  '2': object,
  '3': object,
  '4': string,
  '5': object,
  '6': object,
  '7': string,
  '8': object,
  '9': object,
  '10': string,
  '11': object,
  '12': string,
  '13': object,
  '14': object,
  '15': string,
  '16': object,
  '17': object,
  '18': string,
  '19': object,
  '20': string,
}

const stringKeys = [
  'key',
  '1',
  '4',
  '7',
  '10',
  '12',
  '15',
  '18',
  '20',
];

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
  '19',
];

class Tree implements Config, HasRequiredKeys, HasStrings, HasObjects {

  public readonly key: string;
  public readonly 1: string;
  public readonly 2: object;
  public readonly 3: object;
  public readonly 4: string;
  public readonly 5: object;
  public readonly 6: object;
  public readonly 7: string;
  public readonly 8: object;
  public readonly 9: object;
  public readonly 10: string;
  public readonly 11: object;
  public readonly 12: string;
  public readonly 13: object;
  public readonly 14: object;
  public readonly 15: string;
  public readonly 16: object;
  public readonly 17: object;
  public readonly 18: string;
  public readonly 19: object;
  public readonly 20: string;

  constructor(effectKey: string, rawYaml: object, nodes: {[key: string]: Node}) {
    validate(this, rawYaml);
    validateKeysMatch(this, effectKey, (rawYaml as RawTree).key);
    this['key'] = (rawYaml as RawTree)['key'];
    this[1] = validateNode(this, '1', (rawYaml as RawTree)[1], nodes);
    this[2] = new SplitNode((rawYaml as RawTree)[2], nodes);
    this[3] = new SplitNode((rawYaml as RawTree)[3], nodes);
    this[4] = validateNode(this, '4', (rawYaml as RawTree)[4], nodes);
    this[5] = new SplitNode((rawYaml as RawTree)[5], nodes);
    this[6] = new SplitNode((rawYaml as RawTree)[6], nodes);
    this[7] = validateNode(this, '7', (rawYaml as RawTree)[7], nodes);
    this[8] = new SplitNode((rawYaml as RawTree)[8], nodes);
    this[9] = new SplitNode((rawYaml as RawTree)[9], nodes);
    this[10] = validateNode(this, '10', (rawYaml as RawTree)[10], nodes);
    this[11] = new SplitNode( (rawYaml as RawTree)[11], nodes);
    this[12] = validateNode(this, '12', (rawYaml as RawTree)[12], nodes);
    this[13] = new SplitNode( (rawYaml as RawTree)[13], nodes);
    this[14] = new SplitNode( (rawYaml as RawTree)[14], nodes);
    this[15] = validateNode(this, '15', (rawYaml as RawTree)[15], nodes);
    this[16] = new SplitNode( (rawYaml as RawTree)[16], nodes);
    this[17] = new SplitNode( (rawYaml as RawTree)[17], nodes);
    this[18] = validateNode(this, '18', (rawYaml as RawTree)[18], nodes);
    this[19] = new SplitNode( (rawYaml as RawTree)[19], nodes);
    this[20] = validateNode(this, '20', (rawYaml as RawTree)[20], nodes);
  }

  getClassName = () => Tree.name;
  getRequiredKeys = () => requiredKeys;
  getStrings = () => stringKeys;
  getObjects = () => objectKeys;
}