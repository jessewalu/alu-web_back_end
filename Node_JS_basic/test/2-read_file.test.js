const { expect } = require('chai');
const sinon = require('sinon');
const countStudents = require('../2-read_file');

describe('countStudents (sync)', () => {
  it('throws when the database cannot be loaded', () => {
    expect(() => countStudents('nope.csv')).to.throw('Cannot load the database');
  });

  it('logs the correct student counts and lists', () => {
    const spy = sinon.spy(console, 'log');
    countStudents('database.csv');

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
