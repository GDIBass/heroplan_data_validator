import HasId from "./interfaces/HasId";
import Config from "./interfaces/Config";
import InvalidConfig from "../error/InvalidConfig";

const validateNoDuplicateIds = (config: Config, child: string, elements: Array<HasId>) => {
  const ids: Set<number> = new Set();
  for (let element of elements) {
    const id: number = element.getId();
    if (ids.has(id)) {
      throw new InvalidConfig(
        config,
        `Duplicate ID found | child=${child} | id=${id}`
      );
    }
    ids.add(id);
  }
}

export default validateNoDuplicateIds;