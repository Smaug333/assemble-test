module.exports = function (grunt) {
  'use strict';

  require('time-grunt')(grunt);
  grunt.initConfig({
    // Task configuration.
    assemble: {
      options: {
          flatten: true,
          //assets: 'assets',
          helpers: [
            'handlebars-helpers',
            'handlebars-helper-include',
            'templates/helpers/*.js', 
          ],
          partials: ['templates/partials/**/*.hbs'],
          layout: ['templates/layouts/default.hbs'],
          data: ['templates/data/*.{json,yml}'],
          chicken: '<%= chicken %>'
      },
      pages: {
          src: ['templates/pages/**/*.hbs'],
          dest: 'dist/index.html'
      },
      // docs: {
      //     src: ['templates/docs/**/*.hbs'],
      //     dest: 'dist/docs'
      // }
    },

    'http-server': {
      root: '../dist/',
      port: 8082,
      host: "0.0.0.0",
      cache: 0,
      showDir: true,
      autoIndex: true,
      ext: 'html',
      runInBackground: true,
    },

    watch: {
      all: {    
        
        files: ['**/*.hbs', '!node_modules/', '!dist/', '!Gruntfile.js', '!package.json', '{hbs}'],
        tasks: ['assemble', 'notify'],
        options: {
          spawn: false,
          livereload: true
        }
      }
    },

    notify: {
      watch: {
        options: {
          title: "DONE!",
          message: "time to reload",

        }
      }
    }

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-http-server');
  grunt.loadNpmTasks('grunt-assemble');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-notify');
  // Default task.
  grunt.registerTask('default', ['assemble', 'http-server']);

};
