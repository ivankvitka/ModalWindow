var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	plumber = require("gulp-plumber");

gulp.task("sass", function () {
	gulp
		.src("app/scss/**/*.scss")
		.pipe(plumber())
		.pipe(sass({outputStyle: "expanded"}))
		.pipe(gulp.dest("app/css"))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function () {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('watch', ['browser-sync', 'sass'], function () {
	gulp.watch('app/scss/**/*.scss', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
});

gulp.task('build', function () {

	gulp.src([
		'app/css/*.css',
	])
		.pipe(gulp.dest('dest/css'))
		gulp.src('app/*.html')
		.pipe(gulp.dest('dest'));
});