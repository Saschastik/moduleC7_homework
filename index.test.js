const reverse = require('./index.js');

test('reverse string "live"', () => {
  expect(reverse('live')).toBe('evil');
});