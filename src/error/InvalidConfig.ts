import Config from "../validation/interfaces/Config";

class InvalidConfig extends Error {
  public configName: string;
  public data: string;
  constructor(config: Config, data: string) {
    super(`Config is not valid: ${config.getClassName()}:${data}`);
    this.configName = config.getClassName();
    this.data = data;
  }
}

export default InvalidConfig;