const mdFormat = data =>{

    return`
        * Porject Title
        ${data.title}

        * Description
        ${data.desc}

        * Installation
        ${data.install}

        * Usage
        ${data.usage}

        * Contributors
        ${data.conGuide}

        * Tests
        ${data.testInst}

        * Additional questions?
        ${data.uEmail}
        ${data.gUser}
    `
}