const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMd = require("./utils/generateMarkdown")

const questions = [
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
