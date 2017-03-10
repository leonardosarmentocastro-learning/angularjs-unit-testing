'use strict';

const gulp              = require('gulp');
const livereload        = require('./gulp-tasks/livereload');
const injectOwn         = require('./gulp-tasks/inject-own');
const injectVendor      = require('./gulp-tasks/inject-vendor');
const serve             = require('./gulp-tasks/serve');


gulp.task('default', ['inject-own', 'inject-vendor', 'livereload']);
gulp.task('livereload', livereload);
gulp.task('inject-own', injectOwn);
gulp.task('inject-vendor', injectVendor);
gulp.task('serve', serve);
