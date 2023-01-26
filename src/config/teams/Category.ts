

class Category {
  public readonly string: description;
  public readonly category: number;
  public readonly distinct: boolean = false;
  public readonly typeset: string;
  public readonly colors: Set<string>;
  public readonly stars: Set<number>;
}

export default Category;