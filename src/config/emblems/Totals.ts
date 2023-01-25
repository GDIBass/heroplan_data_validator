import { Config, HasObjects, HasRequiredKeys, validate } from "../../validation";
import Total from "./Total";


const requiredKeys = ['1', '2', '3', '4,' ,'5'];
const objectKeys = ['1', '2', '3', '4', '5'];

interface RawTotals {
  '1': object,
  '2': object,
  '3': object,
  '4': object,
  '5': object,
}

class Totals implements Config, HasRequiredKeys, HasObjects {
  public readonly 1: Total;
  public readonly 2: Total;
  public readonly 3: Total;
  public readonly 4: Total;
  public readonly 5: Total;

  constructor(rawYaml: object) {
    validate(this, rawYaml);

    this[1] = new Total((rawYaml as RawTotals)['1']);
    this[2] = new Total((rawYaml as RawTotals)['2']);
    this[3] = new Total((rawYaml as RawTotals)['3']);
    this[4] = new Total((rawYaml as RawTotals)['4']);
    this[5] = new Total((rawYaml as RawTotals)['5']);
  }

  getClassName = () => Totals.name;
  getRequiredKeys = () => requiredKeys;
  getObjects = () => objectKeys;
}

export default Totals;