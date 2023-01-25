import Node from "./Node";
import { Config, HasRequiredKeys, HasStrings, validate } from "../../validation";
import validateNode from "./validateNode";

const requiredKeys = ['l', 'r'];
const stringKeys = ['l', 'r'];

interface RawSplitNode {
  l: string,
  r: string,
}

class SplitNode implements Config, HasRequiredKeys, HasStrings {

  public readonly l: string;
  public readonly r: string;

  constructor(rawYaml: object, nodes: {[key: string]: Node}) {
    validate(this, rawYaml);

    this.l = validateNode(this, 'l', (rawYaml as RawSplitNode).l, nodes);
    this.r = validateNode(this, 'r', (rawYaml as RawSplitNode).r, nodes);
  }

  getClassName = () => SplitNode.name;
  getRequiredKeys = () => requiredKeys;
  getStrings = () => stringKeys;
}

export default SplitNode;