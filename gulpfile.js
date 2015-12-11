var gulp = require('gulp'),
sass = require('gulp-sass'),
livereload = require('gulp-livereload'),
autoprefixer = require('gulp-autoprefixer'),
minifyCss = require('gulp-minify-css'),
jsmin = require('gulp-jsmin'),
rename = require('gulp-rename'),
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
    .pipe(minifyCss())
    .pipe(gulp.dest('./css'))

    .pipe(connect.reload());
});

gulp.task('js', function () {
  gulp.src('js/*.js')
    .pipe(jsmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('js/'));
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
gulp.task('default', ['connect', 'js', 'html', 'sass', 'sass:watch']);