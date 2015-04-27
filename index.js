var gulp = require('gulp');
var less = require('gulp-less');
var merge = require('merge');
var sourcemaps = require('gulp-sourcemaps');
var prefixer = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');
var concat = require('gulp-concat');
var rename = require("gulp-rename");


module.exports = function( options ) {
	
	var defaults = {
		src: 'less/main.less',
		dest: 'public/css',
		name: 'main',
		less: {},
		prefixer: { cascade: true }
	}
	// merge options with default values
	options = merge( defaults, options );
	
	// return task function
	return function() {
		
		return gulp.src( options.src )
		.pipe( sourcemaps.init() )
	    .pipe( less( options.less ) )
	    .pipe( prefixer( options.prefixer ) )
	    .pipe( concat( options.name + '.css') )
	    .pipe( sourcemaps.write() )
	    .pipe( gulp.dest( options.dest ) )
	    
	    .pipe( minify() )
	    .pipe( rename( options.name + '.min.css' ) )
	    .pipe( gulp.dest( options.dest ) )
	    
	}
}