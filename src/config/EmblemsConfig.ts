import { Config, HasObjects, HasRequiredKeys, validate } from "../validation";
import Totals from "./emblems/Totals";
import ClassesConfig from "./ClassesConfig";
import Mode from "./emblems/Mode";
import Effect from "./emblems/Effect";
import Tree from "./emblems/Tree";
import Node from "./emblems/Node";
import Reset from "./emblems/Reset";


const requiredKeys = ['totals', 'modes', 'effects', 'nodes', 'trees', 'reset'];
const objectKeys = ['totals', 'modes', 'effects', 'nodes', 'trees', 'reset'];

type StringKeyObjectType = { [key: string]: object };

interface RawEmblemsConfig {
  totals: object,
  modes: StringKeyObjectType,
  effects: StringKeyObjectType,
  nodes: StringKeyObjectType,
  trees: StringKeyObjectType,
  reset: StringKeyObjectType,
}

type Modes = { [key: string]: Mode };

type Effects = { [key: string]: Effect };

type Nodes = { [key: string]: Node };

type Trees = { [key: string]: Tree };

class EmblemsConfig implements Config, HasRequiredKeys, HasObjects {

  private readonly _totals: Totals;
  private readonly _modes: Modes = {};
  private readonly _effects: Effects = {};
  private readonly _nodes: Nodes = {};
  private readonly _trees: Trees = {};
  private readonly _reset: Reset;

  constructor(classesConfig: ClassesConfig, rawYaml: object) {
    validate(this, rawYaml);

    this._totals = new Totals((rawYaml as RawEmblemsConfig).totals);

    const modes = (rawYaml as RawEmblemsConfig).modes;
    for (let mode in modes) {
      this._modes[mode] = new Mode(mode, modes[mode]);
    }

    const effects = (rawYaml as RawEmblemsConfig).effects;
    for (let effect in effects) {
      this._effects[effect] = new Effect(effect, effects[effect], this._modes);
    }

    const nodes = (rawYaml as RawEmblemsConfig).nodes;
    for (let node in nodes) {
      this._nodes[node] = new Node(node, nodes[node], this._effects);
    }
    // Load trees w/ effects and classes for verification
    const trees = (rawYaml as RawEmblemsConfig).trees;
    for (let tree in trees) {
      this._trees[tree] = new Tree(tree, trees[tree], this._nodes, classesConfig);
    }
    // Load Reset
    this._reset = new Reset((rawYaml as RawEmblemsConfig).reset);
  }

  getClassName = (): string => EmblemsConfig.name;
  getRequiredKeys = (): string[] => requiredKeys;
  getObjects = (): string[] => objectKeys;

  get totals(): Totals {
    return this._totals;
  }

  get modes(): Modes {
    return this._modes;
  }

  get effects(): Effects {
    return this._effects;
  }

  get nodes(): Nodes {
    return this._nodes;
  }

  get trees(): Trees {
    return this._trees;
  }

  get reset(): Reset {
    return this._reset;
  }
}

export default EmblemsConfig;