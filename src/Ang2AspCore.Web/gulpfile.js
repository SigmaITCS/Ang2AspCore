var gulp = require('gulp');
var clean = require('gulp-clean');
var destPath = './wwwroot/lib';

gulp.task('clean', function () {
    gulp.src('./wwwroot/app', { read: false })
        .pipe(clean());

    return gulp.src('./wwwroot/node_modules', { read: false })
        .pipe(clean());
});

gulp.task('copyNodeModules', function (done) {
    gulp.src([
      'node_modules/@angular/common/bundles/*.*'
    ]).pipe(gulp.dest('./wwwroot/node_modules/@angular/common/bundles'));

    gulp.src([
      'node_modules/rxjs/**'
    ]).pipe(gulp.dest('./wwwroot/libs/rxjs'));


});