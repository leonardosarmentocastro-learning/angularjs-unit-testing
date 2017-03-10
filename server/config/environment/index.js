'use strict';

// *** DEPENDENCIES
var path = require('path'),
  _ = require('lodash');

// *** INIT
var configFilesPrefix = "./config.env.";
var all = {

  env: process.env.NODE_ENV || 'development',
  root: path.normalize(__dirname + '/../../..'),
  port: process.env.PORT || 8080,

  mongo: {
    options: {
      db: {
        safe: true
      }
    }
  }
};

// Based on the enviroment, loads the javascript object exported by the configuration file
let configurationFile = require(configFilesPrefix + all.env + '.js');
module.exports = _.merge(all, configurationFile);
