// array of questions for user
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkDown = require('./generateMarkdown')

const questions = [
{
    type: 'input',
    name: 'github',
    message: 'What is your Github username?',
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
},
{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
},
{
    type: 'input',
    name: 'description',
    message: 'Tell me about your project?',
},
{
    type: 'list',
    name: 'license',
    message: 'What type of license should your project have?',
},
{
name: 'Apache 2.0 License',
        value: {
            name: 'Apache 2.0 License',
            link: 'Apache%202.0',
            url: 'https://opensource.org/licenses/Apache-2.0',
            color: 'green',
        },
    },
    {
        name: 'MIT',
        value: {
            name: 'MIT',
            link: 'MIT',
            url: 'https://opensource.org/licenses/MIT',
            color: 'orange',
        },
        
            name: 'Unlicense',
            value: {
                name: 'Unlicense',
                link: 'Unlicense',
                url: 'http://unlicense.org',
                color: 'purple',
            },
           
        },
    {
        type: 'input',
        name: 'installation',
        message: 'What input should be run for questions?',
        default: 'npm install',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What input should be run for tests?',
        default: 'npm test',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Any repo questions?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Any thoughts to add?',
    },      

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName,data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        console.log(answers)
        writeToFile("readMe.md", generateMarkDown(answers))
    } )

}

// function call to initialize program
init();
