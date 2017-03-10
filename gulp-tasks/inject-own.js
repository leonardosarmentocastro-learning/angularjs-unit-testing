'use strict';

/**
 * Reference:
 * https://github.com/klei/gulp-inject
 */
const gulp    = require('gulp');
const inject  = require('gulp-inject');

/**
 * This task will search on the given .html file for the comment markdowns:
 * <!-- inject:css -->
 * <!-- endbower -->
 *
 * and
 *
 * <!-- inject:js -->
 * <!-- endbower -->
 *
 * And will inject the files between those both markdowns.
 */
module.exports = function() {
  const baseDirectory = 'client';
  const sources = gulp.src([
    `${baseDirectory}/app/**/*.js`,
    `${baseDirectory}/static/**/*.css`
  ], { read: false });
  const target = gulp.src(`${baseDirectory}/index.html`);

  /**
   * The "{ relative: true }" is important in order to inject sources with the correct path on the target file
   */
  return target.pipe(inject(sources, { relative: true }))
    .pipe(gulp.dest(baseDirectory));
};
