module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'dist/undead-discord.css': 'src/main.scss'
                }
            }
        },
        cssmin: {
            target: {
                files: [
                    {
                        expand: true,
                        cwd: 'dist',
                        src: ['*.css', '!*.min.css'],
                        dest: 'dist',
                        ext: '.min.css'
                    }
                ]
            }
        },
        clean: {
            build: ['dist/']
        },
        watch: {
            files: '**/*.scss',
            tasks: ['sass', 'cssmin'],
            options: {
                nospawn: true,
                livereload: true
            }
        }
    });

    grunt.registerTask('default', ['sass', 'cssmin']);
    grunt.registerTask('run', ['watch']);
};
