import cleanSet from './8-clean_set.js';

describe('cleanset', () => {
  it('returns matching values with the startString stripped, joined by -', () => {
    expect.hasAssertions();
    const set = new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']);
    expect(cleanSet(set, 'bon')).toBe('jovi-aparte-appetit');
  });

  it('returns an empty string when startString is empty', () => {
    expect.hasAssertions();
    const set = new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']);
    expect(cleanSet(set, '')).toBe('');
  });

  it('ignores values that do not start with startString', () => {
    expect.hasAssertions();
    const set = new Set(['apple', 'banana']);
    expect(cleanSet(set, 'ban')).toBe('ana');
  });
});
