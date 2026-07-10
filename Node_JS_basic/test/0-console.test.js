const { expect } = require('chai');
const sinon = require('sinon');
const displayMessage = require('../0-console');

describe('displayMessage', () => {
  it('prints the given message to the console', () => {
    const spy = sinon.spy(console, 'log');
    displayMessage('Hello NodeJS!');
    expect(spy.calledWith('Hello NodeJS!')).to.equal(true);
    spy.restore();
  });
});
