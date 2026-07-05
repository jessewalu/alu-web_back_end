import Pricing from './4-pricing.js';
import Currency from './3-currency.js';

describe('pricing', () => {
  it('creates an instance with underscore attributes', () => {
    expect.hasAssertions();
    const p = new Pricing(100, new Currency('EUR', 'Euro'));
    expect(p._amount).toBe(100);
    expect(p._currency).toBeInstanceOf(Currency);
  });

  it('displayFullPrice returns "amount currency_name (currency_code)"', () => {
    expect.hasAssertions();
    const p = new Pricing(100, new Currency('EUR', 'Euro'));
    expect(p.displayFullPrice()).toBe('100 Euro (EUR)');
  });

  it('convertPrice multiplies amount by conversionRate', () => {
    expect.hasAssertions();
    expect(Pricing.convertPrice(100, 1.1)).toBeCloseTo(110);
  });
});
