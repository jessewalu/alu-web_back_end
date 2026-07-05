import ClassRoom from './0-classroom.js';

describe('classroom', () => {
  it('stores maxStudentsSize in _maxStudentsSize', () => {
    expect.hasAssertions();
    const room = new ClassRoom(10);
    expect(room._maxStudentsSize).toBe(10);
  });
});
