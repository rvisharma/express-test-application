module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      options: {
        interrupt: true,
        livereload: true,
      },
      partials:{
          files:['public/**/*.html']
      },
      css: {
        files: ['public/scss/*.scss'],
        tasks: ['sass']
      },
      ts:{
          files: ["public/ts/*.ts"],
          tasks:["ts"]
      }
    },
    
    ts: {
      options:{
          comments: true, //preserves comments in output.
          inlineSourceMap: true,
          inlineSources: true, // check this out
          noEmitOnError: true,
          //fast:"never"
      },
      dev : {
        src: ["public/ts/references.ts","public/ts/**/*.ts"],
        reference:"public/ts/references.ts",
        outDir: "public/js",
        //watch:"."
      }
    },
    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'public/css/style.css': 'public/scss/style.scss'
            }
        }
    }
  });

  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks('grunt-contrib-watch');
 // grunt.registerTask('ts', ['ts']);
  grunt.registerTask('default', ['ts']);

};