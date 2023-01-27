const fs = require('fs');
const inquirer = require('inquirer');
const { default: Choice } = require('inquirer/lib/objects/choice');
const bookends = require('./lib/bookends');

const Engineer = require('./lib/engineer');


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


fs.writeFile(index, bookends.openHtml(), (err) =>
    err ? console.error(err) : console.log('Success!')
);

inquirer.prompt(bootQuestions)
    .then((response) => {
        manager = new manager
    })

engi1 = new Engineer('Logan', 3, 'codeDevLogan@gmail.com', 'codeDevLogan');


fs.appendFile(index, engi1.generateEngineerCard(), (err) =>
    err ? console.error(err) : console.log('Success!')
);

fs.appendFile(index, bookends.closeHtml(), (err) =>
    err ? console.error(err) : console.log('Success!')
);