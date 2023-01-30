class ImageMissing extends Error {
  public readonly heroName: string;
  public readonly fileName: string;

  constructor(heroName: string, fileName: string) {
    super(`Hero is missing image | hero=${heroName} | fileName=${fileName}`);
    this.heroName = heroName;
    this.fileName = fileName;
  }
}

export default ImageMissing;