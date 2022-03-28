const fs = require("fs");

const licenses = [
    {
        name: "Apache",
        text: `Copyright ${data.year} ${data.rightsHolder}

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.`,
    },

    {
      name: "MIT",
      text: `This project is licensed under the MIT License, a short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`,
    }
];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache":
      // return Apache badge      
      break;
  
    case "MIT":
      // return MIT badge
      break;

    case "GNU GPLv3":
      // return GNU GPLv3 badge
      break;

    default:
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    return;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    return "License Information";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    console.log("received data");
    return eval("`" + fs.readFileSync("./utils/template.md", "utf-8") + "`");
}

module.exports = generateMarkdown;
