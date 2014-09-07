module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jsonschema: {
      single:{
        options: {
          file: 'test/files/person.json',
          schema: 'test/schemas/person.json'
        }
      },
      multiple:{
        options: {
          schema: 'test/schemas/person.json',
          files: [
            'test/files/person.json',
            'test/files/person2.json'
          ]
        }
      },
      complex:{
        options: {
          file: 'test/files/person.json',
          schema: {
            main: 'test/schemas/person_ref.json',
            refs: [
              'test/schemas/address.json'
            ]
          }
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-jsonschema');

  // Default task(s).
  grunt.registerTask('default', ['jsonschema']);

};
