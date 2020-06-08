const {addUp} = require('./index');

test('should add two numbers', () => {
  expect(addUp(2, 2)).toBe(4);
});
