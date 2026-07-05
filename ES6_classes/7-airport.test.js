import Airport from './7-airport.js';

describe('airport', () => {
  it('creates an instance with underscore attributes', () => {
    expect.hasAssertions();
    const airportSF = new Airport('San Francisco Airport', 'SFO');
    expect(airportSF._name).toBe('San Francisco Airport');
    expect(airportSF._code).toBe('SFO');
  });

  it('toString returns the object tag using the code', () => {
    expect.hasAssertions();
    const airportSF = new Airport('San Francisco Airport', 'SFO');
    expect(airportSF.toString()).toBe('[object SFO]');
  });
});
