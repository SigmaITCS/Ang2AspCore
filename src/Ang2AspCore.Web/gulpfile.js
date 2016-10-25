var gulp = require('gulp');

gulp.task("npmTasks", function () {
    var libs = {
        "@angular": '@angular/**/*.*',
        "systemjs": 'systemjs/**/*.*',
        "rxjs": 'rxjs/**/*.*',
        "core-js": "core-js/**/*.*",
        "zone.js": "zone.js/**/*.*",
        "reflect-metadata": "reflect-metadata/**/*.*",
        "bootstrap": "bootstrap/**/*.*",
        "jquery": "jquery/**/*.*",
        "jquery-validation": "jquery-validation/**/*.*",
        "jquery-validation-unobtrusive": "jquery-validation-unobtrusive/**/*.*"
    };

    for (var name in libs) {
        gulp.src("node_modules/" + libs[name])
          .pipe(gulp.dest("wwwroot/node_modules/" + name));
    }
});