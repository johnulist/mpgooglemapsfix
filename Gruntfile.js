module.exports = function(grunt) {

    grunt.initConfig({
        compress: {
            main: {
                options: {
                    archive: 'mpgooglemapsfix.zip'
                },
                files: [
                    {src: ['controllers/**'], dest: 'mpgooglemapsfix/', filter: 'isFile'},
                    {src: ['classes/**'], dest: 'mpgooglemapsfix/', filter: 'isFile'},
                    {src: ['docs/**'], dest: 'mpgooglemapsfix/', filter: 'isFile'},
                    {src: ['override/**'], dest: 'mpgooglemapsfix/', filter: 'isFile'},
                    {src: ['logs/**'], dest: 'mpgooglemapsfix/', filter: 'isFile'},
                    {src: ['vendor/**'], dest: 'mpgooglemapsfix/', filter: 'isFile'},
                    {src: ['translations/**'], dest: 'mpgooglemapsfix/', filter: 'isFile'},
                    {src: ['upgrade/**'], dest: 'mpgooglemapsfix/', filter: 'isFile'},
                    {src: ['optionaloverride/**'], dest: 'mpgooglemapsfix/', filter: 'isFile'},
                    {src: ['oldoverride/**'], dest: 'mpgooglemapsfix/', filter: 'isFile'},
                    {src: ['sql/**'], dest: 'mpgooglemapsfix/', filter: 'isFile'},
                    {src: ['lib/**'], dest: 'mpgooglemapsfix/', filter: 'isFile'},
                    {src: ['defaultoverride/**'], dest: 'mpgooglemapsfix/', filter: 'isFile'},
                    {src: ['views/**'], dest: 'mpgooglemapsfix/', filter: 'isFile'},
                    {src: 'config.xml', dest: 'mpgooglemapsfix/'},
                    {src: 'index.php', dest: 'mpgooglemapsfix/'},
                    {src: 'mpgooglemapsfix.php', dest: 'mpgooglemapsfix/'},
                    {src: 'logo.png', dest: 'mpgooglemapsfix/'},
                    {src: 'logo.gif', dest: 'mpgooglemapsfix/'},
                    {src: 'LICENSE.md', dest: 'mpgooglemapsfix/'},
                    {src: 'CONTRIBUTORS.md', dest: 'mpgooglemapsfix/'},
                    {src: 'README.md', dest: 'mpgooglemapsfix/'}
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compress');

    grunt.registerTask('default', ['compress']);
};