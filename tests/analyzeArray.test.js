const analyzeArray = require('../scripts/analyzeArray');

test('takes an array of numbers and returns an object with the following properties: average, min, max, and length', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('takes an array of numbers and returns an object with the following properties: average, min, max, and length', () => {
  expect(analyzeArray([7, 10, 11, 12, 17])).toStrictEqual({
    average: 11.4,
    min: 7,
    max: 17,
    length: 5,
  });
});

test('takes an array of numbers and returns an object with the following properties: average, min, max, and length', () => {
  expect(analyzeArray([])).toStrictEqual(null);
});
