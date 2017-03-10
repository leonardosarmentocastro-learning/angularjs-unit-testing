'use strict';

const nodemon   = require('gulp-nodemon');

/**
 * Use this gulp task for development only.
 */
module.exports = function() {
  let configuration = {
    script: 'bin/run.js', // File name gulp is going to run with the command 'node <file_name>'
    ext: 'js', // File extensions that gulp is going to watch for changes and then automactilly restart our app to tear then up
    env: {
      PORT: 8080 // Remember the "process.env.PORT" on app.js? Gulp will set this for us.
    },
    ignore: ['./node_modules/**'] // Gulp is not going to restart the server when whatever changes happens to the 'node_modules' directory
  };

  nodemon(configuration)
    .on('restart', function() {
      // This is a log function which will be executed whenever a changes occur to our project
      console.log('> RESTARTING THE SERVER TO TEAR UP CHANGES');
    });
};
