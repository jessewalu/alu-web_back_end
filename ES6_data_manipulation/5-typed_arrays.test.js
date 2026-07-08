import createInt8TypedArray from './5-typed_arrays.js';

describe('createint8typedarray', () => {
  it('creates a DataView with the correct byteLength', () => {
    expect.hasAssertions();
    const view = createInt8TypedArray(10, 2, 89);
    expect(view.byteLength).toBe(10);
  });

  it('sets the value at the given position', () => {
    expect.hasAssertions();
    const view = createInt8TypedArray(10, 2, 89);
    expect(view.getInt8(2)).toBe(89);
  });

  it('throws when the position is outside the buffer range', () => {
    expect.hasAssertions();
    expect(() => createInt8TypedArray(10, 20, 89)).toThrow('Position outside range');
  });

  it('throws when the position is negative', () => {
    expect.hasAssertions();
    expect(() => createInt8TypedArray(10, -1, 89)).toThrow('Position outside range');
  });
});
