# Simple Build System using Jade, Sass and Gulp

## Node.js, NPM, and Gulp  
  To run this on your computer you will need [node.js](https://nodejs.org/), npm (comes with node.js), and [gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) globally installed.

## Clone git repository
  To retrieve this repository from github run `git clone https://github.com/arecvlohe/SimpleBuildSystem.git` on your command line. Make sure to `cd` into a directory like `Desktop` first so that you can see the folder load onto your computer.

## NPM install
  After cloning the repo `cd` into your project and on the command line
  run `npm install gulp gulp-jade gulp-sass --save-dev` so that these `devDependencies` are saved in `package.json` file and as `node_modules` in your project folder.

## Gulp
  After the `devDependencies` are saved you can run `gulp` from your command and the html and css files will be built and watched for changes.

## Commands in order
  * `$ git clone https://github.com/arecvlohe/SimpleBuildSystem.git`
  * `$ cd NameOfDir`
  * `$ npm install gulp gulp-jade gulp-sass --save-dev`
  * `$ gulp`

## Exiting
  To stop gulp from the command line use `control c`.
