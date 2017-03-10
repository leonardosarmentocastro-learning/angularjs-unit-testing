'use strict';

/**
 * Reference
 * https://github.com/gulpjs/gulp/blob/master/docs/recipes/server-with-livereload-and-css-injection.md
 */
const gulp        = require('gulp');
const browserSync = require('browser-sync');
const reload      = browserSync.reload;

/**
 * Declare the file blob to be watched by gulp
 */
const files = [
  '*.html',
  'app/**/*.js',
  'app/**/*.html',
  'static/**/*.css'
];
module.exports = function() {
  const baseDirectory = 'client';
  const options = {
    server: {
      baseDir: baseDirectory
    }
  };

  browserSync(options);

  gulp.watch(files, { cwd: baseDirectory }, reload);
};
