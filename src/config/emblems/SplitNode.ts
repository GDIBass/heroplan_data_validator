import Node from './Node';
import {Config, HasRequiredKeys, HasStrings, validate} from '../../validation';
import validateNode from './validateNode';

const requiredKeys = ['l', 'r'];
const stringKeys = ['l', 'r'];

interface RawSplitNode {
  l: string;
  r: string;
}

class SplitNode implements Config, HasRequiredKeys, HasStrings {
  private readonly _l: string;
  private readonly _r: string;

  constructor(rawYaml: object, nodes: {[key: string]: Node}) {
    validate(this, rawYaml);

    this._l = validateNode(this, 'l', (rawYaml as RawSplitNode).l, nodes);
    this._r = validateNode(this, 'r', (rawYaml as RawSplitNode).r, nodes);
  }

  getClassName = (): string => SplitNode.name;
  getRequiredKeys = (): string[] => requiredKeys;
  getStrings = (): string[] => stringKeys;

  get l(): string {
    return this._l;
  }

  get r(): string {
    return this._r;
  }
}

export default SplitNode;
