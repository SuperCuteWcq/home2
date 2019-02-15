var gulp=require('gulp');
var concat=require('gulp-concat');
var clean=require('gulp-clean-css');
gulp.task('concat',function(){
    return gulp.src(['./src/css/*.css', '!./src/css/swiper.css'])
    .pipe(concat('all.css'))
    .pipe(clean())
    .pipe(gulp.dest('./src/css'))
})
