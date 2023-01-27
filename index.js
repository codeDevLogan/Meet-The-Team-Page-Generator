const fs = require('fs');
const inquirer = require('inquirer');
const { default: Choice } = require('inquirer/lib/objects/choice');
const { listenerCount } = require('process');
const bookends = require('./lib/bookends');

const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');


const index = './dist/index.html';

const bootQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'managerID',
        message: 'What is your employee ID?'
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'managerOffice',
        message: 'What is your office number?'
    },
    {
        type: 'list',
        name: 'addAnotherEmployee',
        message: 'Would you like to add another Employee?',
        choices: [
            'Yes',
            'No'
        ]
    }
];
const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: 'What is the name of your Engineer?'
    },
    {
        type: 'input',
        name: 'engineerID',
        message: "What is your engineer's employee ID?"
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: "What is your engineer's email?"
    },
    {
        type: 'input',
        name: 'engineerGithub',
        message: "What is your engineer's GitHub Username?"
    },
    {
        type: 'list',
        name: 'addAnotherEmployee',
        message: 'Would you like to add another Employee?',
        choices: [
            'Yes',
            'No'
        ]
    }
];
const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: 'What is the name of your Intern?'
    },
    {
        type: 'input',
        name: 'internID',
        message: "What is your intern's eployee ID?"
    },
    {
        type: 'input',
        name: 'internEmail',
        message: "What is your intern's email?"
    },
    {
        type: 'input',
        name: 'internSchool',
        message: 'What school is your intern studying at?'
    },
    {
        type: 'list',
        name: 'addAnotherEmployee',
        message: 'Would you like to add another Employee?',
        choices: [
            'Yes',
            'No'
        ]
    }
];

const employeeMenu = () => {
    inquirer.prompt([{
        type: 'list',
        name: 'employeeChoice',
        message: 'Which type of employee would you like to add?',
        choices: [
            'Engineer',
            'Intern'
        ]
    }]).then((response) => {
        switch(response.employeeChoice){
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addIntern();
                break;
        }
    })
}

const addEngineer = () => {
    inquirer.prompt(engineerQuestions)
        .then((response) => {
            const engi1 = new Engineer(response.engineerName, response.engineerID, response.engineerEmail, response.engineerGithub);
            fs.appendFileSync(index, engi1.generateEngineerCard(), (err) =>
                err ? console.error(err) : console.log('Successfully added an Engineer!')
            );
            if(response.addAnotherEmployee === 'Yes'){
                employeeMenu();
            }else{
                fs.appendFileSync(index, bookends.closeHtml(), (err) =>
                    err ? console.error(err) : console.log('Success!')
                );
                process.exit();
            }
        })
}
const addIntern = () => {
    inquirer.prompt(internQuestions)
        .then((response) => {
            const intern1 = new Intern(response.internName, response.internID, response.internEmail, response.internSchool);
            fs.appendFileSync(index, intern1.generateInternCard(), (err) =>
                err ? console.error(err) : console.log('Successfully added an Intern!')
            );
            if(response.addAnotherEmployee === 'Yes'){
                employeeMenu();
            }else{
                fs.appendFileSync(index, bookends.closeHtml(), (err) =>
                    err ? console.error(err) : console.log('Success!')
                );
                process.exit();
            }
        })
}



const init = () => {
    fs.writeFileSync(index, bookends.openHtml(), (err) => {
            if(err){
                console.error(err)
            }
        }
    );

    inquirer.prompt(bootQuestions)
        .then((response) => {
            const manager = new Manager(response.managerName, response.managerID, response.managerEmail, response.managerOffice);
            fs.appendFileSync(index, manager.generateManagerCard(), (err) =>
                err ? console.error(err) : console.log(' ')
            )
            if(response.addAnotherEmployee === 'Yes'){
                employeeMenu();
            }else{
                fs.appendFileSync(index, bookends.closeHtml(), (err) =>
                    err ? console.error(err) : console.log('Success!')
                );
                process.exit();
            }
        });
}

init();