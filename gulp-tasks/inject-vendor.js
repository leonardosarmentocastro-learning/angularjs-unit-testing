'use strict';

/**
 * Reference:
 * https://github.com/taptapship/wiredep
 */
const wiredep = require('wiredep');

/**
 * This task will search on the given .html file for the comment markdowns:
 * <!-- bower:css -->
 * <!-- endbower -->
 *
 * and
 *
 * <!-- bower:js -->
 * <!-- endbower -->
 *
 * And will inject the given bower files between those both markdowns.
 */
module.exports = function() {
  const baseDirectory = 'client';
  const source = `${baseDirectory}/index.html`;

  wiredep({ src: source });
};
