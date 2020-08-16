const readmeTemplate= (extraData,data) =>{

    console.log("5."+data.license);
    console.log("6."+data);
    console.log("7."+extraData);
    var license;
    if(data.license === "Create your own"){
        license = extraData.cusLicense;
    }
    else{
        license = data.license
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