var gulp = require("gulp")
var sass = require("gulp-sass")
var autoprefixer = require("gulp-autoprefixer")
var sourcemaps = require("gulp-sourcemaps")

gulp.task("default", ["css", "copy"])

gulp.task("css", () => {
  gulp.src("src/css/*.scss")
    .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
      .pipe(autoprefixer())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dest/"))
})

gulp.task("copy", () => {
  gulp.src(["src/*.js", "src/*.html"])
    .pipe(gulp.dest("dest/"))
})

gulp.task("watch", () => {
  gulp.watch("src/**/*.scss", ["css"])
  gulp.watch(["src/**/*.html", "src/**/*.js"], ["copy"])
})
