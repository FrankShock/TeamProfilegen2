const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
const path = require('path');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const render = require('./src/pageTemp')

const createEmploy = ()  =>  {
return inquirer.prompt  ([
{
        type: 'input',
        name: 'name',
        message: 'What is the name of your employee.',
        validate: nameInput => {
            if (nameInput) {
                return true;
        } else {
            console.log("Please enter the name of your employee!");
            return false;
         }
    }
},
{
    type: 'list',
    name: 'role',
    message: 'What role does this employee have?',
    choices: ['Intern','Engineer']
},
{
    type: 'input',
    name: 'email',
    message: 'Please enter the email of the employee.',
    validate: emailInput => {
        if (emailInput) {
            return true;
     }
    }  
},
{
type: 'input',
 name: 'github',
 message: 'What is Github?',
 when: (input) => input.role === "Engineer",
            validate: nameInput => {
        if (nameInput ) {
         return true;
         } else {
                    console.log ("ERR")
                }
            }
},
{
type: 'input',
name: 'id',
message: "What is the employee's ID.",
    validate: nameInput => {
        if  (isNaN(nameInput)) {
            console.log ("Please enter the employee's ID!")
            return false; 
        } else {
            return true;
        }
    }  
},
{
    type: 'input',
    name: 'school',
    message: "Please enter the intern's school",
    when: (input) => input.role === "Intern",
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log ("Please enter the intern's school!")
        }
    }
},
{
    type: 'confirm',
    name: 'confirmAddEmp',
    message: 'anyone else??',
    default: false
  
}
])
.then(empData  =>  {
    let  {id, name, github, role, confirmAddEmp, email, school} = empData;
    let  employ;
if (role === "Engineer"){
    employ = new Engineer(id, name, github, email);
}


}



}
