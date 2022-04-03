# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

${data.install ? `- [Installation](#installation)` : ""}
${data.features ? `- [Features](#features)` : ""}
${data.usage ? `- [Usage](#usage)` : ""}
- [Contact](#contact)
${data.license ? `- [License](#license)`: ""}

${data.install ? `## Installation\n\n${data.install}` : ""}

${data.features ? `## Features\n\n${data.features}` : ""}   

${data.usage ? `## Usage\n\n${data.usage}` : ""}

${data.credits ? `## Contributions\n\n${data.credits}` : ""}

${data.testConfirm ? `## Tests\n\n${data.testInfo}\n\n${data.testLink}` : ""}

## Contact

Find more of my projects at [github.com/${data.github}](https://github.com/${data.github})
For questions, email [${data.email}](mailto:${data.email})


${data.license ? `## License\n\n ${renderLicenseSection(data.license, data.year, data.rightsHolder)}` : ""}