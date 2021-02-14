  const inquirer  = require('inquirer')
  const Mangager = require ('./Manager.js')
  const Engineer = require('./Engineer')
  const Intern = require('./Intern')

class Employee {
    constructor(name, id, email, role) {
  
        this.name = name
        this.id = id
        this.email = email
        this.role = role

        this.getName = function () {
           return inquirer
        .prompt([
        {
            type: "input",
            message: 'Name:',
            name:"name"
        }
        
        ])
        };
        this.getId = function () {
            return this.id;
        };
        this.getEmail = function () {
         return  inquirer
           .prompt([
            {
                type:'input',
                message:'Email:',
                name:'email'
            }
        ])
        };
        this.getRole = function () {
           return inquirer 
            .prompt ([
                {
                    type: 'list',
                    name: 'role',
                    message:"What's Your Position At the Company?",
                    choices:['Manager','Engineer','Intern']
                }
            ])
            // if ('Manager'){
            //     Mangager;
            // } else if ('Engineer'){
            //     Engineer;
            // } else if ('Intern'){
            //     Intern;
            // }
        };
    }
};




// const employees = [];

// let drew = new Employee(getName(), getId(), getEmail(), getRole());

module.exports = Employee;