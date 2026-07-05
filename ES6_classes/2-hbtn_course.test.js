import ALXCourse from './2-hbtn_course.js';

describe('alxcourse', () => {
  it('creates an instance with underscore attributes', () => {
    expect.hasAssertions();
    const c1 = new ALXCourse('ES6', 1, ['Bob', 'Jane']);
    expect(c1._name).toBe('ES6');
    expect(c1._length).toBe(1);
    expect(c1._students).toStrictEqual(['Bob', 'Jane']);
  });

  it('allows getting attributes via getters', () => {
    expect.hasAssertions();
    const c1 = new ALXCourse('ES6', 1, ['Bob', 'Jane']);
    expect(c1.name).toBe('ES6');
    // eslint-disable-next-line jest/prefer-to-have-length
    expect(c1.length).toBe(1);
    expect(c1.students).toHaveLength(2);
  });

  it('allows setting attributes via setters', () => {
    expect.hasAssertions();
    const c1 = new ALXCourse('ES6', 1, ['Bob', 'Jane']);
    c1.name = 'Python 101';
    expect(c1._name).toBe('Python 101');
  });

  it('throws a TypeError when setting name to a non-string', () => {
    expect.hasAssertions();
    const c1 = new ALXCourse('ES6', 1, ['Bob', 'Jane']);
    expect(() => { c1.name = 12; }).toThrow(TypeError);
  });

  it('throws a TypeError when constructing with a non-number length', () => {
    expect.hasAssertions();
    expect(() => new ALXCourse('ES6', '1', ['Bob', 'Jane'])).toThrow(TypeError);
  });
});
