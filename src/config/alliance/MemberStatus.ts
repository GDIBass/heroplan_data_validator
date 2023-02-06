import {
  HasStrings,
  HasIntegers,
  HasRequiredKeys,
  HasId,
  Config,
  validate,
  validateKeysMatch
} from '../../validation';

const requiredKeys = ['key', 'id', 'description'];

const requiredStrings = ['key', 'description'];

const requiredIntegers = ['id'];

interface RawMemberStatus {
  key: string;
  id: string;
  description: string;
  manager: string | boolean;
}

class MemberStatus
  implements Config, HasRequiredKeys, HasStrings, HasIntegers, HasId
{
  private readonly _id: number;
  private readonly _key: string;
  private readonly _description: string;
  private readonly _manager: boolean;

  constructor(statusKey: string, rawYaml: object) {
    validate(this, rawYaml);
    validateKeysMatch(this, statusKey, (rawYaml as RawMemberStatus).key);
    this._id = parseInt((rawYaml as RawMemberStatus).id);
    this._key = (rawYaml as RawMemberStatus).key;
    this._description = (rawYaml as RawMemberStatus).description;
    this._manager =
      (rawYaml as RawMemberStatus).manager === 'true' ||
      (rawYaml as RawMemberStatus).manager === true;
  }

  getRequiredKeys = (): string[] => requiredKeys;
  getClassName = (): string => MemberStatus.name;
  getStrings = (): string[] => requiredStrings;
  getIntegers = (): string[] => requiredIntegers;
  getId = (): number => this._id;

  get id(): number {
    return this._id;
  }

  get key(): string {
    return this._key;
  }

  get description(): string {
    return this._description;
  }

  get manager(): boolean {
    return this._manager;
  }
}

export default MemberStatus;
