const getTeacherName = require('./hello');

test('outputs the correct string', () => {
  expect(getTeacherName()).toBe("Mr. Wilson");
});