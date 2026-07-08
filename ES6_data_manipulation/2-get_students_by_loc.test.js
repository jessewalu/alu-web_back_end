import getListStudents from './0-get_list_students.js';
import getStudentsByLocation from './2-get_students_by_loc.js';

describe('getstudentsbylocation', () => {
  it('returns only students matching the given city', () => {
    expect.hasAssertions();
    const students = getListStudents();
    expect(getStudentsByLocation(students, 'San Francisco')).toStrictEqual([
      { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
      { id: 5, firstName: 'Serena', location: 'San Francisco' },
    ]);
  });

  it('returns an empty array when no student matches', () => {
    expect.hasAssertions();
    const students = getListStudents();
    expect(getStudentsByLocation(students, 'Nowhere')).toStrictEqual([]);
  });
});
