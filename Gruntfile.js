module.exports = function(grunt){
  grunt.initConfig({
    compass: {
      default_css: {
        options: {
          sassDir: 'scss',
          cssDir: 'css',
          require: 'animate-sass'
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-compass");
};
