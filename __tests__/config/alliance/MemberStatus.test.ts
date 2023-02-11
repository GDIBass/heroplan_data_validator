import {expect, test, it, describe} from '@jest/globals';
import MemberStatus from '../../../src/config/alliance/MemberStatus';
import MissingRequiredKey from '../../../src/error/MissingRequiredKey';
import {fail} from 'assert';
import InvalidConfig from '../../../src/error/InvalidConfig';

const key = 'member_status';

const validMemberStatus = {
  key,
  id: '1234',
  description: 'Member Status',
  manager: 'true'
};

describe('MemberStatus building', () => {
  test('MemberStatus.test.ts succeeds with successful', async () => {
    expect(new MemberStatus(key, validMemberStatus)).toBeInstanceOf(
      MemberStatus
    );
  });

  it.each(['key', 'id', 'description'])(
    'MemberStatus.test.ts without required keys fails',
    async requiredKey => {
      const status: {[key: string]: string} = {
        ...validMemberStatus
      };
      delete status[requiredKey];
      expect(() => new MemberStatus(key, status)).toThrow(MissingRequiredKey);
    }
  );

  test('MemberStatus.test.ts key mismatch fails', async () => {
    const status: {[key: string]: string} = {
      ...validMemberStatus
    };
    status.key = 'wrong';
    expect(() => new MemberStatus(key, status)).toThrow(InvalidConfig);
  });

  test('MemberStatus.test.ts id is not integer fails', async () => {
    const status: {[key: string]: string} = {
      ...validMemberStatus
    };
    status.id = 'wrong';
    expect(() => new MemberStatus(key, status)).toThrow(InvalidConfig);
  });
});
