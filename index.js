const fs = require("fs");
//const axios = require("axios");
const inquirer = require("inquirer");
///const api = require("./api.js");
const readmeTemplate = require("./mdFormat");

  inquirer.prompt([
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
        type: "checkbox",
        message: "Please choose one of the licenses below",
        name: "license",
        choices: [
            "MIT", 
            "GITHUB", 
            "", 
            ""
          ] 
    },
    {
        type: "input",
        message: "What is your Email address for additional questions?",
        name: "uEmail", 
    },]
  ).then(function(data){
      console.log(typeof(data));
      const filename = data.title;
      fs.writeFile(filename + '.md', readmeTemplate(data), function(err){
          if(err){
              return console.log(err);
          }

        console.log("Readme created.");
      }
  )
    });

  

    //      fs.writeFile(filename + '.md', readmeTemplate(JSON.stringify(data, null, '\t')), function(err){