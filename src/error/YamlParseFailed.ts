class YamlParseFailed extends Error {
  private readonly _filename: string;
  private readonly _data: string;
  constructor(filename: string, data: string) {
    super(`Yaml Parse failed on file: ${data}`);
    this._filename = filename;
    this._data = data;
  }


  get filename(): string {
    return this._filename;
  }

  get data(): string {
    return this._data;
  }
}

export default YamlParseFailed;