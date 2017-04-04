import { expect } from 'chai';
import { isProd } from '../../../app/util/util';

describe('util', () => {
  it('should not be in production mode', () => {
    expect(isProd).to.be.false;
  });
});
