#!/usr/bin/env node

const { execSync } = require("child_process")

const runCommand = (command) => {
  try {
    execSync(command, {stdio: "inherit"})
  } catch (error) {
    console.log(`Failed to execute ${command}`, error);
    return false
  }

  return true
}

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/Matthew-Oluwajuwon/vanilla-react-template.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm i`;

console.log(`Clonning he repository with name ${repoName}`);

const checkedOut = runCommand(gitCheckoutCommand);

if (!checkedOut) process.exit(-1)

  console.log(`Installing dependencies for ${repoName}`)
  const installDeps = runCommand(installDepsCommand);

  if (!installDeps) process.exit(-1)

    console.log("Congratulations!!! You're ready, follow the commands below to start");

    console.log("npm run dev")