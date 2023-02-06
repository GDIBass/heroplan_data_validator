import MemberStatus from './alliance/MemberStatus';
import {
  HasObjects,
  HasRequiredKeys,
  Config,
  validate,
  validateNoDuplicateIds,
  HasIntegers
} from '../validation';

const requiredKeys = [
  'member_status',
  'leader_status',
  'requester_status',
  'new_member_status'
];
const integerKeys = ['leader_status', 'requester_status', 'new_member_status'];
const requiredObjects = ['member_status'];

interface RawAllianceConfig {
  member_status: {[key: string]: object};
  leader_status: string;
  requester_status: string;
  new_member_status: string;
}

type MemberStatuses = {[key: string]: MemberStatus};

class AllianceConfig
  implements Config, HasRequiredKeys, HasObjects, HasIntegers
{
  private readonly _member_status: MemberStatuses = {};
  private readonly _leader_status: number;
  private readonly _requester_status: number;
  private readonly _new_member_status: number;

  constructor(rawYaml: object) {
    validate(this, rawYaml);

    const memberStatus: {[key: string]: object} = (rawYaml as RawAllianceConfig)
      .member_status;
    for (const statusKey in memberStatus) {
      this._member_status[statusKey] = new MemberStatus(
        statusKey,
        memberStatus[statusKey]
      );
    }

    this._leader_status = parseInt(
      (rawYaml as RawAllianceConfig).leader_status
    );
    this._requester_status = parseInt(
      (rawYaml as RawAllianceConfig).requester_status
    );
    this._new_member_status = parseInt(
      (rawYaml as RawAllianceConfig).new_member_status
    );

    validateNoDuplicateIds(
      this,
      'member_status',
      Object.values(this._member_status)
    );
  }

  getRequiredKeys = (): string[] => requiredKeys;
  getObjects = (): string[] => requiredObjects;
  getIntegers = (): string[] => integerKeys;
  getClassName = (): string => AllianceConfig.name;

  get member_status(): MemberStatuses {
    return this._member_status;
  }

  get leader_status(): number {
    return this._leader_status;
  }

  get requester_status(): number {
    return this._requester_status;
  }

  get new_member_status(): number {
    return this._new_member_status;
  }
}

export default AllianceConfig;
