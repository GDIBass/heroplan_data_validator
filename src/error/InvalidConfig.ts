import Config from '../validation/interfaces/Config';

class InvalidConfig extends Error {
  private readonly _configName: string;
  private readonly _data: string;

  constructor(config: Config, data: string) {
    super(`Config is not valid: ${config.getClassName()}:${data}`);
    this._configName = config.getClassName();
    this._data = data;
  }

  get configName(): string {
    return this._configName;
  }

  get data(): string {
    return this._data;
  }
}

export default InvalidConfig;
