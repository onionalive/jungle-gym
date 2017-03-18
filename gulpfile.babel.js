var gutil 		= require('gulp-util');
var fs 			= require('fs');
var gulp 		= require('gulp');
var spawn 		= require('child_process').spawn;
var chalk 		= require('chalk');

require('dotenv').load();

gulp.task( "watch", function() {

	//
	// Watch Javascript Babel folder files 
	// 

	gulp.watch([
		'babel/*.js',
		'rxjs/*.js'
	]).on('change', function( file ) {
		var list = file.path.split('/');
		var folderName = list[list.length-2];
		var fileName = list[list.length-1];

		var name = fileName.split('.')[0];

		gutil.log(chalk.yellow(fileName + " changed"));

		var command = `./${folderName}/exec`;
		var out = 'Running JS Program:';

		spawnProc(command, name, '');
	});
	
	//
	// Watch C files 
	// 

	gulp.watch('**/*.c').on('change', function( file ) {
		var list = file.path.split('/');
		var fileName = list[list.length-1];

		var tempArr = fileName.split('.');
		var fileNamePrefix = tempArr[0];

		gutil.log(chalk.yellow(fileName + " changed"));

		var command = './c/exec';
		var out = 'Running C Program:';

		spawnProc(command, fileNamePrefix, out);
	});

	//
	// Watch Swift files 
	// 

	gulp.watch('**/*.swift').on('change', function( file ) {
		var list = file.path.split('/');
		var fileName = list[list.length-1];

		var tempArr = fileName.split('.');
		var fileNamePrefix = tempArr[0];

		gutil.log(chalk.yellow(fileName + " changed"));

		var command = './swift/exec';
		var out = 'Running Swift Program:';

		spawnProc(command, fileNamePrefix, out);
	});

	//
	// Watch C++ files 
	// 

	gulp.watch('**/*.cpp').on('change', function( file ) {
		var list = file.path.split('/');
		var fileName = list[list.length-1];

		var tempArr = fileName.split('.');
		var fileNamePrefix = tempArr[0];

		gutil.log(chalk.yellow(fileName + " changed"));

		var command = './c++/exec';
		var out = 'Running C++ Program:';

		spawnProc(command, fileNamePrefix, out);
	});

	//
	// Watch Go files 
	// 

	gulp.watch('**/*.go').on('change', function( file ) {
		var list = file.path.split('/');
		var fileName = list[list.length-1];

		var tempArr = fileName.split('.');
		var fileNamePrefix = tempArr[0];

		gutil.log(chalk.yellow(fileName + " changed"));

		var command = './go/exec';
		var out = 'Running Go Program:';

		spawnProc(command, fileNamePrefix, out);
	});

	//
	// Watch Objective-C files
	// 

	gulp.watch('**/*.m').on('change', function( file ) {
		var list = file.path.split('/');
		var fileName = list[list.length-1];

		var tempArr = fileName.split('.');
		var fileNamePrefix = tempArr[0];

		gutil.log(chalk.yellow(fileName + " changed"));

		var command = './objective-c/exec';
		var out = 'Running Objective-C Program:';

		gutil.log(chalk.green(out));
		spawnProc(command, fileNamePrefix, "");
	});

	gulp.watch([
		"js-testing/**/*.casper.test.js"
	], ["casper"]).on( "change", function( file ) {
		var list = file.path.split('/');
		var fileName = list[list.length-1];
	});

	gulp.watch([
		"js-testing/**/*.mocha.test.js"
	], ["mocha"]).on( "change", function( file ) {
		var list = file.path.split('/');
		var fileName = list[list.length-1];
	});

	gulp.watch([
		"js-testing/**/*.enzyme.test.js"
	], ["enzyme"]).on( "change", function( file ) {
		var list = file.path.split('/');
		var fileName = list[list.length-1];
	});

	//
	// Watch Python files 
	// 

	gulp.watch([
		"**/*.py"
	]).on( "change", function( file ) {
		var list = file.path.split('/');
		var fileName = list[list.length-1];

		var pyPath = list.slice(0, -1).join('/');
		var pyIn = `${pyPath}/${fileName}`;

		spawnProc('python3', [pyIn], `Run Python3 command`);
	});

	//
	// Watch PHP files
	// 

	gulp.watch([
		"**/*.php"
	]).on( "change", function( file ) {
		var list = file.path.split('/');
		var fileName = list[list.length-1];

		var phpPath = list.slice(0, -1).join('/');
		var phpIn = `${phpPath}/${fileName}`;

		spawnProc('php', [phpIn], `Run php ${phpIn}`);
	});

	//
	// Watch Ruby files
	// 

	gulp.watch([
		"**/*.rb"
	]).on( "change", function( file ) {
		var list = file.path.split('/');
		var fileName = list[list.length-1];

		var rubyPath = list.slice(0, -1).join('/');
		var rubyIn = `${rubyPath}/${fileName}`;

		spawnProc('ruby', [rubyIn], `Run rb ${rubyIn}`);
	});

	//
	// Watch Java files
	// 

	gulp.watch([
		"**/*.java"
	]).on( "change", function( file ) {
		var list = file.path.split('/');
		var fileName = list[list.length-1];

		// for post Java compilation
		var name = fileName.split('.')[0];
		gutil.log(chalk.green('Java compile ${fileName} and Java run ${name}'));
		spawnProc('./java/exec', [name], "");
	});

	// 
	// Watch Typescript
	// 

	gulp.watch([
		"**/*.ts"
	]).on( "change", function( file ) {
		var list = file.path.split('/');
		var fileName = list[list.length-1];

		var name = fileName.split('.')[0];

		var tsPath = list.slice(0, -1).join('/');
		var tsIn = `${tsPath}/${fileName}`;
		var jsOut = `${tsPath}/${name}`;

		gutil.log(chalk.green("Typescript conversion"));
		spawnProc("tsc", [tsIn], "TypeScript conversion");
		gutil.log(chalk.green("Running converted JS file"));
		setTimeout(() => {
			spawnProc("node", [jsOut], "");
		}, 1000);
	});

	gulp.watch([
		"*.md",
		"**/*.md",
		".env",
	]).on( "change", function( file ) {
		var list = file.path.split('/');
		var fileName = list[list.length-1];
	});
});

