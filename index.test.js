const { generateStrongPassword, isStrongPassword } = require('./index');

test('generateStrongPassword returns a string of the given length', () => {
  expect(generateStrongPassword(12).length).toBe(12);
});

test('isStrongPassword returns false for weak password', () => {
  expect(isStrongPassword('Hello World')).toBe(false);
});

test('isStrongPassword returns false for short password', () => {
  expect(isStrongPassword('Ab1!')).toBe(false);
});