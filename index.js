// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const md = require("./utils/generateMarkdown");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Title:",
    },
    // {
    //     type: "input",
    //     name: "description",
    //     message: "Short description of project:",
    // },
    // {
    //     type: "input",
    //     name: "install",
    //     message: "Steps for installation",
    // },
    // {
    //     type: "input",
    //     name: "usage",
    //     message: "How to use:",
    // },
    // {
    //     type: "list",
    //     name: "license",
    //     message: "Under which license is your project covered:",
    //     choices: ["Creative Commons", "MIT", "None"],
    // },
    // {
    //     type: "input",
    //     name: "contribute",
    //     message: "Contribution guidelines:",
    // },
    // {
    //     type: "input",
    //     name: "tests",
    //     message: "Provide an example of app in use:",
    // },
    // {
    //     type: "input",
    //     name: "github",
    //     message: "GitHub username:",
    // },
    // {
    //     type: "input",
    //     name: "email",
    //     message: "Contact email:",
    // },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log("generating README")
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        // console.log(responses);
        // generateMarkdown(responses)
        writeToFile(`${responses.title}_README.md`, generateMarkdown(responses));
    });
}

// Function call to initialize app
init();
