var gulp = require('gulp'),
    watch = require('gulp-watch');

var paths = {
    src: './src/',
    dist: './dist/',
    styles: '*.css',
    scripts: '*.js'
};

gulp.task('build', function () {
    return gulp.src([paths.src + paths.scripts, paths.src + paths.styles])
        .pipe(gulp.dest(paths.dist));
});

gulp.task('watch', function () {
    return gulp.src([paths.src + paths.scripts, paths.src + paths.styles])
        .pipe(watch([paths.src + paths.scripts, paths.src + paths.styles]))
        .pipe(gulp.dest(paths.dist));
});

gulp.task('default', ['build', 'watch']);