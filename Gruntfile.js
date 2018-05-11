module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-file-append');
    grunt.loadNpmTasks('grunt-sass');

    var pkg = require('./package.json');

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
                        src: ['*.css', '!*.min.css', '!*.theme.css'],
                        dest: 'dist',
                        ext: '.min.css'
                    }
                ]
            }
        },
        file_append: {
            default_options: {
                files: [
                    {
                        append: '',
                        prepend: '//META\
{"name":"Undead Discord",\
"description":"'+ pkg.description + '"\
"author":"'+ pkg.author.name + '"\
"version":"'+ pkg.version + '"}*//\n\n',
                        input: 'dist/undead-discord.min.css',
                        output: 'dist/undead-discord.min.theme.css'
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

    grunt.registerTask('build', ['clean', 'sass', 'cssmin', 'file_append']);
    grunt.registerTask('default', ['watch']);
};
