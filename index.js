// * variables
const fs = require("fs");
const inquirer = require("inquirer");

// * array of questions for user
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'what is the title of your project?'
    },
    {
        name: 'description',
        type: 'input',
        message: 'how would you describe your project?'
    },
    {
        name: 'licence',
        type: 'list',
        message: 'what licence do you want to use for this project?',
        choices: ['Creative Commons', 'MIT', 'none']
    },
    {
        name: 'dependencies',
        type: 'input',
        message: 'what command should be run to install dependencies?',
        default: 'npm i'
    },
    {
        name: 'testing',
        type: 'input',
        message: 'what command should be run to carry out testing?',
        default: 'npm test'
    },
    {
        name: 'usage',
        type: 'input',
        message: 'what should the user know to use this repo effectively?',
    },
    {
        name: 'contributions',
        type: 'input',
        message: 'what should the user do to contribute to the repo?',
    },
];

// * prompt user with questions and log answers in README file
inquirer
    .prompt(questions)
    .then((response) => {
        const { title, description, licence, dependencies, testing, usage, contributions } = response;
        fs.writeFile('README.md',
        (`# ${title}
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
        (err) => err ? console.error(err) : console.log(response))});