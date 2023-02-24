import {expect, test} from '@jest/globals';
import AscensionsConfig from '../config/AscensionsConfig';
import ascensions from '../ascensions';

test('Valid ascensions file succeeds', async () => {
  const result: AscensionsConfig = await ascensions(
    './testData/ascensions/valid.yml'
  );
  expect(result).toBeInstanceOf(AscensionsConfig);
});

test('Valid ascension file sets max ascension', async () => {});
test('Valid ascension file sets ascensions', async () => {});
test('Unparsable yaml fails', async () => {});
test('Missing file fails', async () => {});
test('Key mismatch fails', async () => {});
