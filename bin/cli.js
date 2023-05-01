#! /usr/bin/env node

const llog = require('../src/utils/ll-log')
const argv = require('yargs').argv;

llog.big('my tool')
llog.blue('starting the app with these args:', argv)