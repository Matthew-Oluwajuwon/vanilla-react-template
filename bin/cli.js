#!/usr/bin/env node

import { execSync } from "child_process";

// Function to run shell commands with error handling
const runCommand = (command) => {
  try {
    execSync(command, { stdio: "inherit" });
    return true;
  } catch (error) {
    console.error(`Error executing command: ${command}\n`, error.message);
    return false;
  }
};

// Get repository name from command-line arguments or set default to "my-app"
const repoName = process.argv[2] || "my-app";

// Define commands for cloning and installing dependencies
const gitCheckoutCommand = `git clone --depth 1 https://github.com/Matthew-Oluwajuwon/vanilla-react-template.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

// Start the project setup process
console.log(`\nCloning the repository to create the project: ${repoName}...\n`);

const isRepoCloned = runCommand(gitCheckoutCommand);
if (!isRepoCloned) {
  console.error("\nRepository cloning failed. Please check the repository URL or your network connection.");
  process.exit(1);
}

console.log(`\nInstalling dependencies for ${repoName}...\n`);
const areDepsInstalled = runCommand(installDepsCommand);
if (!areDepsInstalled) {
  console.error("\nDependency installation failed. Try running 'npm install' manually inside the project directory.");
  process.exit(1);
}

console.log(`\n🎉 Congratulations! Your project ${repoName} is ready to go.`);
console.log("To get started, run the following commands:\n");
console.log(`  cd ${repoName}`);
console.log("  npm run dev\n");
