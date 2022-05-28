const reverseString = require('../scripts/reverseString');

test('takes a string and returns it reversed', () => {
  expect(reverseString('lorem ipsum')).toBe('muspi merol');
});
