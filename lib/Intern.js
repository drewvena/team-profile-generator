const Employee = require ("./Employee.js")

class Intern extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
        this.school = school;
        this.role = 'Intern'
        this.getSchool = function() {
            return this.school;
        }
    }
};

module.exports = Intern;