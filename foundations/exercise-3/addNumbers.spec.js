const addNumbers = require('./addNumbers')

describe('addNumbers', () => {
  test('returns true when number is 1000', () => {
    expect(addNumbers(1000)).toEqual(true);
  });
  test('returns true when number is 10', () => {
    expect(addNumbers(20)).toEqual(true);
  });
  test('returns false when number is 9', () => {
    expect(addNumbers(9)).toEqual(false);
  });
  test('returns false when number is 6', () => {
    expect(addNumbers(6)).toEqual(false);
  });
});