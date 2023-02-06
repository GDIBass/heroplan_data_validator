import {Config} from '../../validation';
import InvalidConfig from '../../error/InvalidConfig';
import Node from './Node';
import ohp from '../../util/ohp';

const validateNode = (
  config: Config,
  key: string,
  node: string,
  nodes: {[key: string]: Node}
): string => {
  if (!ohp(nodes, node)) {
    throw new InvalidConfig(
      config,
      `node does not exist for key ${key} and node ${node}`
    );
  }
  return node;
};

export default validateNode;
