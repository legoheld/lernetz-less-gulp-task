var gulp = require('gulp');
var less = require('gulp-less');
var merge = require('merge');
var sourcemaps = require('gulp-sourcemaps');
var prefixer = require('gulp-autoprefixer');
var minify = require('gulp-cssnano');
var concat = require('gulp-concat');
var rename = require("gulp-rename");
var plumber = require("gulp-plumber");
var notify = require("gulp-notify");
var lessFunctions = require("less-plugin-functions");


module.exports = function( options ) {
	
	var defaults = {
		src: 'less/main.less',
		dest: 'public/css',
		name: 'main',
		less: {
			plugins: [ new lessFunctions ]
		},
		prefixer: { cascade: true }
	}
	// merge options with default values
	options = merge.recursive( defaults, options );
	
	// return task function
	return function() {
		
		return gulp.src( options.src )
		.pipe( plumber( { errorHandler: notify.onError("Error: <%= error.message %>") } ) )
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