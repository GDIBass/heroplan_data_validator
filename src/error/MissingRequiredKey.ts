import Config from "../validation/interfaces/Config";

class MissingRequiredKey extends Error {
  public configName: string;
  public data: string;
  public source: object;
  constructor(config: Config, data: string, source: object) {
    super(`Config is missing key | ${config.getClassName()}:${data} | keysPassed=${Object.keys(source)}`);
    this.configName = config.getClassName();
    this.data = data;
    this.source = source;
  }
}

export default MissingRequiredKey;