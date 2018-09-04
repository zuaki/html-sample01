// 面倒なので普通のjsで書く。
var gulp = require('gulp');

/**
 * PUG
 */
var pug = require('gulp-pug');

gulp.task('pug', () => {
  return gulp.src(['./pug/*.pug'])
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('./html/'));
});

/** 
 * SASS
 */
var sass = require('gulp-sass');

gulp.task('sass', function(){
  gulp.src('./sass/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('./css/'));
});