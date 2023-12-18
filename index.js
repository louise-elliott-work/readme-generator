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
        message: 'describe your project briefly'
    },
    {
        name: 'contents',
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
        fs.writeFile('userinput.html', JSON.stringify(response), (err) =>
        err ? console.error(err) : console.log(response)
        );
        console.log(response)
        const { title, description, contents, licence } = response;
            console.log(title);
            console.log(description);
            console.log(contents);
            console.log(licence);
    });


// // * function to generate markdown for README
// function generateMarkdown(data) {
//     const userInput = require("./userinput.html");
//     console.log(userInput);
//     console.log(`# ${data.title})`);
//   }

//   module.exports = generateMarkdown;

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
