const Library = require('../library.js');

describe('the Library', () => {
  it('should have a name', () => {
    const name = 'Cary Public Library';
    const lib = new Library(name);
    expect(lib.describe()).toEqual(name);
  });
});
