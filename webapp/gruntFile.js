module.exports = function (grunt) {

   grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-clean');
   grunt.loadNpmTasks('grunt-contrib-copy');
   grunt.loadNpmTasks('grunt-contrib-compress');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-recess');
   grunt.loadNpmTasks('grunt-html2js');

   // Default task.
   grunt.registerTask('default', ['jshint','build']);
   grunt.registerTask('build', ['clean','html2js','concat','uglify','recess:build', 'recess:min','copy:assets', 'compress']);
   grunt.registerTask('refresh', ['clean','html2js','concat','recess:build','recess:min','copy:assets']);
   grunt.registerTask('release', ['clean','html2js','uglify','jshint','concat:index', 'recess:min','copy:assets', 'compress']);
   grunt.registerTask('test-watch', []);

   // Print a timestamp (useful for when watching)
   grunt.registerTask('timestamp', function() {
      grunt.log.subhead(Date());
   });

   // Project configuration.
   grunt.initConfig({
      distdir: 'dist',
      pkg: grunt.file.readJSON('package.json'),
      banner:
         '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
         '<%= pkg.homepage ? " * " + pkg.homepage + "\\n" : "" %>' +
         ' * Copyright (c) <%= grunt.template.today("yyyy-mm-dd hh:mm") %> <%= pkg.author %>;\n' +
         ' * Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %>\n */\n',
      src: {
         js: [
            'src/js/*.js'],
         jsTpl: ['<%= distdir %>/templates/**/*.js'],
         specs: ['test/**/*.spec.js'],
         scenarios: ['test/**/*.scenario.js'],
         html: ['src/index.html','src/login.html'],
         tpl: ['src/templates/**/*.tpl.html'],
         css: ['src/css'],
         less: ['src/less/stylesheet.less'], // recess:build doesn't accept ** in its file patterns
         lessWatch: ['src/less/**/*.less']
      },
      clean: ['<%= distdir %>/*'],
      copy: {
         assets: {
            files: [{ dest: '<%= distdir %>/assets', src : '**', expand: true, cwd: 'src/assets/' },
               { dest: '<%= distdir %>/fonts', src : '**', expand: true, cwd: 'src/fonts/' },
               { dest: '<%= distdir %>/templates', src : '**', expand: true, cwd: 'src/templates/' }]
         }
      },
      html2js: {
         app: {
            options: {
               base: 'src/templates'
            },
            src: ['<%= src.tpl %>'],
            dest: '<%= distdir %>/templates/templates.js',
            module: 'templates'
         },
         dev: {
            options: {
               base: 'src/templates'
            },
            src: ['<%= src.tpl %>'],
            dest: 'src/js/templates/templates.js',
            module: 'templates'
         }
      },
      concat:{
         dist:{
            options: {
               banner: "<%= banner %>"
            },
            src:['<%= src.js %>', '<%= src.jsTpl %>'],
            dest:'<%= distdir %>/js/<%= pkg.name %>.js'
         },
         dev:{
            options: {},
            src:['<%= src.js %>', '<%= src.jsTpl %>'],
            dest:'src/js/<%= pkg.name %>.js'
         }
      },
      uglify: {
         dist:{
            options: {
               banner: "<%= banner %>"
            },
            src:['<%= src.js %>' ,'<%= src.jsTpl %>'],
            dest:'<%= distdir %>/js/<%= pkg.name %>.min.js'
         }
      },
      recess: {
         build: {
            files: {
               '<%= distdir %>/css/<%= pkg.name %>.css': ['<%= src.less %>'],
               '<%= src.css %>/<%= pkg.name %>.css': ['<%= src.less %>']
            },
            options: {
               compile: true
            }
         },
         min: {
            files: {
               '<%= distdir %>/css/<%= pkg.name %>.min.css': ['<%= src.less %>'],
               '<%= src.css %>/<%= pkg.name %>.min.css': ['<%= src.less %>']
            },
            options: {
               compress: true
            }
         }
      },
      compress:{
         main: {
            options: {
               archive: 'integra-web.zip'
            },
            files: [
               {expand: true, cwd: '<%= distdir %>', src: ['**'], dest: ''}
            ]
         }
      },
      watch:{
         all: {
            //files:['<%= src.js %>', '<%= src.specs %>', '<%= src.lessWatch %>', '<%= src.tpl %>'],
            files:['<%= src.specs %>', '<%= src.lessWatch %>', '<%= src.tpl %>'],
            tasks:['recess:build','recess:min','html2js:dev','timestamp']
         },
         build: {
            //files:['<%= src.js %>', '<%= src.specs %>', '<%= src.lessWatch %>', '<%= src.tpl %>'],
            files:['<%= src.specs %>', '<%= src.lessWatch %>', '<%= src.tpl %>'],
            tasks:['recess:build','recess:min','html2js:dev','timestamp']
            //tasks:['build','timestamp']
         }
      },
      jshint:{
         files:['gruntFile.js', '<%= src.js %>', '<%= src.jsTpl %>', '<%= src.specs %>', '<%= src.scenarios %>'],
         options:{
            curly:true,
            eqeqeq:true,
            immed:true,
            latedef:true,
            newcap:true,
            noarg:true,
            sub:true,
            boss:true,
            eqnull:true,
            globals:{}
         }
      }
   });

};