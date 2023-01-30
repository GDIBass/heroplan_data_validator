class InvalidImage extends Error {
  public readonly heroName: string;
  public readonly additionalDetails: string;

  constructor(heroName: string, additionalDetails: string) {
    super(`Hero image is invalid | hero=${heroName} | ${additionalDetails}`);
    this.heroName = heroName;
    this.additionalDetails = additionalDetails;
  }
}

export default InvalidImage;