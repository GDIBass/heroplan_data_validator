class YamlParseFailed extends Error {
  public filename: string;
  public data: string;
  constructor(filename: string, data: string) {
    super(`Yaml Parse failed on file: ${data}`);
    this.filename = filename;
    this.data = data;
  }
}

export default YamlParseFailed;