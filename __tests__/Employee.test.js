const { TestScheduler } = require('jest')
const Employee = require ('../lib/Employee.js')

test('Creates a new employee', () => {
    const employee = new Employee ('Drew', '01','drew@mail.com','owner')

    expect(employee.name).toBe('Drew')
})
