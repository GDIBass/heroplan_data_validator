import { Config, HasIntegers, HasRequiredKeys, validate } from "../../validation";

const requiredKeys = [
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
const integerKeys = [
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

interface RawTotal {
  '1': number;
  '2': number;
  '3': number;
  '4': number;
  '5': number;
  '6': number;
  '7': number;
  '8': number;
  '9': number;
  '10': number;
  '11': number;
  '12': number;
  '13': number;
  '14': number;
  '15': number;
  '16': number;
  '17': number;
  '18': number;
  '19': number;
  '20': number;
}

class Total implements Config, HasRequiredKeys, HasIntegers {
  public readonly 1: number;
  public readonly 2: number;
  public readonly 3: number;
  public readonly 4: number;
  public readonly 5: number;
  public readonly 6: number;
  public readonly 7: number;
  public readonly 8: number;
  public readonly 9: number;
  public readonly 10: number;
  public readonly 11: number;
  public readonly 12: number;
  public readonly 13: number;
  public readonly 14: number;
  public readonly 15: number;
  public readonly 16: number;
  public readonly 17: number;
  public readonly 18: number;
  public readonly 19: number;
  public readonly 20: number;

  constructor(rawYaml: object) {
    validate(this, rawYaml);
    this[1] = (rawYaml as RawTotal)['1'];
    this[2] = (rawYaml as RawTotal)['2'];
    this[3] = (rawYaml as RawTotal)['3'];
    this[4] = (rawYaml as RawTotal)['4'];
    this[5] = (rawYaml as RawTotal)['5'];
    this[6] = (rawYaml as RawTotal)['6'];
    this[7] = (rawYaml as RawTotal)['7'];
    this[8] = (rawYaml as RawTotal)['8'];
    this[9] = (rawYaml as RawTotal)['9'];
    this[10] = (rawYaml as RawTotal)['10'];
    this[11] = (rawYaml as RawTotal)['11'];
    this[12] = (rawYaml as RawTotal)['12'];
    this[13] = (rawYaml as RawTotal)['13'];
    this[14] = (rawYaml as RawTotal)['14'];
    this[15] = (rawYaml as RawTotal)['15'];
    this[16] = (rawYaml as RawTotal)['16'];
    this[17] = (rawYaml as RawTotal)['17'];
    this[18] = (rawYaml as RawTotal)['18'];
    this[19] = (rawYaml as RawTotal)['19'];
    this[20] = (rawYaml as RawTotal)['20'];
  }

  getClassName = () => Total.name;
  getRequiredKeys = () => requiredKeys;
  getIntegers = () => integerKeys;
}

export default Total;