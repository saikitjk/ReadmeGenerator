const fs = require("fs");
const inquirer = require("inquirer");
const readmeTemplate = require("./mdFormat");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const stringifyObject = require('stringify-object');

function extraQuestion(){
    return inquirer.prompt(
        {
        type: "input",
        message: "What is your license",
        name: "cusLicense", 
        }
    )};

function promptUser() {
    return inquirer.prompt([
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
            type: "input",
            message: "What is your Email address for additional questions?",
            name: "uEmail", 
        },
        {
            type: "checkbox",
            message: "Please choose one of the licenses below",
            name: "license",
            choices: [
                "MIT", 
                "GPL3.0", 
                "BDS3", 
                "None",
                "Create your own"
              ] 
        }
    ])};
        

    async function init() {

        try {
          const data = await promptUser();
            //console.log("1. "+data.license);
            //console.log("type of data.license "+ typeof data.license);
            const dataCheck = data.license;

            //console.log("type of dataCheck "+ typeof dataCheck)
            //console.log("5. "+ dataCheck );


            if(dataCheck[0] === "Create your own"){
                const extraData = await extraQuestion();
              
                const template = readmeTemplate(extraData,data);
                const filename = data.title;
                await writeFileAsync(filename+".md", template);
                //console.log("yes");
                console.log("Readme file created successfully");

             }
             else if(dataCheck[0] !== "Create your own"){

                const extraData = null;
                //console.log("no");
                const template = readmeTemplate(extraData,data);
                const filename = data.title;
                await writeFileAsync(filename+".md", template);
            
                console.log("Readme file created successfully");
             }
        } catch(err) {
          console.log(err);
        }
      }
      
      init();