import { expect } from 'chai';
import sinon from 'sinon';
import StudentsController from '../../full_server/controllers/StudentsController';

describe('StudentsController', () => {
  const originalArgv2 = process.argv[2];

  afterEach(() => {
    process.argv[2] = originalArgv2;
  });

  describe('getAllStudents', () => {
    it('returns a 200 status with the sorted list of students per field', () => new Promise((resolve, reject) => {
      process.argv[2] = 'database.csv';
      const res = {
        status: sinon.stub().returnsThis(),
        send: sinon.stub().callsFake((body) => {
          try {
            expect(res.status.calledWith(200)).to.equal(true);
            expect(body).to.include('This is the list of our students');
            expect(body).to.include(
              'Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie',
            );
            expect(body).to.include(
              'Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy',
            );
            resolve();
          } catch (error) {
            reject(error);
          }
        }),
      };

      StudentsController.getAllStudents({}, res);
    }));

    it('returns a 500 status when the database cannot be loaded', () => new Promise((resolve, reject) => {
      process.argv[2] = 'nope.csv';
      const res = {
        status: sinon.stub().returnsThis(),
        send: sinon.stub().callsFake((body) => {
          try {
            expect(res.status.calledWith(500)).to.equal(true);
            expect(body).to.equal('Cannot load the database');
            resolve();
          } catch (error) {
            reject(error);
          }
        }),
      };

      StudentsController.getAllStudents({}, res);
    }));
  });

  describe('getAllStudentsByMajor', () => {
    it('returns a 500 status when major is not CS or SWE', () => {
      const res = {
        status: sinon.stub().returnsThis(),
        send: sinon.stub().returnsThis(),
      };

      StudentsController.getAllStudentsByMajor({ params: { major: 'French' } }, res);

      expect(res.status.calledWith(500)).to.equal(true);
      expect(res.send.calledWith('Major parameter must be CS or SWE')).to.equal(true);
    });

    it('returns the list of first names for a valid major', () => new Promise((resolve, reject) => {
      process.argv[2] = 'database.csv';
      const res = {
        status: sinon.stub().returnsThis(),
        send: sinon.stub().callsFake((body) => {
          try {
            expect(res.status.calledWith(200)).to.equal(true);
            expect(body).to.equal('List: Guillaume, Joseph, Paul, Tommy');
            resolve();
          } catch (error) {
            reject(error);
          }
        }),
      };

      StudentsController.getAllStudentsByMajor({ params: { major: 'SWE' } }, res);
    }));

    it('returns a 500 status when the database cannot be loaded', () => new Promise((resolve, reject) => {
      process.argv[2] = 'nope.csv';
      const res = {
        status: sinon.stub().returnsThis(),
        send: sinon.stub().callsFake((body) => {
          try {
            expect(res.status.calledWith(500)).to.equal(true);
            expect(body).to.equal('Cannot load the database');
            resolve();
          } catch (error) {
            reject(error);
          }
        }),
      };

      StudentsController.getAllStudentsByMajor({ params: { major: 'CS' } }, res);
    }));
  });
});
