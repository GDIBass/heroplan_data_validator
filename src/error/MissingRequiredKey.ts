import Config from '../validation/interfaces/Config';

class MissingRequiredKey extends Error {
  private readonly _configName: string;
  private readonly _data: string;
  private readonly _source: object;
  constructor(config: Config, data: string, source: object) {
    super(
      `Config is missing key | ${config.getClassName()}:${data} | keysPassed=${Object.keys(
        source
      )}`
    );
    this._configName = config.getClassName();
    this._data = data;
    this._source = source;
  }

  get configName(): string {
    return this._configName;
  }

  get data(): string {
    return this._data;
  }

  get source(): object {
    return this._source;
  }
}

export default MissingRequiredKey;
