var gulp  = require('gulp'),
    order = require('gulp-order'),
    sass  = require('gulp-sass');


gulp.task('sass', function() {
    return gulp.src('src/sass/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('src/css'))
});

gulp.task('watch', function(){
  gulp.watch('src/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['watch']);



/*
Template


gulp.task('taskname', function() {
    console.log('----', 'My first task!');
});

*/
