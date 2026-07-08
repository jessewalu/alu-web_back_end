import hasValuesFromArray from './7-has_array_values.js';

describe('hasvaluesfromarray', () => {
  it('returns true when the single value exists in the set', () => {
    expect.hasAssertions();
    expect(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1])).toBe(true);
  });

  it('returns false when the value does not exist in the set', () => {
    expect.hasAssertions();
    expect(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [10])).toBe(false);
  });

  it('returns false when only some values exist in the set', () => {
    expect.hasAssertions();
    expect(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 10])).toBe(false);
  });
});