//
// Run Testing
// 

gulp.task("casper", function () {
	var casper = './js-testing/casperjs';
	var tests = [];

	fs.readdir(casper, (err, files) => {
		files.forEach(file => {
			tests.push(casper + "/" + file);
		});

		var casperChild = spawn('casperjs', ['test'].concat(tests));

		casperChild.stderr.on('data', function (data) {
			gutil.log('CasperJS Error:', data.toString().slice(0, -1)); // Remove \n
		});

		casperChild.stdout.on('data', function (data) {
			console.log(data.toString().slice(0, -1)); // Remove \n
		});

		casperChild.on('close', function (code) {
			var success = code === 0; // Will be 1 in the event of failure

			// Do something with success here
			if (success) {
				gutil.log(chalk.green('CasperJS: Successfully completed tests'));
			} else {
				gutil.log(chalk.red('CasperJS: Testing did not pass'));
			}
		});
	});
});

gulp.task("mocha", function () {
	var mocha = './js-testing/mocha';
	var mochaTests = [];

	fs.readdir(mocha, (err, files) => {
		files.forEach(file => {
			if (file.includes('test')) {
				mochaTests.push(mocha + "/" + file);
			}
		});

		var mochaChild = spawn('mocha', ['--compilers', 'js:babel-core/register', '--recursive'].concat(mochaTests));

		mochaChild.stderr.on('data', function (data) {
			gutil.log('Mocha Error:', data.toString().slice(0, -1)); // Remove \n
		});

		mochaChild.stdout.on('data', function (data) {
			console.log(data.toString().slice(0, -1)); // Remove \n
		});

		mochaChild.on('close', function (code) {
			var success = code === 0; // Will be 1 in the event of failure

			// Do something with success here
			if (success) {
				gutil.log(chalk.green('Mocha: Successfully completed tests'));
			} else {
				gutil.log(chalk.red('Mocha: Testing did not pass'));
			}
		});
	});
});

gulp.task("enzyme", function () {
	var mocha = './js-testing/enzyme';
	var mochaTests = [];

	fs.readdir(mocha, (err, files) => {
		files.forEach(file => {
			if (file.includes('test')) {
				mochaTests.push(mocha + "/" + file);
			}
		});

		var mochaChild = spawn('mocha', ['--compilers', 'js:babel-core/register', '--recursive'].concat(mochaTests));

		mochaChild.stderr.on('data', function (data) {
			gutil.log('Mocha Error:', data.toString().slice(0, -1)); // Remove \n
		});

		mochaChild.stdout.on('data', function (data) {
			console.log(data.toString().slice(0, -1)); // Remove \n
		});

		mochaChild.on('close', function (code) {
			var success = code === 0; // Will be 1 in the event of failure

			// Do something with success here
			if (success) {
				gutil.log(chalk.green('Mocha: Successfully completed tests'));
			} else {
				gutil.log(chalk.red('Mocha: Testing did not pass'));
			}
		});
	});
});

//
// Helper Funcs
// 

function spawnProc(command, data, message) {
	var runner = spawn(command, [data]);
	runner.stderr.on('data', function(data) {
		gutil.log(chalk.red(message));
		console.error(data.toString().slice(0, -1));
	});

	runner.stdout.on('data', function (data) {
		if (message !== '') gutil.log(chalk.green(message)); 
		console.log(data.toString().slice(0, -1));
	});
}



