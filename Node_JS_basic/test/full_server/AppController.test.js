import { expect } from 'chai';
import sinon from 'sinon';
import AppController from '../../full_server/controllers/AppController';

describe('AppController', () => {
  it('returns a 200 status and the homepage message', () => {
    const req = {};
    const res = {
      status: sinon.stub().returnsThis(),
      send: sinon.stub().returnsThis(),
    };

    AppController.getHomepage(req, res);

    expect(res.status.calledWith(200)).to.equal(true);
    expect(res.send.calledWith('Hello Holberton School!')).to.equal(true);
  });
});
