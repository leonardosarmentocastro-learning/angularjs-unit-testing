'use strict';

let Router = (function () {
  function Router(app) {
    this.app = app;
  }

  Router.prototype.init = function () {
    let self = this;

    /** Returns not found for "bower_components" and "assets"  */
    self.app.route('/:url(app|bower_components|assets)/*')
      .get(function (req, res) {
        res.status(404).end();
      });

    /** Redirect every route to the AngularJS "index.html" */
    self.app.route('/')
      .get(function (req, res) {
        res.sendFile(
          self.app.get('clientPath') + '/index.html',
          { root: config.root }
        );
      });
  }

  return Router;
})();

module.exports = Router;
