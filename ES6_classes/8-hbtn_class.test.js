import ALXClass from './8-hbtn_class.js';

describe('alxclass', () => {
  it('casts to Number as the size', () => {
    expect.hasAssertions();
    const hc = new ALXClass(12, 'Mezzanine');
    expect(Number(hc)).toBe(12);
  });

  it('casts to String as the location', () => {
    expect.hasAssertions();
    const hc = new ALXClass(12, 'Mezzanine');
    expect(String(hc)).toBe('Mezzanine');
  });
});
