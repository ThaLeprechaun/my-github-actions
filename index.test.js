const {addUp} = require('./index');

test('should add two numbers', () => {
  expect(addUp(2, 1)).toBe(4);
});
