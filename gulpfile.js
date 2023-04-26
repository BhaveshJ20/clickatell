const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync').create();
//Compile scss files  into css files
function scss() {
  return gulp.src('assets/css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    // .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('assets/css/'))
    .pipe(browserSync.stream())
};
// Start webserver server and watching files
function serve() {
  browserSync.init({
      open: true,
      server: ''
  });
  gulp.watch('assets/css/**/*.scss', gulp.series(['scss']));
  gulp.watch('*.html').on('change', browserSync.reload);
}
exports.scss = scss;
exports.serve = gulp.parallel(scss, serve);
exports.default = gulp.series(scss);