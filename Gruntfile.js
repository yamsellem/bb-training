module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      scripts: {
        files: ['js/**/*.js', 'tests/**/*.js'],
        tasks: ['jshint', 'server:3001', 'mocha'],
        options: {
            interrupt: true
        }
      },
    },
    jshint: {
      all: ['Gruntfile.js', 'test/**/*.js'],
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        },
      }
    },
    requirejs: {
      compile: {
        options: {
          name: "main",
          baseUrl: "js",
          mainConfigFile: "js/main.js",
          out: "dist/optimized.js"
        }
      }
    },
    mocha: {
      all: ['tests/index.html']
    }
  });


  require('load-grunt-tasks')(grunt);

  grunt.registerTask('server', 'Start a custom web server', function(target) {
    var port = target || 3000;
    grunt.log.writeln('Started web server on port ' + port);
    require('./proxy.js').listen(port);
  });

  grunt.registerTask('default', ['server', 'watch']);
  grunt.registerTask('test', ['server:3001', 'mocha']);
};