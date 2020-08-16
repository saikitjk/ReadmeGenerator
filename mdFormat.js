const readmeTemplate= data =>{
    console.log(typeof(data)+data);
    console.log(data.license);
    return `
# Porject Title
# ${data.title}

__Description__
${data.desc}

## table of contents
* [Install](#installation)

* [Usage](#Usage)
        
* [License](#license)

* [Contributors](#contributors)

* [Tests](#tests)

* [Questions](#Additional questions?)


__Installation__
${data.install}

__Usage__
${data.usage}

__License__
        
This project is licensed under ${data.license}

__Contributors__
${data.conGuide}

__Tests__
${data.testInst}

__Additional questions__

If you have any questions about the repo, open an issue or contact me direct at ${data.uEmail}.
You can find more of my work at [${data.gUser}](https://github.com/${data.gUser}/).
`
}

module.exports = readmeTemplate