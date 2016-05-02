/* ==================================
        Dependencies Loading
   ================================== */

var gulp         = require('gulp'),
    gutil        = require('gulp-util'),
    autoprefixer = require('gulp-autoprefixer'),
    sass         = require('gulp-sass'),
    sourcemaps   = require('gulp-sourcemaps'),
    browserify   = require('browserify'),
    source       = require('vinyl-source-stream')
    browserSync  = require('browser-sync').create();

/* Settings */
var config = {
    src : {
        html    : ['./src/**/*.html',
                    './src/*.html'],
        styles  : './src/styles/**/*.{scss, sass}',
        scripts : './src/app/**/*.js',
        images  : './src/images/**/*.*',
        vendor  : './src/vendor/**/*'
    },
    dest : {
        html   : './dest/',
        css    : './dest/css/',
        js     : './dest/app/',
        img    : './dest/img/',
        vendor : './dest/vendor/',
        maps   : './dest/css/maps/'
    }
},
  sassdocOptions = {
    dest: './dest/sassdoc/'
  }

/* ==================================
        Tasks
   ================================== */

/* Styles */
gulp.task( 'styles', function() {
    gulp.src( config.src.styles )
        .pipe(sourcemaps.init())
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(autoprefixer({ browsers: ['last 3 versions'] }))
        .pipe(sourcemaps.write(config.dest.maps))
        .pipe(gulp.dest(config.dest.css))
        .pipe(browserSync.stream());

        console.log(config.dest.css);
});

/* Generating Docs for SASS */
gulp.task( 'sassdoc', function () {
    gulp.src( config.src.styles )
        .pipe( sassdoc( sassdocOptions ) )
        .resume();
});

gulp.task( 'html', function() {
    gulp.src( config.src.html )
        .pipe( gulp.dest( config.dest.html ) )
        .pipe(browserSync.stream());
});

gulp.task( 'images', function() {
    gulp.src( config.src.images )
        .pipe( gulp.dest( config.dest.img ) );
});

gulp.task( 'vendor', function() {
    gulp.src( config.src.vendor )
        .pipe( gulp.dest(config.dest.vendor) );
});

/* Browserifying */

gulp.task('browserify', function() {
    // Grabs the app.js file
    browserify('./src/app/main.js')
        // bundles it and creates a file called main.js
        .bundle()
        .on('error', function(e) {
            gutil.log(e);
        })
        .pipe(source('main.js'))
        // saves it to the dist
        .pipe(gulp.dest(config.dest.js))
        .pipe(browserSync.stream());
});


gulp.task('serve', ['styles', 'html', 'browserify'], function() {

    browserSync.init({
        server: "./dest",
        port: 7000
    });

    gulp.watch(config.src.styles, ['styles']);
    gulp.watch(config.src.html, ['html']);
    gulp.watch(config.src.scripts, ['browserify']);
});

/* ==================================
        "To Production" Tasks
   ================================== */

gulp.task('prod', ['sassdoc'], function () {
    gulp.src(config.src.styles)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({ browsers: ['last 3 versions'] }))
        .pipe(gulp.dest(config.dest.css));
});


gulp.task('watch', function() {
  gulp.watch([gulp.src.styles], ['styles']);
  gulp.watch([gulp.src.scripts], ['browserify']);
  gulp.watch([gulp.src.html], ['html']);
});

gulp.task('default', ['html', 'browserify', 'styles', 'images', 'vendor', 'serve']);
