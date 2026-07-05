import SkyHighBuilding from './6-sky_high.js';
import Building from './5-building.js';

describe('skyhighbuilding', () => {
  it('extends Building and stores sqft and floors', () => {
    expect.hasAssertions();
    const building = new SkyHighBuilding(140, 60);
    expect(building).toBeInstanceOf(Building);
    expect(building.sqft).toBe(140);
    expect(building.floors).toBe(60);
  });

  it('overrides evacuationWarningMessage correctly', () => {
    expect.hasAssertions();
    const building = new SkyHighBuilding(140, 60);
    expect(building.evacuationWarningMessage()).toBe('Evacuate slowly the 60 floors');
  });
});
