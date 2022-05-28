const capitalize = require('../scripts/capitalize');

test('takes a string and returns it with the first character capitalized', () => {
  expect(capitalize('lorem ipsum')).toBe('Lorem ipsum');
});
