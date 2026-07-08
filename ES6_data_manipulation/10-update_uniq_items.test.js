import updateUniqueItems from './10-update_uniq_items.js';
import groceriesList from './9-groceries_list.js';

describe('updateuniqueitems', () => {
  it('updates every quantity of 1 to 100', () => {
    expect.hasAssertions();
    const map = groceriesList();
    updateUniqueItems(map);
    expect(map.get('Pasta')).toBe(100);
    expect(map.get('Rice')).toBe(100);
  });

  it('leaves other quantities unchanged', () => {
    expect.hasAssertions();
    const map = groceriesList();
    updateUniqueItems(map);
    expect(map.get('Apples')).toBe(10);
    expect(map.get('Tomatoes')).toBe(10);
    expect(map.get('Banana')).toBe(5);
  });

  it('throws Cannot process when the argument is not a Map', () => {
    expect.hasAssertions();
    expect(() => updateUniqueItems('not a map')).toThrow('Cannot process');
  });
});
