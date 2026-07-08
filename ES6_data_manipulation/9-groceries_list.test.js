import groceriesList from './9-groceries_list.js';

describe('grocerieslist', () => {
  it('returns a Map instance', () => {
    expect.hasAssertions();
    expect(groceriesList()).toBeInstanceOf(Map);
  });

  it('contains the expected groceries and quantities in order', () => {
    expect.hasAssertions();
    const map = groceriesList();
    expect([...map.entries()]).toStrictEqual([
      ['Apples', 10],
      ['Tomatoes', 10],
      ['Pasta', 1],
      ['Rice', 1],
      ['Banana', 5],
    ]);
  });
});
