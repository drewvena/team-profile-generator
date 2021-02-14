
const inquirer = require("inquirer");
const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
        this.getOfficeNumber = function() {
            inquirer
            .prompt([
                {
                    type: "input",
                    name: 'office',
                    message:"What Is Your Office Number?"
                }
            ])
        }
    }
};


module.exports = Manager;