var inquirer = require("inquirer");
var fs = require("fs");

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



function init() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your Github username?",
                name: "github"
            },
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
                message: "Enter a table of contents (seperated by cammas without spaces).",
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
                type: "list",
                message: "What license is being used?",
                name: "license",
                choices: [
                    "MIT",
                    "GPLv3",
                    "AGPL",
                    "None"
                ]
            },
            {
                type: "input",
                message: "Who are the contributors (seperated by cammas without spaces)?",
                name: "contributors"
            },
            {
                type: "input",
                message: "How does the user run tests?",
                name: "tests"
            }
        ])
        .then(function({github, title, description, contents, installation, usage, license, contributors, tests}) {
            var inputArray = [title, description, contents.split(','), installation, usage, license, contributors.split(','), tests];
            var inputData = `# ${title}\n## ${description}`
            writeToFile("generated-readme.txt", inputData)
        });
    // Build the data according to the user's input
    // Call the writeToFile function
}

function writeToFile(fileName, data) {
    // write all the data to the file
    fs.writeFile(fileName, data, function(err) {

        if (err) {
          return console.log(err);
        }
      
        console.log("Success!");
      
      });
      
}

init();
