import Images from "./Images";


class Troop {
  public readonly key: string;
  public readonly id: number;
  public readonly stars: number;
  public readonly name: string;
  public readonly description: string;
  public readonly image: Images;
  public readonly manaBonus: {[key: number]: number};
}