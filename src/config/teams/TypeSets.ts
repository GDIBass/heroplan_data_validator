import Type from "./Type";


class TypeSet {
  public readonly key: string;
  public readonly types: {[key: string]: Type} = {};
}

export default TypeSet;