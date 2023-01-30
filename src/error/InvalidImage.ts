class InvalidImage extends Error {
  private readonly _heroName: string;
  private readonly _additionalDetails: string;

  constructor(heroName: string, additionalDetails: string) {
    super(`Hero image is invalid | hero=${heroName} | ${additionalDetails}`);
    this._heroName = heroName;
    this._additionalDetails = additionalDetails;
  }


  get heroName(): string {
    return this._heroName;
  }

  get additionalDetails(): string {
    return this._additionalDetails;
  }
}

export default InvalidImage;