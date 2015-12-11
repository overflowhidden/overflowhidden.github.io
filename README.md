# X1-test


## Synopsis

This is the test task for X1-Group.
This task contain small markup page based on bootstrap, sass, gulpjs and javascript.


## Installation

To continue work with this project, please make the following steps:
- Install Nodejs https://nodejs.org/en/
- Install GulpJS: paste the following code in the command promt: npm install --global gulp (more info about of gulpJS installation  you can find here: https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
- Clone this project from github to your desktop, enter the folder project through the console and install all packages that need to continue to your work with this project:

npm install --save-dev gulp gulp-jsmin gulp-sass gulp-livereload gulp-autoprefixer gulp-minify-css gulp-jsmin gulp-rename gulp-connect 
- Run "gulp" command
- Open your browser and paste the url:http://localhost:8080/
- Now you can start with your work.

The most important files are:
- index.html in the root folder. Contain the html code of the mainpage.
- sass/main.scss - contains main styles for this project in scss format.
- sass/themes - contains three themes that changes by click on tabs on the left sidebar.
- bootstrap.scss - contains the bootstrap modules. Some of them are not in use. If you need them in future, just uncomment lines with modules that you need.
_fontello.scss - contains styles for the icons (icons in footer and an arrow in custom select)
_jsf.scss - contains the styles for the custom select
sass/bootstrap and sass/bootstrap/mixins folder contains all bootstrap modules and scss mixins. 
If you want to change some variables, you can open the file sass/bootstrap/_variables.scss
If you want to edit one of the existing themes, you can open one of the theme files that you can find in sass/theme folder.

