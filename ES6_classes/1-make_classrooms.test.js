import initializeRooms from './1-make_classrooms.js';
import ClassRoom from './0-classroom.js';

describe('initializeRooms', () => {
  it('returns an array of 3 ClassRoom instances', () => {
    expect.hasAssertions();
    const rooms = initializeRooms();
    expect(rooms).toHaveLength(3);
  });

  it('returns rooms that are instances of ClassRoom', () => {
    expect.hasAssertions();
    const rooms = initializeRooms();
    rooms.forEach((room) => expect(room).toBeInstanceOf(ClassRoom));
  });

  it('returns rooms with sizes 19, 20, and 34 in order', () => {
    expect.hasAssertions();
    const rooms = initializeRooms();
    expect(rooms.map((room) => room._maxStudentsSize)).toStrictEqual([19, 20, 34]);
  });
});
