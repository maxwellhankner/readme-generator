var inquirer = require("inquirer");

// const questions = [
//     'Title',
//     'Description',
//     'Table of Contents',
//     'Installation',
//     'Usage',
//     'License',
//     'Contributing',
//     'Tests',
//     'Questions'
// ];

// function writeToFile(fileName, data) {

// }

function init() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the title of this repo?",
                name: "title"
            },
            {
                type: "input",
                message: "What is a good description for this repo?",
                name: "description"
            },
            {
                type: "input",
                message: "Enter a table of contents seperated by cammas.",
                name: "contents"
            },
            {
                type: "input",
                message: "Describe the installation process.",
                name: "installation"
            },
            {
                type: "input",
                message: "How does someone use this repo?",
                name: "usage"
            },
            {
                type: "checkbox",
                message: "What license is being used?",
                name: "license",
                choices: [
                    "MIT",
                    "GPLv3",
                    "AGPL"
                ]
            },
            {
                type: "input",
                message: "Who are the contributors?",
                name: "contributors"
            },
            {
                type: "input",
                message: "How does the user run tests?",
                name: "tests"
            },
            {
                type: "input",
                message: "How does the user run tests?",
                name: "questions"
            },
        ])
        .then(function({github, title, description, contents, installation, usage, license, contributors, tests, questions}) {
            console.log(title, description);
            
        });

}

init();
