class Hero {
  public readonly name: string;
  public readonly source: string;
  public readonly class: string;
  public readonly speed: string;
  public readonly family: string;
  public readonly power: string;
  public readonly attack: string;
  public readonly defense: string;
  public readonly health: string;
  public readonly skill: string;
  public readonly effects: Array<string>;
  public readonly types: Array<string>;
  public readonly image: string;
  public readonly passives: Array<string>;
  public readonly costume: Costume;
  public readonly costume2: Costume;
}

export default Hero;