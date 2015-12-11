# x1-test

Project description will be goes here soon...






## Synopsis

This is the test task for X1-Group.
This task contain small markup page based on bootstrap, sass, gulpjs and javascript.


## Code Example

Show what the library does as concisely as possible, developers should be able to figure out **how** your project solves their problem by looking at the code example. Make sure the API you are showing off is obvious, and that your code is short and concise.

## Motivation

A short description of the motivation behind the creation and maintenance of the project. This should explain **why** the project exists.

## Installation

To continue working with this project, please make the following steps:
1. Install Nodejs https://nodejs.org/en/
2. Install GulpJS: paste the following code in the command promt $ npm install --global gulp (more info about installation GulpJS you can find here: https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
3. Clone this project from github to your desktop, enter in folder with project through the console and install all packages that will be need to continue your work with this project:

npm install --save-dev gulp gulp-jsmin gulp-sass gulp-livereload gulp-autoprefixer gulp-minify-css gulp-jsmin gulp-rename gulp-connect 
4. run "gulp" command
5. Open your browser and paste the url:http://localhost:8080/
6. Now you can start with your work.

The most important files are:
- index.html in the root folder 
- sass/main.scss - contains main styles for this project in scss format
- sass/themes - contains three themes that changes by click on tabs on the left sidebar
- bootstrap.scss - contains the bootstrap modules. Some of them are not in use. If you need them in future, just uncomment lines with modules that you need.
_fontello.scss - contains styles for the icons (in footer and an arrow in custom select)
_jsf.scss - contains the styles for the custom select
sass/bootstrap and sass/bootstrap/mixins folder contains all bootstrap modules. If you want to change some variables, you can open the file sass/bootstrap/_variables.scss
If you want to edit one of the existing themes, you can open one of the theme files that you can find in sass/theme folder.

