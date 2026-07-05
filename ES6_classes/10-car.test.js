import Car from './10-car.js';

describe('car', () => {
  it('creates an instance with underscore attributes', () => {
    expect.hasAssertions();
    const car = new Car('Nissan', 'Turbo', 'Pink');
    expect(car._brand).toBe('Nissan');
    expect(car._motor).toBe('Turbo');
    expect(car._color).toBe('Pink');
  });

  it('cloneCar returns a new object of the same (sub)class', () => {
    expect.hasAssertions();
    class TestCar extends Car {}
    const tc1 = new TestCar('Nissan', 'Turbo', 'Pink');
    const tc2 = tc1.cloneCar();
    expect(tc2).toBeInstanceOf(TestCar);
    expect(tc1 === tc2).toBe(false);
  });
});
