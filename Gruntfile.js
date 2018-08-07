module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    cssmin: {
      build: {
        src: './client/dist/style.css',
        dest: './client/dist/build/style.min.css'
      }
    },
    concat: {
      options: {
        separator: '\n/*next file*/\n\n'  //this will be put between conc. files
      },
      dist: {
        src: ['./client/dist/bundle.js'],
        dest: 'client/dist/build/bundle.js'
      }
    },
    uglify: {
      build: {
        src: ['client/dist/bundle.js'], 
        dest: 'client/dist/build/bundle.min.js'
      }
    },
    pkg: grunt.file.readJSON('package.json'),
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');


  // Default task(s).
  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('css', 'cssmin');
};