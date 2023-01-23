import MemberStatus from "./alliance/MemberStatus";
import { HasObjects, HasRequiredKeys, Config, validate, validateNoDuplicateIds } from '../validation';

const requiredKeys = ['member_status'];
const requiredObjects = ['member_status'];

class AllianceConfig implements Config, HasRequiredKeys, HasObjects {

  public member_status: {[key: string]: MemberStatus} = {};

  constructor(rawYaml: object) {
    validate(this, rawYaml);

    // @ts-ignore
    const memberStatus: {[key: string]: object} = rawYaml.member_status;
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