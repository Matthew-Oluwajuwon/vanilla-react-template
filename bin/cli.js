#!/usr/bin/env node

import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import inquirer from "inquirer";
import chalk from "chalk";

const runCommand = (command) => {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (error) {
    console.error(`Failed to execute ${command}`, error);
    return false;
  }
  return true;
};

// Function to get app name from user if not provided
const getAppName = async () => {
  const { appName } = await inquirer.prompt([
    {
      type: "input",
      name: "appName",
      message: "Enter your app name:",
      default: "my-app",
    },
  ]);
  return appName;
};

// Function to get port number from user
const getPortNumber = async () => {
  const { portNo } = await inquirer.prompt([
    {
      type: "input",
      name: "portNo",
      message: "Enter your port number:",
      default: "8001",
    },
  ]);
  return portNo;
};

const main = async () => {
  // Get repository name either from args or by asking the user
  const repoName = process.argv[2] || (await getAppName());
  const gitCheckoutCommand = `git clone --depth 1 https://github.com/Matthew-Oluwajuwon/vanilla-react-template.git ${repoName}`;
  const installDepsCommand = `cd ${repoName} && npm install`;

  console.log(`Cloning the repository with name ${repoName}...`);
  const checkedOut = runCommand(gitCheckoutCommand);
  if (!checkedOut) process.exit(-1);

  console.log(chalk.blue(`Installing dependencies for ${repoName}...`));
  const installedDeps = runCommand(installDepsCommand);
  if (!installedDeps) process.exit(-1);

  // Update package.json name
  const packageJsonPath = path.join(repoName, "package.json");
  const viteConfigPath = path.join(repoName, "vite.config.ts");

  try {
    // Update package.json with the app name
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
    packageJson.name = repoName;
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log(chalk.green(`Updated package.json name to "${repoName}"`));

    // Update vite.config.ts with the selected port
    const portNumber = await getPortNumber();
    let viteConfig = fs.readFileSync(viteConfigPath, "utf8");
    viteConfig = viteConfig.replace(/port:\s*\d+/, `port: ${portNumber}`);
    fs.writeFileSync(viteConfigPath, viteConfig);
    console.log(chalk.green(`Updated Vite server port to "${portNumber}"`));
  } catch (error) {
    console.error("Failed to update package.json or vite.config.ts", error);
  }

  console.log(
    chalk.green(
      "Congratulations! You're ready to start. Run the commands below to begin:"
    )
  );
  console.log(chalk.green(`\n  cd ${repoName}`));
  console.log(chalk.green("  npm run dev"));
};

main();
