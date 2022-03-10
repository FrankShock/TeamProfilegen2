const Manager = require('../lib/Manager.js');
test('creates a manager object', () => {
const manager = new Manager('Tom', 'test@test.com', 55, 303);
expect(manager.officeNum).toBe(303);
});

test("gets manager's role", () => {
const manager = new Manager('Tom', 'test@test.com', 55, 303);
expect(manager.getRole()).toBe('Manager');
});