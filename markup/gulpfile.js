var gulp = require('gulp'),
sass = require('gulp-sass'),
livereload = require('gulp-livereload'),
autoprefixer = require('gulp-autoprefixer'),
connect = require ('gulp-connect');


//server connect
gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true
  });
});
 
gulp.task('sass', function () {
  gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions', 'ie10'))
    .pipe(gulp.dest('./css'))

    .pipe(connect.reload());
});

gulp.task('html', function(){
	gulp.src('index.html')
	.pipe(connect.reload());
	
})
 
gulp.task('sass:watch', function () {
  gulp.watch('**/*.scss', ['sass'])
  gulp.watch('*.html', ['html']);
})

//default
gulp.task('default', ['connect', 'html', 'sass', 'sass:watch']);