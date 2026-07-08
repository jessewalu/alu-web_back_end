import getListStudentIds from './1-get_list_student_ids.js';
import getListStudents from './0-get_list_students.js';

describe('getlistudentids', () => {
  it('returns an empty array when the argument is not an array', () => {
    expect.hasAssertions();
    expect(getListStudentIds('hello')).toStrictEqual([]);
  });

  it('returns the list of ids for an array of students', () => {
    expect.hasAssertions();
    expect(getListStudentIds(getListStudents())).toStrictEqual([1, 2, 5]);
  });
});
