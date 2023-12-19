// * requires
const fs = require("fs");
const inquirer = require("inquirer");
const dayjs = require('dayjs')

// * array of user prompts
const questions = [
    {
        name: 'fullName',
        type: 'input',
        message: 'What is your full name?'
    },{
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
        choices: ['Apache License 2.0', 'Creative Commons Zero v1.0 Universal', 'MIT License']
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
        const { fullName, username, email, title, description, installation, usage, licence, contributions, testing } = response;
            var licenceText = "";
            var licenceIcon = "";
            if (licence === "Apache License 2.0") {
                licenceIcon = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
                licenceText = 'Licensed under the Apache License, Version 2.0. You may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0. Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.';
            }
            else if (licence === "Creative Commons Zero v1.0 Universal") {
                licenceIcon = '![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)'
                licenceText = 'The person who associated a work with this deed has dedicated the work to the public domain by waiving all of his or her rights to the work worldwide under copyright law, including all related and neighboring rights, to the extent allowed by law. You can copy, modify, distribute and perform the work, even for commercial purposes, all without asking permission.'
            }
            else if (licence === "MIT License") {
                licenceIcon = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
                licenceText = 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.'
            }
            else {
                licenceText = 'No license selected'};
                
        fs.writeFile('README.md',
        (`# ${title}
${licenceIcon}
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
${dayjs().format('YYYY')} ${fullName}
${licence}
${licenceText}
## Contributions
${contributions}
## Testing
${testing}
## Questions
To view the repo relating to this tool, please visit https://github.com/${username}.
For any questions relating to this tool, please contact ${email}.
`),
        (err) => err ? console.error(err) : console.log('README generated'))});