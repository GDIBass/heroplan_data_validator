import {Config, HasObjects, HasRequiredKeys, validate} from '../../validation';
import Total from './Total';

const requiredKeys = ['1', '2', '3', '4', '5'];
const objectKeys = ['1', '2', '3', '4', '5'];

interface RawTotals {
  '1': object;
  '2': object;
  '3': object;
  '4': object;
  '5': object;
}

class Totals implements Config, HasRequiredKeys, HasObjects {
  private readonly '_1': Total;
  private readonly '_2': Total;
  private readonly '_3': Total;
  private readonly '_4': Total;
  private readonly '_5': Total;

  constructor(rawYaml: object) {
    validate(this, rawYaml);

    this._1 = new Total((rawYaml as RawTotals)['1']);
    this._2 = new Total((rawYaml as RawTotals)['2']);
    this._3 = new Total((rawYaml as RawTotals)['3']);
    this._4 = new Total((rawYaml as RawTotals)['4']);
    this._5 = new Total((rawYaml as RawTotals)['5']);
  }

  getClassName = (): string => Totals.name;
  getRequiredKeys = (): string[] => requiredKeys;
  getObjects = (): string[] => objectKeys;

  get 1(): Total {
    return this._1;
  }

  get 2(): Total {
    return this._2;
  }

  get 3(): Total {
    return this._3;
  }

  get 4(): Total {
    return this._4;
  }

  get 5(): Total {
    return this._5;
  }
}

export default Totals;
