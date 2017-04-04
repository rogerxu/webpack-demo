import button from '../../app/button';

describe('button', () => {
  test('should use button tag', () => {
    const btn = button();
    expect(btn.tagName).toBe('BUTTON');
  });
});
