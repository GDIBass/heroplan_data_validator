import { Config, HasRequiredKeys, validate } from "../validation";
import Totals from "./emblems/Totals";
import ClassesConfig from "./ClassesConfig";
import Mode from "./emblems/Mode";
import Effect from "./emblems/Effect";
import Tree from "./emblems/Tree";
import Node from "./emblems/Node";
import Reset from "./emblems/Reset";


const requiredKeys = ['totals', 'modes', 'effects', 'nodes', 'trees', 'reset'];

interface RawEmblemsConfig {
  totals: object,
  modes: {[Key: string]: object},
  effects: {[Key: string]: object},
  nodes: {[Key: string]: object},
  trees: {[Key: string]: object},
  reset: {[Key: string]: object},
}

class EmblemsConfig implements Config, HasRequiredKeys {

  public readonly totals: Totals;
  public readonly modes: {[key: string]: Mode} = {};
  public readonly effects: {[key: string]: Effect} = {};
  public readonly nodes: {[key: string]: Node} = {};
  public readonly trees: {[key: string]: Tree} = {};
  public readonly reset: Reset;

  constructor(classesConfig: ClassesConfig, rawYaml: object) {
    validate(this, rawYaml);

    this.totals = new Totals((rawYaml as RawEmblemsConfig).totals);

    const modes = (rawYaml as RawEmblemsConfig).modes;
    for (let mode in modes) {
      this.modes[mode] = new Mode(mode, modes[mode]);
    }

    const effects = (rawYaml as RawEmblemsConfig).effects;
    for (let effect in effects) {
      this.effects[effect] = new Effect(effect, effects[effect], this.modes);
    }

    const nodes = (rawYaml as RawEmblemsConfig).nodes;
    for (let node in nodes) {
      this.nodes[node] = new Node(node, nodes, this.effects);
    }
    // Load trees w/ effects and classes for verification
    const trees = (rawYaml as RawEmblemsConfig).trees;
    for (let tree in trees) {
      this.trees[tree] = new Tree(tree, trees[tree], this.nodes, classesConfig);
    }
    // Load Reset
    this.reset = new Reset((rawYaml as RawEmblemsConfig).reset);
  }

  getClassName = () => EmblemsConfig.name;
  getRequiredKeys = () => requiredKeys;
}

export default EmblemsConfig;