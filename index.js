'use strict';

const fs = require('fs');
const path = require('path');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const colors = require('colors/safe');
require('dotenv').config();

const homeDir = process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'];
const awsCredPath = path.join(homeDir, '.aws/credentials');
const methods = {};


async function npmAddUser() {
  const {error, stdout, stderr} = await exec('yarn co:login');

  if (error) {
    console.error(`AWS login: error ${error}`);
    return;
  }
  if (stderr) {
    console.error('AWS login: stderr', stderr);
  }
  console.log(`AWS login: stdout ${stdout}`);
}


async function npmPublish() {
  const {error, stdout, stderr} = await exec('npm publish');

  if (error) {
    console.error(`NPM publish: error ${error}`);
    return;
  }
  if (stderr) {
    console.error('NPM publish: stderr', stderr);
  }

  console.log(`NPM publish: stdout ${stdout}`);
}


// mode = "DEV" | "PROD"
methods.changeAwsCredentials = function (mode) {
  if (!mode) {
    console.log(colors.grey('Mode is required'));
    return;
  }

  const credentials = {
    aws_access_key_id: process.env[mode + '_aws_access_key_id'],
    aws_secret_access_key: process.env[mode + '_aws_secret_access_key'],
  };
  const awsCredData = [
    '[default]',
    ...Object.entries(credentials).map(([key, value]) => `${key} = ${value}`)
  ];

  fs.writeFileSync(awsCredPath, awsCredData.join('\n'));

  console.log(colors.grey('AWS configuration was successfully changed to'), colors.bgYellow.black(mode));
}


methods.publish = async function (mode) {
  console.log(colors.grey('Publish started with'), colors.bgYellow.black(mode), 'mode');
  methods.changeAwsCredentials(mode);
  await npmAddUser();
  await npmPublish();
}


// exec given command
if (methods[process.argv[2]]) {
  methods[process.argv[2]](...process.argv.slice(3));
} else {
  console.log('Available commands:', Object.keys(methods).join(', '));
}


// methods.upVersion = function () {
//   const packageJson = fs.readFileSync('./package.json', 'utf8');
//   const packageFile = JSON.parse(packageJson);
//   const newVersion = packageFile.version.split('.');
//   const minorVersion = newVersion.splice(2);
//
//   newVersion.push(`${+minorVersion + 1}`);
//   packageFile.version = newVersion.join('.');
//
//   fs.writeFileSync('./package.json', JSON.stringify(packageFile, null, 2));
// }
