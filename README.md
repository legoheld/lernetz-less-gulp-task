# lernetz-less-gulp-task
A gulp task that compiles less files, applies the autoprefixer postcss processor, generates sourcemaps and a minified version.

## Usage
The following example will compile all the less files under the folder `less` into to output folder `public`.
It creates the following files:
* demo.css - the uncompressed css file including the sourcemap definition
* demo.min.css - the minified css file

```javascript
var gulp = require('gulp');
var lessTask = require( 'lernetz-less-gulp-task' );

gulp.task( 'less', lessTask( { name:'demo', desc:'public', src:'less/main.less' } ) );
```

## Options
The task accepts an parameter object with the following attributes:
```javascript
{
    name: 'name', // the file name of the generated files
    src: 'src/**.ts', // the source parameter for the gulp.src( .. )
    dest: 'public', // the destination used in gulp.dest( .. )
    less: {}, // options for the less compiler used in gulp-less: https://github.com/plus3network/gulp-less#options
	prefixer: { cascade: true } // options for the gulp-autoprefixer: https://github.com/sindresorhus/gulp-autoprefixer#options
}
```
