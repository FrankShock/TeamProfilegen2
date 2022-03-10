const inquirer = require('inquirer');

const fs = require('fs');

const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const render = require('./src/pageTemp')
const teamArray  =[]

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
    validate: idInput => {
        if  (isNaN(idInput)) {
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
if (role === "intern"){
    employ = new Intern(id, name,school, email);
}
teamArray.push(employ);

if 
(confirmAddEmp){
    return createEmploy(teamArray);
}
else {
    return teamArray;
}


})
};

const createManag = ()  =>{
return inquirer.prompt  ([
{
    type: 'input',
    name: 'name',
    message: 'HELLO new manager What is your name?!.',
        validate: nameInput => {
if (nameInput) {
return true;
} else {
console.log("Please enter your name?");
        return false;
}
}
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
    name: 'id',
    message: "What is the employee's ID.",
        validate: idInput => {
            if  (isNaN(idInput)) {
                console.log ("Please enter the employee's ID!")
                return false; 
            } else {
                return true;
            }
        }  
    },
    {
        type: 'input',
        name: 'offiNumber',
        message: "What is your office number?",
            validate: offiNumInput => {
                if  (isNaN(offiNumInput)) {
                    console.log ("Please enter your office number?")
                    return false; 
                } else {
                    return true;
                }
}  
}
    
])
.then(ManagData =>  {
const {name, email, offiNumInput, id} = ManagData;
const manag = new  Manager(name, email, offiNumInput, id);
teamArray.push(manag);
})

};
const writeFile = (data) => {
    fs.writeFile('./Result/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("error")
        }
    })
};

createEmploy()
.then(createManag)
.then(teamArray => {
    return render(teamArray);
})
.then(createHTML => {
    return writeFile(createHTML);
})
.catch(err => {console.log(err);});




