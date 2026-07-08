import getListStudents from './0-get_list_students.js';

describe('getlistudents', () => {
  it('returns an array of 3 students', () => {
    expect.hasAssertions();
    expect(getListStudents()).toHaveLength(3);
  });

  it('returns the students in the correct order with the right shape', () => {
    expect.hasAssertions();
    expect(getListStudents()).toStrictEqual([
      { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
      { id: 2, firstName: 'James', location: 'Columbia' },
      { id: 5, firstName: 'Serena', location: 'San Francisco' },
    ]);
  });
});
