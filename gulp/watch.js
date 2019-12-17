var gulp = require("gulp"),
browserSync = require("browser-sync").create();

gulp.task('html',function(){
console.log("HTML file changes");
});

gulp.task('styles',function(){
    console.log("Styles files changes");
});

gulp.task('scripts',function(){
    console.log("Scripts files are added");
});

gulp.task('watch',function(){
    browserSync.init({
        server:{
            baseDir:'app'
        }
    });
    
    watch('./app/index.html',function(){
        browserSync.reload();
        gulp.start("html")
    });

    watch('./app/assets/styles/**/*.css',function(){
        browserSync.reload();
        gulp.start("styles");
    });

    watch('./app/assets/scripts/**/*.js',function(){
        browserSync.reload();
        gulp.start("scripts");
    });

});

