const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const Employee = require ('./lib/Employee.js')

const name= Employee.getName();
const id = Employee.getId();
const email = Employee.getEmail();
const role = Employee.getRole();