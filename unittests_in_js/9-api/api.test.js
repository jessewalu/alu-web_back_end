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
});

describe('Cart page', () => {
  it('returns a 200 status code when :id is a number', (done) => {
    request.get(`${BASE_URL}/cart/12`, (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('returns the correct message when :id is a number', (done) => {
    request.get(`${BASE_URL}/cart/12`, (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('returns a 404 status code when :id is NOT a number', (done) => {
    request.get(`${BASE_URL}/cart/hello`, (error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('returns a 404 status code when :id is a mix of letters and numbers', (done) => {
    request.get(`${BASE_URL}/cart/12a`, (error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('returns a 200 status code for large numeric ids', (done) => {
    request.get(`${BASE_URL}/cart/123456`, (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
});
