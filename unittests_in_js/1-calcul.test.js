const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('when type is SUM', () => {
    it('rounds and adds two whole numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });

    it('rounds decimals before adding', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('handles negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -1.4, -4.5), -5);
    });

    it('handles zero for both arguments', () => {
      assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
    });
  });

  describe('when type is SUBTRACT', () => {
    it('rounds and subtracts two whole numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 4, 1), 3);
    });

    it('rounds decimals before subtracting', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('handles negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.4, 4.5), -6);
    });

    it('handles zero for both arguments', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
    });
  });

  describe('when type is DIVIDE', () => {
    it('rounds and divides two whole numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 10, 2), 5);
    });

    it('rounds decimals before dividing', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('returns Error when the rounded divisor is 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('returns Error when the divisor rounds down to 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.4), 'Error');
    });

    it('handles negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -10, 2), -5);
    });
  });
});
