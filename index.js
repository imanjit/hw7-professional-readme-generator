const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
};

function init() {
    inquirer.prompt([
        {
            type: "input",
            name: "github",
            message: "Github username?",
        },
        {
            type: "input",
            name: "email",
            message: "Email address?",
        },
        {
            type: "input",
            name: "title",
            message: "Project name?",
        },
        {
            type: "input",
            name: "description",
            message: "Project description?",
        },
        {
            type: "input",
            name: "installation",
            message: "Command to install dependencies?",
            default: "npm i",
        },
        {
            type: "input",
            name: "test",
            message: "Command to run tests?",
            default: "npm test",
        },
        {
            type: "input",
            name: "usage",
            message: "Usage instructions for user?"
        },
        {
            type: "input",
            name: "contribution",
            message: "Contribution instructions for user?"
        },
        {
            type: "list",
            name: "license",
            message: "Project license?",
            choices: [
                "APACHE 2.0",
                "Boost", 
                "BSD 2",
                "BSD 3",
                "Creative Commons Zero",
                "Eclipse",
                "GNU Affero",
                "GNU General 2",
                "GNU General 3",
                "GNU Lesser",
                "MIT",
            ]
        },
    ]).then(function(responses) {
        console.log("Generating README...");
        writeToFile("README.md", generateMarkdown({...responses}));
    })
};

init();
