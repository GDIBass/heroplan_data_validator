import MemberStatus from "./alliance/MemberStatus";
import { HasObjects, HasRequiredKeys, Config, validate, validateNoDuplicateIds } from '../validation';

const requiredKeys = ['member_status'];
const requiredObjects = ['member_status'];

interface RawAllianceConfig {
  member_status: {[key: string]: object},
}

type MemberStatuses = {[key: string]: MemberStatus};

class AllianceConfig implements Config, HasRequiredKeys, HasObjects {

  private readonly _member_status: MemberStatuses = {};

  constructor(rawYaml: object) {
    validate(this, rawYaml);

    const memberStatus: {[key: string]: object} = (rawYaml as RawAllianceConfig).member_status;
    for (const statusKey in memberStatus) {
      this._member_status[statusKey] = new MemberStatus(statusKey, memberStatus[statusKey]);
    }

    validateNoDuplicateIds(this, 'member_status', Object.values(this._member_status));
  }

  getRequiredKeys = (): string[] => requiredKeys;
  getObjects = (): string[] => requiredObjects;
  getClassName = (): string => AllianceConfig.name;


  get member_status(): MemberStatuses {
    return this._member_status;
  }
}

export default AllianceConfig;