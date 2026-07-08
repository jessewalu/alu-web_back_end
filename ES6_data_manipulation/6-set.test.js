import setFromArray from './6-set.js';

describe('setfromarray', () => {
  it('returns a Set instance', () => {
    expect.hasAssertions();
    expect(setFromArray([12, 32, 15, 78, 98, 15])).toBeInstanceOf(Set);
  });

  it('removes duplicate values', () => {
    expect.hasAssertions();
    const set = setFromArray([12, 32, 15, 78, 98, 15]);
    expect(set.size).toBe(5);
  });
});
