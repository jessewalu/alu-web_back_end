import listOfStudents from './9-hoisting.js';

describe('hoisting', () => {
  it('exports a list of 5 students', () => {
    expect.hasAssertions();
    expect(listOfStudents).toHaveLength(5);
  });

  it('builds the correct fullStudentDescription for each student', () => {
    expect.hasAssertions();
    const descriptions = listOfStudents.map((student) => student.fullStudentDescription);
    expect(descriptions).toStrictEqual([
      'Guillaume Salva - 2020 - San Francisco',
      'John Doe - 2020 - San Francisco',
      'Albert Clinton - 2019 - San Francisco',
      'Donald Bush - 2019 - San Francisco',
      'Jason Sandler - 2019 - San Francisco',
    ]);
  });
});
