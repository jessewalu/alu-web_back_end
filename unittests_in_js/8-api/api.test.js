const request = require('request');
const { expect } = require('chai');

const BASE_URL = 'http://localhost:7865';

describe('Index page', () => {
  it('returns a 200 status code', (done) => {
    request.get(BASE_URL, (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('returns the welcome message', (done) => {
    request.get(BASE_URL, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('returns the correct content type', (done) => {
    request.get(BASE_URL, (error, response) => {
      expect(response.headers['content-type']).to.include('text/html');
      done();
    });
  });
});
