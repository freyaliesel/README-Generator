const fs = require("fs");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
        case "Apache":
            return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";

        case "Creative Commons":
            return "[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)"

        case "GNU GPLv3":
            return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";

        case "MIT":
            return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

        case "MPL 2.0":
            return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";

        default:
            return "";
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//     return;
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, name, year) {
    const licenses = [
        {
            name: "Apache",
            text: `Copyright ${year} ${name}

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at 
[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.`,
        },
        {
            name: "Creative Commons",
            text: `This work is licensed under a [Creative Commons Attribution Share Alike 4.0 International License.](https://creativecommons.org/licenses/by/4.0/legalcode)`
        },
        {
            name: "GNU GPLv3",
            text: `Copyright (C) ${year} ${name}
This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the [GNU General Public License](https://www.gnu.org/licenses/gpl-3.0) for more details.`
        },
        {
            name: "MIT",
            text: `This project is licensed under the [MIT License](https://opensource.org/licenses/MIT)`,
        },
        {
            name: "MPL 2.0",
            text: `This project is licensed under the [Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)`
        },
        {
            name: "None",
            text: `Copyright (C) ${year} ${name}

The owner of this project has not yet selected a license.\n
If interested in using any part of this code, please contact the project owner.`

        }
    ];

    switch (license) {
        case "Apache":
            return licenses[0].text;
        
        case "Creative Commons":
            return licenses[1].text;

        case "GNU GPLv3":
            return licenses[2].text;

        case "MIT":
            return licenses[3].text;

        case "MPL 2.0":
            return licenses[4].text;

        default:
            return licenses[5].text;
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    console.log("received data");
    return eval("`" + fs.readFileSync("./utils/template.md", "utf-8") + "`");
}

module.exports = generateMarkdown;
