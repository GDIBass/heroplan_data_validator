class ImageMissing extends Error {
  private readonly _heroName: string;
  private readonly _fileName: string;

  constructor(heroName: string, fileName: string) {
    super(`Hero is missing image | hero=${heroName} | fileName=${fileName}`);
    this._heroName = heroName;
    this._fileName = fileName;
  }

  get heroName(): string {
    return this._heroName;
  }

  get fileName(): string {
    return this._fileName;
  }
}

export default ImageMissing;
