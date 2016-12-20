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

    watch: {
      all: {
        files: ['**/*.*'],
        tasks: ['assemble', 'notify'],
        options: {
          spawn: false
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
  grunt.loadNpmTasks('grunt-assemble');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-notify');
  // Default task.
  grunt.registerTask('default', ['assemble']);

};
