var gulp = require('gulp');

gulp.task('lint', require('./gulp/eslint'));

gulp.task('analyze',['lint']);