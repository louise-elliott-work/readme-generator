// * variables
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// * array of questions for user
const questions = [
    {
        name: 'project-title',
        type: 'input',
        message: 'what is the title of your project?'
    },
    {
        name: 'project-description',
        type: 'input',
        message: 'describe your project briefly'
    },
    {
        name: 'contents-table',
        type: 'input',
        message: 'what do you want to include in the table of contents?'
    },
    {
        name: 'licence',
        type: 'list',
        message: 'what licence do you want to use for this project?',
        choices: ['licencetype1', 'MIT', 'etc']
    },
];

// * prompt user and log answers
inquirer
    .prompt(questions)
    .then((response) => {
        fs.writeFile('userinput.txt', JSON.stringify(response), (err) =>
        err ? console.error(err) : console.log(response)
        );
    });

// // * function to write README file
// function writeToFile() {
//     console.log(response);
// };


// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
