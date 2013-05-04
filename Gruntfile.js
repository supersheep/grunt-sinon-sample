module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            all: ['Gruntfile.js', 'src/**/*.js'],
            options: {
                asi: true
            }
        },
        uglify: {
            all: {
                files: [{
                    expand: true,
                    cwd: "src",
                    src: ['**'],
                    dest: 'dest',
                    filter: 'isFile'
                }]
            }
        },
        mocha: {
            browser: ['test/**/*.html'],
            options: {
                reporter: 'Spec',
                run: true,
                ignoreLeaks: false,
                timeout:5000
            }
        },
        mochaTest: {
            files:["test/**/*.test.js"]
        },
        mochaTestConfig:{
            options:{
                reporter: 'Spec'
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-mocha");
    grunt.loadNpmTasks("grunt-mocha-test");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.registerTask("test", ["mocha", "mochaTest"]);
    grunt.registerTask("default", ["jshint", "uglify"]);
}