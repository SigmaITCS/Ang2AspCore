var gulp = require('gulp');

gulp.task("npmTasks", function () {
    var libs = {
        "@angular": '@angular/**/*.*',
        "systemjs": 'systemjs/dist/*.*',
        "rxjs": 'rxjs/**/*.*',
        "core-js": "core-js/client/*.js",
        "zone.js": "zone.js/dist/*.js",
        "reflect-metadata": "reflect-metadata/*.js"
    };

    for (var name in libs) {
        gulp.src("node_modules/" + libs[name])
          .pipe(gulp.dest("wwwroot/node_modules/" + name));
    }
});