const caesarCipher = require('../scripts/caesarCipher');

test('takes a string and an offset number and returns an encrypted string; test wrapping from z to a', () => {
  expect(caesarCipher('zounds', 1)).toBe('apvoet');
});

test('takes a string and an offset number and returns an encrypted string; test keeping the same case', () => {
  expect(caesarCipher('lOrEm', 5)).toBe('qTwJr');
});

test('takes a string and an offset number and returns an encrypted string; test punctuation', () => {
  expect(caesarCipher('Hello, my good friend!', 1)).toBe('Ifmmp, nz hppe gsjfoe!');
});

test('takes a string and an offset number and returns an encrypted string; test negative offset', () => {
  expect(caesarCipher('fizzbuzz', -10)).toBe('vypprkpp');
});

test('takes a string and an offset number and returns an encrypted string; test large offset', () => {
  expect(caesarCipher('fizzbuzz', 56)).toBe('jmddfydd');
});
