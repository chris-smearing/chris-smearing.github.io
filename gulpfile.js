// Initialize modules
// Importing specific gulp API functions lets us write them below as series() instead of gulp.series()
const { src, dest, watch, series, parallel } = require('gulp');
// Importing all the Gulp-related packages we want to use
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const replace = require('gulp-replace');
const browsersync = require('browser-sync').create();
const rename = require('gulp-rename');

const imagemin = require('gulp-imagemin');
const imageminWebp = require('gulp-webp');
const mozjpeg = require('imagemin-mozjpeg');

// Sass task: compiles the style.scss file into style.css
function scssTask(){    
    return src('scss/style.scss')
        .pipe(sourcemaps.init()) // initialize sourcemaps first
        .pipe(sass({ outputStyle: 'compressed' })) // compile SCSS to CSS
        // .pipe(postcss([ autoprefixer(), cssnano() ])) // PostCSS plugins
        .pipe(rename('style.min.css'))
        .pipe(sourcemaps.write('.')) // write sourcemaps file in current directory
        .pipe(dest('.'))
        .pipe(browsersync.reload({ stream: true }));
}

// JS task: concatenates and uglifies JS files to script.js
function jsTask(){
    return src(['js/*.min.js', '!js/bundle.min.js'])
        .pipe(concat('bundle.min.js'))
        .pipe(dest('js'))
        .pipe(browsersync.reload({ stream: true }));
}

function pageTask(){
    return src('index.html')
    .pipe(browsersync.reload({ stream: true }));
}

function imageTask() {
    return src('img/*.jpg')
        .pipe(
            imagemin([
                mozjpeg({
                    quality: 85, 
                    progressive: true
                })
            ])
        )
        .pipe(dest('images'))
        .pipe(imageminWebp({quality: 85}))
        .pipe(dest('images'));
}

function imageLqipTask() {
    return src('img/*.jpg')
        .pipe(rename(function (path) {
            path.basename += "-lqip";
        }))
        .pipe(
            imagemin([
                mozjpeg({
                    quality: 10, 
                    progressive: true
                })
            ])
        )
        .pipe(dest('images'))
}

// Watch task: watch SCSS and JS files for changes
// If any change, run scss and js tasks simultaneously
function watchTask(){
    watch('scss/**/*.scss', series(scssTask));
    watch(['js/**/*.min.js', '!js/bundle.min.js'], series(jsTask));
    watch('index.html', series(pageTask));
}

function browserSync(done) {
    browsersync.init({
      server: {
          baseDir: "./"
      },
      https: true
    });
    done();
}
  
// Export the default Gulp task so it can be run
exports.default = parallel(browserSync, watchTask); // $ gulp
exports.build = series(scssTask, jsTask, imageLqipTask, imageTask); // $ gulp build
exports.images = series(imageTask); // $ gulp images
exports.images_lqip = series(imageLqipTask); // $ gulp images_lqip