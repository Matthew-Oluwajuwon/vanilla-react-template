#!/usr/bin/env node
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// Get the project name from the arguments, default to "my-app" if not provided
const projectName = process.argv[2] || "my-app";
const templateRepo =
  "https://github.com/Matthew-Oluwajuwon/vanilla-react-template.git";

try {
  console.log(`Creating project in "${projectName}"...`);
  // Clone the template repository
  execSync(`git clone ${templateRepo} ${projectName}`);
  // Remove the .git folder to avoid git conflicts
  fs.rmSync(path.join(projectName, ".git"), { recursive: true, force: true });
  console.log("Project created successfully!");
  console.log(
    `To get started:\n  cd ${projectName}\n  npm install\n  npm start`
  );
} catch (error) {
  console.error("Error creating project:", error);
}
