#! /usr/bin/env node

'use strict';

require('coffee-script/register');
var game = require('./lib/game');

var userArgs = process.argv;
var searchParam = userArgs[2];

if (userArgs.indexOf('-h') !== -1 || userArgs.indexOf('--help') !== -1 || searchParam === undefined) {
  return console.log('cli help');
}

if (userArgs.indexOf('-v') !== -1 || userArgs.indexOf('--version') !== -1) {
  return console.log(require('./package').version);
}

process.chdir((function () {
  var pathArr = process.argv[1].split('/');
  pathArr.splice(-1,1);
  return pathArr.join('/');} )());

switch(searchParam) {
  case 'start':
    game();
    break;
}
