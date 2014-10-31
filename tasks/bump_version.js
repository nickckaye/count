module.exports = function (grunt) {
  grunt.registerTask('bump_version', function (version) {
    if (!version || version.split('.').length !== 3) {
      grunt.fail.fatal('malformed version. Use\n\n    grunt bump_version:1.2.3')
    }

    grunt.config('string-replace.count-js', {
      files: {'count.js': 'count.js'},
      options: {
        replacements: [
          {
            pattern: /\/\/! version : .*/,
            replacement: '//! version : ' + version
          },
          {
            pattern: /VERSION = '.*'/,
            replacement: "VERSION = '" + version + "'"
          }
        ]
      }
    });

    grunt.config('string-replace.package-json', {
      files: {'package.json': 'package.json'},
      options: {
        replacements: [
          {
            pattern: /"version": .*/,
            replacement: '"version": "' + version + '",'
          }
        ]
      }
    });

    grunt.config('string-replace.bower-json', {
      files: {'bower.json': 'bower.json'},
      options: {
        replacements: [
          {
            pattern: /"version": .*/,
            replacement: '"version": "' + version + '",'
          }
        ]
      }
    });

    grunt.config('string-replace.component-json', {
      files: {'component.json': 'component.json'},
      options: {
        replacements: [
          {
            pattern: /"version": .*/,
            replacement: '"version": "' + version + '",'
          }
        ]
      }
    });

    grunt.task.run([
      'string-replace:count-js',
      'string-replace:package-json',
      'string-replace:bower-json',
      'string-replace:component-json'
    ]);
  });
};
