import Config from "../validation/interfaces/Config";

class MissingRequiredKey extends Error {
  public configName: string;
  public data: string;
  constructor(config: Config, data: string) {
    super(`Config is missing key: ${config.getClassName()}:${data}`);
    this.configName = config.getClassName();
    this.data = data;
  }
}

export default MissingRequiredKey;