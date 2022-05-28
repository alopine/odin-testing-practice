const calculator = require('../scripts/calculator');

test('takes two numbers and returns the sum', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('takes two numbers and returns the difference', () => {
  expect(calculator.subtract(2, 1)).toBe(1);
});

test('takes two numbers and returns the quotient', () => {
  expect(calculator.divide(10, 5)).toBe(2);
});

test('takes two numbers and returns the product', () => {
  expect(calculator.multiply(4, 5)).toBe(20);
});
