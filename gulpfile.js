let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');

gulp.task('minify-css', () => {
  return gulp.src('css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
        // .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('out/'));
});


// gulp.task('sass:watch', function () {
//   gulp.watch('css/*.scss', ['sass']);
// });
