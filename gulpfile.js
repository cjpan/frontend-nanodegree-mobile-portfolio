var gulp = require('gulp');
var minifyHTML = require('gulp-minify-html');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');

gulp.task('html', function () {
	gulp.src('./*.html')
	.pipe(minifyHTML({
		comments: true,
		spare: true
	}))
	.pipe(gulp.dest('dist'));

	gulp.src('views/*.html')
	.pipe(minifyHTML({
		comments: true,
		spare: true
	}))
	.pipe(gulp.dest('dist/views'));
});

gulp.task('script', function () {
	gulp.src('js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));

	gulp.src('views/js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('dist/views/js'));
});

gulp.task('css', function () {
	gulp.src('css/*.css')
	.pipe(minifyCSS())
	.pipe(gulp.dest('dist/css'));

	gulp.src('views/css/*.css')
	.pipe(minifyCSS())
	.pipe(gulp.dest('dist/views/css'));
});

gulp.task('images', function() {
	gulp.src('img/*.*')
	.pipe(imagemin({
		progressive: true
	}))
	.pipe(gulp.dest('dist/img'));
	
	gulp.src('views/images/*.*')
	.pipe(imagemin({
		progressive: true
	}))
	.pipe(gulp.dest('dist/views/images'));
});

gulp.task('auto', function() {
	gulp.watch('./*.html', ['html']);
	gulp.watch('views/*.html', ['html']);
	gulp.watch('js/*.js', ['script']);
	gulp.watch('views/js/*.js', ['script']);
	gulp.watch('css/*.css', ['css']);
	gulp.watch('views/css/*.css', ['css']);
	gulp.watch('img/*.*', ['images']);
	gulp.watch('views/images/*.*', ['images']);

});

gulp.task('default', ['html', 'script', 'css', 'images', 'auto']);
