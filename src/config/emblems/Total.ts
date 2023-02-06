import {Config, HasIntegers, HasRequiredKeys, validate} from '../../validation';

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
  private readonly '_1': number;
  private readonly '_2': number;
  private readonly '_3': number;
  private readonly '_4': number;
  private readonly '_5': number;
  private readonly '_6': number;
  private readonly '_7': number;
  private readonly '_8': number;
  private readonly '_9': number;
  private readonly '_10': number;
  private readonly '_11': number;
  private readonly '_12': number;
  private readonly '_13': number;
  private readonly '_14': number;
  private readonly '_15': number;
  private readonly '_16': number;
  private readonly '_17': number;
  private readonly '_18': number;
  private readonly '_19': number;
  private readonly '_20': number;

  constructor(rawYaml: object) {
    validate(this, rawYaml);
    this._1 = (rawYaml as RawTotal)['1'];
    this._2 = (rawYaml as RawTotal)['2'];
    this._3 = (rawYaml as RawTotal)['3'];
    this._4 = (rawYaml as RawTotal)['4'];
    this._5 = (rawYaml as RawTotal)['5'];
    this._6 = (rawYaml as RawTotal)['6'];
    this._7 = (rawYaml as RawTotal)['7'];
    this._8 = (rawYaml as RawTotal)['8'];
    this._9 = (rawYaml as RawTotal)['9'];
    this._10 = (rawYaml as RawTotal)['10'];
    this._11 = (rawYaml as RawTotal)['11'];
    this._12 = (rawYaml as RawTotal)['12'];
    this._13 = (rawYaml as RawTotal)['13'];
    this._14 = (rawYaml as RawTotal)['14'];
    this._15 = (rawYaml as RawTotal)['15'];
    this._16 = (rawYaml as RawTotal)['16'];
    this._17 = (rawYaml as RawTotal)['17'];
    this._18 = (rawYaml as RawTotal)['18'];
    this._19 = (rawYaml as RawTotal)['19'];
    this._20 = (rawYaml as RawTotal)['20'];
  }

  getClassName = (): string => Total.name;
  getRequiredKeys = (): string[] => requiredKeys;
  getIntegers = (): string[] => integerKeys;

  get 1(): number {
    return this._1;
  }

  get 2(): number {
    return this._2;
  }

  get 3(): number {
    return this._3;
  }

  get 4(): number {
    return this._4;
  }

  get 5(): number {
    return this._5;
  }

  get 6(): number {
    return this._6;
  }

  get 7(): number {
    return this._7;
  }

  get 8(): number {
    return this._8;
  }

  get 9(): number {
    return this._9;
  }

  get 10(): number {
    return this._10;
  }

  get 11(): number {
    return this._11;
  }

  get 12(): number {
    return this._12;
  }

  get 13(): number {
    return this._13;
  }

  get 14(): number {
    return this._14;
  }

  get 15(): number {
    return this._15;
  }

  get 16(): number {
    return this._16;
  }

  get 17(): number {
    return this._17;
  }

  get 18(): number {
    return this._18;
  }

  get 19(): number {
    return this._19;
  }

  get 20(): number {
    return this._20;
  }
}

export default Total;
