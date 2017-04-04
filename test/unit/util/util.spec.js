import { isProd } from '../../../app/util/util';

describe('util', () => {
  test('should not be in production mode', () => {
    expect(isProd).toBe(false);
  });
});
