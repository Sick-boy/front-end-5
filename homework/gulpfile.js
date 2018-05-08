var gulp  = require('gulp'),
    order = require('gulp-order'),
    sass  = require('gulp-sass');
    imgm  = require('gulp-imagemin')


gulp.task('sass', function() {
    return gulp.src('src/sass/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('src/css'))
});

gulp.task('watch', function(){
  gulp.watch('src/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['imgm']);

gulp.task('imgm', () =>
    gulp.src('src/img/*')
        .pipe(imgm())
        .pipe(gulp.dest('dist/img'))
);

/*
Template


gulp.task('taskname', function() {
    console.log('----', 'My first task!');
});

*/
