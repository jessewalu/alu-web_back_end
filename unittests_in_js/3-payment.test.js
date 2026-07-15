const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('calls Utils.calculateNumber with the same math as SUM 100 + 20', () => {
    const spy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    expect(spy.calledWith('SUM', 100, 20)).to.be.true;
    expect(spy.returnValues[0]).to.equal(Utils.calculateNumber('SUM', 100, 20));

    spy.restore();
  });
});
