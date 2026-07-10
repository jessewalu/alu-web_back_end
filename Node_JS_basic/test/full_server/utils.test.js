import { expect } from 'chai';
import readDatabase from '../../full_server/utils';

describe('readDatabase', () => {
  it('rejects when the database cannot be loaded', () => readDatabase('nope.csv')
    .then(() => {
      throw new Error('Expected promise to reject');
    })
    .catch((error) => {
      expect(error).to.be.an('error');
    }));

  it('resolves with an object of arrays of firstnames per field', () => readDatabase('database.csv')
    .then((fields) => {
      expect(fields).to.have.property('CS');
      expect(fields).to.have.property('SWE');
      expect(fields.CS).to.deep.equal([
        'Johann', 'Arielle', 'Jonathan', 'Emmanuel', 'Guillaume', 'Katie',
      ]);
      expect(fields.SWE).to.deep.equal([
        'Guillaume', 'Joseph', 'Paul', 'Tommy',
      ]);
    }));
});
