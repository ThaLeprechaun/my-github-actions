const {addUp} = require('./index');

test('should add two numbers', () => {
  expect(addUp(2, 3)).toBe(5);
});
