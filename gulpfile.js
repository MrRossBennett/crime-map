/*----------------------------------------------------*\
     GULPFILE
\*----------------------------------------------------*/

var $                  = require('gulp-load-plugins')();
var source             = require('vinyl-source-stream');
var gulp               = require('gulp');
var gutil              = require('gulp-util');
var browserify         = require('browserify');
var babelify           = require('babelify');
var watchify           = require('watchify');
var notify             = require('gulp-notify');
var autoprefixer       = require('autoprefixer');
var cssnano            = require('cssnano');

var browserSync        = require('browser-sync');
var reload             = browserSync.reload;

// Base Paths
var basePaths = {
    src: 'assets/',
    dest: 'public/'
};

/*----------------------------------------------------*\
     SASS - LIBSASS COMPILE, MINIFY, OUTPUT
\*----------------------------------------------------*/
gulp.task('styles', function() {
    return gulp.src(basePaths.src + 'scss/**/*.scss')
    .pipe($.sass({
        includePaths: ['scss']
    }))
    .pipe($.postcss([
        autoprefixer({ browsers: ['last 4 versions', 'not ie <= 8'] }),
        cssnano({'zindex': false})
    ]))
    .pipe(gulp.dest(basePaths.dest + '_css'))
    .pipe(reload({stream:true}))
  });

/*-----------------------------------------*\
    BROWSER SYNC
\*-----------------------------------------*/
gulp.task('browser-sync', function() {
    browserSync({
        server : {},
        ghostMode: false
    });
});

function handleErrors() {
    var args = Array.prototype.slice.call(arguments);

    notify.onError({
        title: 'Compile Error',
        message: '<%= error.message %>'
    }).apply(this, args);

    this.emit('end'); // Keep Gulp from hanging on this task
}

function buildScript(file, watch) {

    var props = {
        entries: ['assets/js/' + file],
        debug : true,
        transform:  [babelify.configure({stage : 0 })]
    };

    // watchify() if watch requested, otherwise run browserify() once
    var bundler = watch ? watchify(browserify(props)) : browserify(props);

    function rebundle() {
        var stream = bundler.bundle();

        return stream
            .on('error', handleErrors)
            .pipe(source(file))
            .pipe(gulp.dest('./public/_js'))
            .pipe(reload({stream:true}))
    }

    // listen for an update and run rebundle
    bundler.on('update', function() {
        rebundle();
        gutil.log('Rebundling...');
    });

    // run it once the first time buildScript is called
    return rebundle();
}

/*-----------------------------------------*\
    DEFAULT TASKS
\*-----------------------------------------*/
gulp.task('scripts', function() {
    return buildScript('main.js', false); // this will once run once because we set watch to false
});

// run 'scripts' task first, then watch for future changes
gulp.task('default', ['styles', 'scripts', 'browser-sync'], function() {
    gulp.watch('assets/scss/**/*', ['styles']); // Gulp watch for style changes
    return buildScript('main.js', true); // Browserify watch for JS changes
});
