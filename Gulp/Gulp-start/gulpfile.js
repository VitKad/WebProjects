  const {src , dest, watch, parallel, series} = require('gulp'),
    scss = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify-es').default,
    devip = require('dev-ip'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    del = require('del');

    function styles(){
        return src('app/scss/style.scss')
        .pipe(scss({outputStyle: 'compressed'}))
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 version'],
            grid: true
        }))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream());
    }

    function cleanDist(){
        return del('dist');
    }


    function images(){
        return src('app/img/**/*')
        .pipe(imagemin(
        [
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 75, progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(dest('dist/img'));
    }


    function build(){
        return src([
            'app/css/style.min.css',
            'app/fonts/**/*',
            'app/js/main.min.js',
            'app/*.html',

        ], {base:'app'})
        .pipe(dest('dist'));
    }

 
    function watching(){
        watch(['app/scss/**/*.scss'], styles);
        watch(['app/js/**/*.js' ,'!app/js/**/main.min.js'], scripts);
        watch(['app/**/*.html']).on('change', browserSync.reload);
       
    }


    function browsersync() {
        browserSync.init({
            server: {
                baseDir: "app/"
            },
             notify: false,
             host: devip() 
        });
    }


    function scripts(){
        return src([
            'node_modules/jquery/dist/jquery.js',
            /* 'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',
            'node_modules/slick-carousel/slick/slick.js',        
            'node_modules/ion-rangeslider/js/ion.rangeSlider.js',
            'node_modules/jquery-form-styler/dist/jquery.formstyler.js',
            'node_modules/rateyo/src/jquery.rateyo.js',
            'node_modules/mixitup/dist/mixitup.js',
            'node_modules/jquery-parallax.js/parallax.js', 
            'node_modules/accordionjs/accordion.js',  */
            'app/js/main.js'
        ])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js'))
        .pipe(browserSync.stream());
    }

    exports.styles = styles;
    exports.watching = watching;
    exports.browsersync = browsersync;
    exports.scripts = scripts;
    exports.images = images;

    exports.build = series(cleanDist, images, build);
    exports.default = parallel(styles, scripts, browsersync, watching);
