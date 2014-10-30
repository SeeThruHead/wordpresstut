var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('styles', function() {
  return gulp.src('style.scss')
    .pipe(sass({errLogToConsole: true}))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  gulp.watch('*.scss', ['styles']);
});

gulp.task('default', ['styles', 'watch']);