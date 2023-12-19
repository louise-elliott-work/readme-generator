// * variables
const fs = require("fs");
const inquirer = require("inquirer");

// * array of questions for user
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'What is the title of your project?'
    },
    {
        name: 'description',
        type: 'input',
        message: 'How would you describe your project?'
    },
    {
        name: 'licence',
        type: 'list',
        message: 'What licence do you want to use for this project?',
        choices: ['none', 'Apache', 'GNU', 'MIT', 'Creative Commons']
    },
    {
        name: 'dependencies',
        type: 'input',
        message: 'What command should be run to install dependencies?',
        default: 'npm i'
    },
    {
        name: 'testing',
        type: 'input',
        message: 'What command should be run to carry out testing?',
        default: 'npm test'
    },
    {
        name: 'usage',
        type: 'input',
        message: 'What should the user know in order to use this repo effectively?',
    },
    {
        name: 'contributions',
        type: 'input',
        message: 'What should the user do in order to contribute to the repo?',
    },
];

// * prompt user with questions and log answers in README file
inquirer
    .prompt(questions)
    .then((response) => {
        const { title, description, licence, dependencies, testing, usage, contributions } = response;
        fs.writeFile('README.md',
        (`# ${title}
## contents
[Description](#description)
[Licence](#licence)
[Dependencies](#dependencies)
[Testing](#testing)
[Usage](#usage)
[Contributions](#contributions)
## description
${description}
## licence
${licence}
## dependencies
${dependencies},
## testing
${testing}
## usage
${usage}
## contributions
${contributions}
`),
        (err) => err ? console.error(err) : console.log('README generated'))});