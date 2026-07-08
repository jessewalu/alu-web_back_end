import getListStudents from './0-get_list_students.js';
import updateStudentGradeByCity from './4-update_grade_by_city.js';

describe('updatestudentgradebycity', () => {
  it('assigns grades to matching students and N/A when missing', () => {
    expect.hasAssertions();
    const result = updateStudentGradeByCity(getListStudents(), 'San Francisco', [
      { studentId: 5, grade: 97 },
    ]);
    expect(result).toStrictEqual([
      {
        id: 1, firstName: 'Guillaume', location: 'San Francisco', grade: 'N/A',
      },
      {
        id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97,
      },
    ]);
  });

  it('assigns grades to all matching students when provided', () => {
    expect.hasAssertions();
    const result = updateStudentGradeByCity(getListStudents(), 'San Francisco', [
      { studentId: 5, grade: 97 },
      { studentId: 1, grade: 86 },
    ]);
    expect(result).toStrictEqual([
      {
        id: 1, firstName: 'Guillaume', location: 'San Francisco', grade: 86,
      },
      {
        id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97,
      },
    ]);
  });

  it('only returns students from the requested city', () => {
    expect.hasAssertions();
    const result = updateStudentGradeByCity(getListStudents(), 'Columbia', [
      { studentId: 2, grade: 75 },
    ]);
    expect(result).toStrictEqual([
      {
        id: 2, firstName: 'James', location: 'Columbia', grade: 75,
      },
    ]);
  });
});
