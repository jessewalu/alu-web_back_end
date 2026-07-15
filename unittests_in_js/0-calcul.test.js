const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('rounds two whole numbers and sums them', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('rounds up when the decimal part is .5 or higher', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('rounds the first number up and keeps the sum correct', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('rounds .5 up to the next integer', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('rounds down when the decimal part is below .5', () => {
    assert.strictEqual(calculateNumber(1.4, 3.4), 4);
  });

  it('handles two exact integers with no rounding needed', () => {
    assert.strictEqual(calculateNumber(2, 2), 4);
  });

  it('handles negative numbers', () => {
    assert.strictEqual(calculateNumber(-1, -3), -4);
  });

  it('handles a negative and a positive number', () => {
    assert.strictEqual(calculateNumber(-1.5, 3.5), 3);
  });

  it('handles zero for both arguments', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('handles one argument being zero', () => {
    assert.strictEqual(calculateNumber(0, 4.6), 5);
  });

  it('handles very small decimal values close to the next integer', () => {
    assert.strictEqual(calculateNumber(1.999, 2.999), 5);
  });

  it('handles very small decimal values close to the same integer', () => {
    assert.strictEqual(calculateNumber(1.001, 2.001), 3);
  });
});
