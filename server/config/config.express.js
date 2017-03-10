'use strict';

const express       = require('express');
const compression   = require('compression');
const morgan        = require('morgan');
const path          = require('path');
const config        = require('./environment');

let ExpressConfiguration = (function () {
  function ExpressConfiguration(app) {
    this.app = app;
  }

  ExpressConfiguration.prototype.init = function () {
    let env = config.env;

    /** Client configuration */
    this.app.set('view engine', 'html');
    this.app.use(express.static(path.join(config.root, 'client')));
    this.app.set('clientPath', 'client');

    /** Development configuration */
    this.app.use(compression());
    this.app.use(morgan('dev'));

    /** CORS configuration */
    this.app.use( function(req, res, next) {
      // To enable CORS, this "app.use" must come before ALL requisitions you want to enable CORS
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE");
      res.header("Content-type", "application/json");
      res.header("Access-Control-Max-Age", "3600");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, X-Access-Token, X-Key, Content-Type, Accept");
      next();
    });

    if (env === 'development' || env === 'test') {
      this.app.use(require('errorhandler')());
    }
  };

  return ExpressConfiguration;
})();

module.exports = ExpressConfiguration;
