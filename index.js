// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of the project:",
        validate(value) {
            return value ? true : "Title is required";
        },
    },
    {
        type: "input",
        name: "description",
        message: "Describe the project:",
        validate(value) {
            return value ? true : "Description is required";
        },
    },
    {
        type: "input",
        name: "install",
        message: "How to install:",
        validate(value) {
            return value ? true : "Provide installation instructions";
        },
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and/or an example of the app in use:",
        validate(value) {
            return value
                ? true
                : "Provide written instruction and/or a link in markdown";
        },
    },
    {
        type: "input",
        name: "contribute",
        message: "Contribution guidelines:",
        validate(value) {
            return value
                ? true
                : "Provide instruction on how to contribute to this project";
        },
    },
    {
        type: "confirm",
        name: "testConfirm",
        message: "Do you have tests?:",
    },
    {
        type: "input",
        name: "testLink",
        message: "Provide a link to your tests:",
        when(answers) {
            return answers.testConfirm;
        },
        validate(value) {
            return value ? true : "Link is required";
        },
    },
    {
        type: "input",
        name: "testInfo",
        message: "Provide instruction on how to run the tests:",
        when(answers) {
            return answers.testConfirm;
        },
    },
    {
        type: "input",
        name: "github",
        message: "GitHub username:",
        validate(value) {
            return value ? true : "Personal or organization username required";
        },
    },
    {
        type: "input",
        name: "email",
        message: "Contact email:",
        validate(value) {
            return value
                ? true
                : "Personal or organization email address required";
        },
    },
    {
        type: "list",
        name: "license",
        message: "Under which license is your project covered:",
        choices: [
            "Apache",
            "Creative Commons",
            "GNU AGPLv3",
            "GNU GPLv3",
            "MIT",
            "Mozilla",
            "None",
        ],
    },
    {
        type: "input",
        name: "rightsHolder",
        message: "Project copyright holder's name:",
        when(answers) {
            return answers.license != "Creative Commons";
        },
        validate(value) {
            return value ? true : "Copyright holder name is required";
        },
    },
    {
        type: "input",
        name: "year",
        message: "Project copyright year:",
        when(answers) {
            return answers.license != "Creative Commons";
        },
        default() {
            return "2022";
        },
        validate(value) {
            const isNumber = !isNaN(parseFloat(value));
            const isYear = value.length == 4;
            return isNumber && isYear
                ? true
                : "Please enter a four-digit year.";
        },
    },
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
        writeToFile(
            `${responses.title}_README.md`,
            generateMarkdown(responses)
        );
    });
}

// Function call to initialize app
init();
