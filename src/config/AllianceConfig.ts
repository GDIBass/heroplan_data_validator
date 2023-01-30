import MemberStatus from "./alliance/MemberStatus";
import { HasObjects, HasRequiredKeys, Config, validate, validateNoDuplicateIds } from '../validation';

const requiredKeys = ['member_status'];
const requiredObjects = ['member_status'];

interface RawAllianceConfig {
  member_status: {[key: string]: object},
}

class AllianceConfig implements Config, HasRequiredKeys, HasObjects {

  public readonly member_status: {[key: string]: MemberStatus} = {};

  constructor(rawYaml: object) {
    validate(this, rawYaml);

    const memberStatus: {[key: string]: object} = (rawYaml as RawAllianceConfig).member_status;
    for (let statusKey in memberStatus) {
      this.member_status[statusKey] = new MemberStatus(statusKey, memberStatus[statusKey]);
    }

    validateNoDuplicateIds(this, 'member_status', Object.values(this.member_status));
  }

  getRequiredKeys = () => requiredKeys;
  getObjects = () => requiredObjects;
  getClassName = () => AllianceConfig.name;
}

export default AllianceConfig;