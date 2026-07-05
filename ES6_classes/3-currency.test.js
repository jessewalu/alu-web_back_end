import Currency from './3-currency.js';

describe('currency', () => {
  it('creates an instance with underscore attributes', () => {
    expect.hasAssertions();
    const dollar = new Currency('$', 'Dollars');
    expect(dollar._code).toBe('$');
    expect(dollar._name).toBe('Dollars');
  });

  it('displayFullCurrency returns "name (code)"', () => {
    expect.hasAssertions();
    const dollar = new Currency('$', 'Dollars');
    expect(dollar.displayFullCurrency()).toBe('Dollars ($)');
  });

  it('supports getters and setters', () => {
    expect.hasAssertions();
    const dollar = new Currency('$', 'Dollars');
    dollar.code = 'USD';
    dollar.name = 'US Dollars';
    expect(dollar.code).toBe('USD');
    expect(dollar.name).toBe('US Dollars');
  });
});
