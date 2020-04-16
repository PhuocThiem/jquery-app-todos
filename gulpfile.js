var gulp = require('gulp')

var sass = require('gulp-sass')

var browerSync = require('browser-sync').create();

gulp.task('hello', function(done){
  console.log('hello man')
  done();
})

gulp.task('browerSync', function(){
  browerSync.init({
    server: {
      baseDir: 'app'
    }
  })
})

//compile the sass file into css folder

gulp.task('sass', function(){
  return gulp.src('./app/scss/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./app/css'))
  .pipe(browerSync.reload({
    stream: true
  }))
})


//watch task has to be a function

gulp.task('watch', ['browerSync','sass'], function(){
  gulp.watch('./app/scss/*.scss', ['sass']);
  gulp.watch('./app/**/*.html', browerSync.reload);
  gulp.watch('./app/js/**/*.js', browerSync.reload);

  // Other watchers
})

