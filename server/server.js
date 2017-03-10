'use strict';

const express               = require('express');
const chalk                 = require('chalk');
const http                  = require('http');
const config                = require('./config/environment');
const ExpressConfiguration  = require('./config/config.express');
const Router                = require('./router');

let Server = (function () {
  function Server() {
    this.app = {};
    this.server = {};
  }

  Server.prototype.init = function () {
    this.app = express();
    this.server = http.createServer(this.app);

    this.loadConfiguration();
    this.loadRoutes();
  };

  Server.prototype.loadConfiguration = function () {
    let expressConfiguration = new ExpressConfiguration(this.app);
    expressConfiguration.init();
  };

  Server.prototype.loadRoutes = function() {
    let router = new Router(this.app);
    router.init();
  };

  Server.prototype.run = function () {
    var self = this;
    this.server.listen(config.port, config.ip, function () {
      console.log(
        chalk.red('\nServer listening on port ')
        + chalk.yellow('%d')
        + chalk.red(', in ')
        + chalk.yellow('%s')
        + chalk.red(' mode.\n'),
        config.port,
        self.app.get('env')
      );

      if (config.env === 'development') {
        require('ripe').ready();
      }
    });
  };

  return Server;
})();

module.exports = Server;
