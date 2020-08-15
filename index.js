/** The generated README includes the following sections: 

  * Title
  * Description
  * Table of Contents
  * Installation
  * Usage
  * License
  * Contributing
  * Tests
  * Questions 
  WHEN: I am prompted for information about my application repository
THEN: A quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

WHEN: I enter my project title
THEN: This is displayed as the title of the README

WHEN: I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN: This information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

WHEN: I choose a license for my application from a list of options
THEN: A badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

WHEN: I enter my GitHub username
THEN: This is added to the section of the README entitled Questions, with a link to my GitHub profile

WHEN: I enter my email address
THEN: This is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

WHEN: I click on the links in the Table of Contents
THEN: I am taken to the corresponding section of the README
  * */
 

  const fs = require("fs");
  const axios = require("axios");
  const inquirer = require("inquirer");
  const api = require("./api.js");
  const readmeTemplate = require("./mdFormat.js");

  inquirer.prompt(
    {
        type: "input",
        message: "What is your Github username",
        name: "gUser", 
    },
    {
        type: "input",
        message: "What is your project title?",
        name: "title", 
    },
    {
        type: "input",
        message: "Please describe the project",
        name: "desc", 
    },
    {
        type: "input",
        message: "Please include the install instructions",
        name: "install", 
    },
    {
        type: "input",
        message: "Please include the usage information",
        name: "usage", 
    },
    {
        type: "input",
        message: "Do you have contribution guideline?",
        name: "conGuide", 
    },
    {
        type: "input",
        message: "What are the test instructions",
        name: "testInst", 
    },
    {
        type: "choice",
        message: "Please choose one of the licenses below",
        name: "license", 
    },
    {
        type: "input",
        message: "What is your Email address for additional questions?",
        name: "uEmail", 
    },
  )

  