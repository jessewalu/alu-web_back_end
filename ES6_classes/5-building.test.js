import Building from './5-building.js';

describe('building', () => {
  it('can be instantiated directly', () => {
    expect.hasAssertions();
    const b = new Building(100);
    expect(b.sqft).toBe(100);
  });

  it('throws when a subclass does not override evacuationWarningMessage', () => {
    expect.hasAssertions();
    class TestBuilding extends Building {}
    expect(() => new TestBuilding(200)).toThrow(
      'Class extending Building must override evacuationWarningMessage',
    );
  });

  it('does not throw when a subclass overrides evacuationWarningMessage', () => {
    expect.hasAssertions();
    class SafeBuilding extends Building {
      evacuationWarningMessage() {
        return `Evacuate ${this.sqft} sqft safely`;
      }
    }
    expect(() => new SafeBuilding(200)).not.toThrow();
  });
});
