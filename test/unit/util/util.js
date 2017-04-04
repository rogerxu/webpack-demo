import assert from 'assert';
import { isProd } from '../../../app/util/util';

describe('util', () => {
  it('should not be in production mode', () => {
    assert.strictEqual(isProd, false);
  });
});
