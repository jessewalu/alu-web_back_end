import getListStudents from './0-get_list_students.js';
import getStudentIdsSum from './3-get_ids_sum.js';

describe('getstudentidssum', () => {
  it('returns the sum of all student ids', () => {
    expect.hasAssertions();
    const students = getListStudents();
    expect(getStudentIdsSum(students)).toBe(8);
  });
});
