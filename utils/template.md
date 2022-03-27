# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Usage](#usage)
- [Contact](#contact)
- [License](#license)

## Installation

${data.install}

## Features

If your project has a lot of features, list them here.    

## Usage

${data.usage}

## Contributions

${data.contribute}

## Tests

${data.tests}

## Contact

Find more of my projects at [github.com/${data.github}](https://github.com/${data.github})
For questions, email [${data.email}](mailto:${data.email})


${data.license ? `## License\n\n ${renderLicenseSection(data.license)}\n\n ${renderLicenseLink(data.license)}` : ""}