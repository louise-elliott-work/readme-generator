// * variables
const fs = require("fs");
const inquirer = require("inquirer");

// * array of questions for user
const questions = [
    {
        name: 'username',
        type: 'input',
        message: 'What is your GitHub username?'
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is your email address?'
    },
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
        name: 'installation',
        type: 'input',
        message: 'What command should be run to install dependencies?',
        default: 'npm i'
    },
    {
        name: 'usage',
        type: 'input',
        message: 'What should the user know in order to use this repo effectively?',
    },
    {
        name: 'licence',
        type: 'list',
        message: 'What licence do you want to use for this project?',
        choices: ['none', 'Apache', 'GNU', 'MIT', 'Creative Commons']
    },
    {
        name: 'contributions',
        type: 'input',
        message: 'What should the user do in order to contribute to the repo?',
    },
    {
        name: 'testing',
        type: 'input',
        message: 'What command should be run to carry out testing?',
        default: 'npm test'
    },
];

// * prompt user with questions and log answers in README file
inquirer
    .prompt(questions)
    .then((response) => {
        const { title, description, installation, usage, licence, contributions, testing } = response;
        fs.writeFile('README.md',
        (`# ${title}
## Contents
[Description](#description)<br>
[Installation](#installation)<br>
[Usage](#usage)<br>
[Licence](#licence)<br>
[Contributions](#contributions)<br>
[Testing](#testing)<br>
## Description
${description}
## Dependencies
${installation}
## Usage
${usage}
## Licence
This project is ${licence} licensed.
## Contributions
${contributions}
## Testing
${testing}
## Questions
To view the repo relating to this tool, please visit https://github.com/${username}.
For any questions relating to this tool, please contact ${email}.
`),
        (err) => err ? console.error(err) : console.log('README generated'))});