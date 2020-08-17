const readmeTemplate= (extraData,data) =>{

 
    var license;
    if(data.license[0] === "Create your own"){
        license = extraData.cusLicense;
        console.log("custom license "+ license);
    }
    else{
        license = data.license;
        console.log(data.license);
        console.log(license);
        console.log("preset license "+ license);
    }


    return `
# Porject Title
${data.title}

![License: None](https://img.shields.io/badge/License-${license}-brightgreen)

## Description
${data.desc}

## Table of contents
* [Install](#installation)

* [Usage](#Usage)
        
* [License](#license)

* [Contributors](#contributors)

* [Tests](#tests)

* [Questions](#Questions?)


## __Installation__
    ${data.install}

### __Usage__
    ${data.usage}

### __License__
        
This project is licensed under ${license}

### __Contributors__
    ${data.conGuide}

### __Tests__
    ${data.testInst}

### __Questions__

If you have any questions about the repo, open an issue or contact me direct at ${data.uEmail}.
You can find more of my work in my Github [${data.gUser}](https://github.com/${data.gUser}/).
`
}

module.exports = readmeTemplate