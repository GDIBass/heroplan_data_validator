


class Speed {
  public readonly key: string;
  public readonly code: number;
  public readonly shortName: string;
  public readonly description: string;
  public readonly tiles: Array<number>;
  public readonly breakpoints: {[key: number]: Array<number>}
}

export default Speed;