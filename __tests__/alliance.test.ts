import {expect, test} from '@jest/globals'
import AllianceConfig from "../src/config/AllianceConfig";
import alliance from "../src/alliance";
import InvalidConfig from "../src/error/InvalidConfig";
import YamlParseFailed from "../src/error/YamlParseFailed";
import MissingRequiredKey from "../src/error/MissingRequiredKey";
import FileLoadFailed from "../src/error/FileLoadFailed";

test('valid alliance file succeeds', async () => {
  const result: AllianceConfig = await alliance('./testData/alliance/valid_alliance.yml');
  expect(result).toBeInstanceOf(AllianceConfig);
});

test('valid alliance file has two statuses', async () => {
  const result: AllianceConfig = await alliance('./testData/alliance/valid_alliance.yml');
  expect(result.member_status).toHaveProperty('none');
  expect(result.member_status.none.id).toEqual(0);
});

test('duplicate id for member_status fails', async () => {
  try {
    await alliance('./testData/alliance/duplicate_id.yml');
  } catch (error) {
    expect(error).toBeInstanceOf(InvalidConfig);
    if (error instanceof InvalidConfig) {
      expect(error.message).toContain('Duplicate ID found | child=member_status');
    }
  }
});

test('invalid yaml fails', async () => {
  try {
    await alliance('./testData/alliance/invalid_yaml.yml');
  } catch (error) {
    expect(error).toBeInstanceOf(YamlParseFailed);
    if (error instanceof YamlParseFailed) {
      expect(error.message).toContain('Could not parse yaml file');
    }
  }
});

test('key mismatch fails', async () => {
  try {
    await alliance('./testData/alliance/key_mismatch.yml');
  } catch (error) {
    expect(error).toBeInstanceOf(InvalidConfig);
    if (error instanceof InvalidConfig) {
      expect(error.message).toContain('MemberStatus:keys do not match: request:requestoooo');
    }
  }
});

test('missing member status fails', async () => {
  try {
    await alliance('./testData/alliance/missing_member_status_key.yml');
  } catch (error) {
    expect(error).toBeInstanceOf(MissingRequiredKey);
    if (error instanceof MissingRequiredKey) {
      expect(error.message).toContain('Config is missing key | AllianceConfig:member_status');
    }
  }
});

test('no file fails', async () => {
  try {
    await alliance('./testData/alliance/not_an_actual_file.yml');
  } catch (error) {
    expect(error).toBeInstanceOf(FileLoadFailed);
    if (error instanceof FileLoadFailed) {
      expect(error.message).toContain('File failed to load');
    }
  }
});