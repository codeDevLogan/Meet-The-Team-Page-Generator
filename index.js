const fs = require('fs');
const inquirer = require('inquirer');
const bookends = require('./bookends');

const Engineer = require('./engineer');


const index = './index.html';

const bootSetup = [
    {
        type: '',
        name: ''
    },
]

engi1 = new Engineer('Logan', 3, 'codeDevLogan@gmail.com', 'codeDevLogan');

fs.writeFile(index, bookends.openHtml(), (err) =>
    err ? console.error(err) : console.log('Success!')
);

fs.appendFile(index, engi1.generateEngineerCard(), (err) =>
    err ? console.error(err) : console.log('Success!')
);

fs.appendFile(index, bookends.closeHtml(), (err) =>
    err ? console.error(err) : console.log('Success!')
);