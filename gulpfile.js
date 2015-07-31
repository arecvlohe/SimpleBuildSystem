var gulp = require('gulp'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass');

  gulp.task('jade', function() {
    gulp.src('./*.jade')
      .pipe(jade())
      .pipe(gulp.dest('./'));
  });

  gulp.task('sass', function() {
    gulp.src('./main.sass')
      .pipe(sass())
      .pipe(gulp.dest('./'));
  });

  gulp.task('watch', function() {
    gulp.watch('./*.jade', ['jade']);
    gulp.watch('./*.sass', ['sass']);
  });

  gulp.task('default', ['watch', 'jade', 'sass']);
