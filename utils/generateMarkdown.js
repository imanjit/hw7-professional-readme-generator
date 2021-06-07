function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  ---
  - [Description](#description)
  - [Installation](#installation)
  - [Testing](#testing)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Contact](#contact)
  - [License](#license)  

  ### Description
  ---
  ${data.description}

  ### Installation
  ---
  ${data.installation}

  ### Testing
  ---
  ${data.test}

  ### Usage
  ---
  ${data.usage}

  ### Contribution
  ---
  ${data.contribution}

  ### License
  ---
  ${data.license}

  ### Contact
  ---
  [GitHub] (https://github.com/${data.github})
  ${data.email}


`;
}

module.exports = generateMarkdown;
