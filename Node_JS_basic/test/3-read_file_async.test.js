const { expect } = require('chai');
const sinon = require('sinon');
const countStudents = require('../3-read_file_async');

describe('countStudents (async)', () => {
  it('rejects when the database cannot be loaded', () => countStudents('nope.csv')
    .then(() => {
      throw new Error('Expected promise to reject');
    })
    .catch((error) => {
      expect(error.message).to.equal('Cannot load the database');
    }));

  it('resolves and logs the correct student counts and lists', () => {
    const spy = sinon.spy(console, 'log');

    return countStudents('database.csv').then(() => {
      expect(spy.calledWith('Number of students: 10')).to.equal(true);
      expect(spy.calledWith(
        'Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie',
      )).to.equal(true);
      expect(spy.calledWith(
        'Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy',
      )).to.equal(true);
      spy.restore();
    });
  });
});
