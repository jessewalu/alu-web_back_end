const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('when type is SUM', () => {
    it('rounds and adds two whole numbers', () => {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });

    it('rounds decimals before adding', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('handles negative numbers', () => {
      expect(calculateNumber('SUM', -1.4, -4.5)).to.equal(-5);
    });

    it('handles zero for both arguments', () => {
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    });
  });

  describe('when type is SUBTRACT', () => {
    it('rounds and subtracts two whole numbers', () => {
      expect(calculateNumber('SUBTRACT', 4, 1)).to.equal(3);
    });

    it('rounds decimals before subtracting', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('handles negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -1.4, 4.5)).to.equal(-6);
    });

    it('handles zero for both arguments', () => {
      expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    });
  });

  describe('when type is DIVIDE', () => {
    it('rounds and divides two whole numbers', () => {
      expect(calculateNumber('DIVIDE', 10, 2)).to.equal(5);
    });

    it('rounds decimals before dividing', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('returns Error when the rounded divisor is 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('returns Error when the divisor rounds down to 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0.4)).to.equal('Error');
    });

    it('handles negative numbers', () => {
      expect(calculateNumber('DIVIDE', -10, 2)).to.equal(-5);
    });
  });
});
